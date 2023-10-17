# broadcast

Sending some message to all other processes.

## best-effort (beb)

- request: `<bebBroadcast, m>`
- indication: `<bebDeliver, src, m>`

1. **validity**: If $p_i$ and $p_j$ are correct, then every message broadcast by $p_i$ is eventually delivered to $p_j$
2. **no duplication**: no message is delivered more than once
3. **no creation**: no message is delivered unless it was broadcast

```
Implements: beb
Uses: PerfectLinks (pp2p)

upon event <bebBroadcast, m>
  for p in S
    trigger <pp2pSend, p, m>

upon event <pp2pDeliver, pi, m>
  trigger <bebDeliver, pi, m>
```

## reliable broadcast (rb)

- request: `<rbBroadcast, m>`
- indication: `<rbDeliver, src, m>`

1. **validity**
2. **no duplication**
3. **no creation**
4. **agreement**: for any message $m$ if any correct process delivers $m$ then every correct process delivers $m$

```
Implements: rb
Uses:
  - beb
  - PerfectFailureDetector

upon event <Init>
  delivered = ∅
  correct = S
  for p in S
    from[p] = ∅

upon event <rbBroadcast, m>
  delivered = delivered ∪ {m}
  trigger <rbDeliver, self, m>
  trigger <bebBroadcast, [Data, self, m]>

upon event <crash, pi>
  correct = correct \ {pi}

  for [pj, m] in from[pi]
    trigger <bebBroadcast, [Data, pj, m]>

upon event <bebDeliver, pi, [Data, pj, m]>
  if m not in delivered
    delivered = delivered ∪ {m}
    trigger <rbDeliver, pj, m>
    if pi not in correct
      trigger <bebBroadcast, [Data, pj, m]>
    else
      from[pi] = from[pi] ∪ {[pj, m]}
```

## uniform broadcast (urb)

- request: `<urbBroadcast, m>`
- indication: `<urbDeliver, src, m>`

1. **validity**
2. **no duplication**
3. **no creation**
4. **uniform agreement**: for any message $m$ if any process delivers $m$ then every correct process delivers $m$

```
Implements: urb
Uses:
  - beb
  - PerfectFailureDetector

upon event <Init>
  delivered = ∅
  forward = ∅
  correct = S
  ack[Message] = ∅

upon event <crash, pi>
  correct = correct \ {pi}

upon event <urbBroadcast, m>
  forward = forward ∪ {[self, m]}
  trigger <bebBroadcast, [Data, self, m]>

upon event <bebDelivered, pi, [Data, pj, m]>
  ack[m] = ack[m] ∪ {pi}

  if [pj, m] not in forward
    forward = forward ∪ {[pj, m]}
    trigger <bebBroadcast, [Data, pj, m]>

upon event (for any [pj, m] in forward) <correct ⊆ ack[m]> and <m not in delivered>
  delivered = delivered ∪ {m}
  trigger <urbDelivered, pj, m>
```

## causal broadcast (co)

- request: `<coBroadcast, m>`
- indication: `<coDeliver, src, m>`

- **Causal order**: if any process pi delivers a message m2, then pi must have delivered all message m1 such that m1 $\prec$ m2.

### causality

Let m1 and m2 be any two messages. m1 $\prec$ m2 (m1 precedes m2) iff:

1. **FIFO order**: some process pi broadcasts m1 before broadcasting m2
2. **local order**: some process pi delivers m1 and then broadcasts m2
3. **transitivity**: there is a message m3 such that m1 $\prec$ m3 and m3 $\prec$ m2

### reliable causal broadcast (rcb)

#### Algorithm 1

```
Implements: ReliableCausalOrderBroadcast (rco)
Uses: rb

upon event <Init>
  delivered = ∅
  past = ∅

upon event <rcoBroadcast, m>
  trigger <rbBroadcast, [Data, past, m]>
  past = past ∪ {[self, m]}

upon event <rbDeliver, pi, [Data, past_m, m]>
  if m not in delivered
    for [sn, n] in past_m
      if n not in delivered
        trigger <rcoDeliver, sn, n>
        delivered = delivered ∪ {n}
        past = past ∪ {[sn, n]}
    trigger <rcoDeliver, pi, m>
    delivered = delivered ∪ {m}
    past = past ∪ {[pi, m]}
```

```
Implements ReliableCausalOrderBroadcastWithGarbageCollection (rco)
Extends: rco
Uses:
  - rb
  - PerfectFailureDetector

upon event <Init>
  delivered = ∅
  past = ∅
  correct = S
  ack[] = ∅

upon event <crash, pi>
  correct = correct \ {pi}

upon for some m in delivered and self not in ack[m]
  ack[m] = ack[m] ∪ {self}
  trigger <rbBroadcast, [ACK, m]>

upon event <rbDeliver, pi, [ACK, m]>
  ack[m] = ack[m] ∪ {pi}
  if correct ⊆ ack[m]
    past = past \ {[sm, m]}
```

#### Algorithm 2

```
Implements: ReliableCausalOrderBroadcast (rco)
Uses: rb

upon event <Init>
  for pi in S
    VC[pi] = 0
  pending = ∅

upon event <rcoBroadcast, m>
  trigger <rcoDeliver, self, m>
  trigger <rbBroadcast, [Data, VC, m]>
  VC[self] = VC[self] + 1

upon event <rbDeliver, pj, [Data, VC_m, m]>
  if pj != self
    pending = pending ∪ {(pj, [Data, VC_m, m])}
    deliver-pending()

function deliver-pending
  while (s, [Data, VC_m, m]) in pending such that forall pk: (VC[pk] >= VC_m[pk])
    pending = pending \ {(pj, [Data, VC_m, m])}
    trigger <rcoDeliver, self, m>
    VC[s] = VC[s] + 1
```

### uniform causal broadcast (ucb)

Using algorithms for rcb but with an underlying urb instead of a rb.

## total order broadcast (tob)

Processes must deliver all messages according to the same order.

- request: `<tobBroadcast, m>`
- indication: `<tobDeliver, src, m>`

1. **validity**
2. **no duplication**
3. **no creation**
4. **(uniform) agreement**: for any message $m$ if a correct (any) process delivers $m$ then every correct process delivers $m$
5. **(uniform) total order**: let m1 and m2 be two messages. Let pi be correct (any) process that delivers m1 without having delivered m2. Then no correct (any) process delivers m2 before m1.

```
Implements: TotalOrder (to)
Uses:
  - rb
  - Consensus (cons)

upon event <Init>
  unordered = ∅
  delivered = ∅
  wait = false
  sn = 1

upon event <toBroadcast, m>
  trigger <rbBroadcast, m>

upon event <rbDeliver, sm, m> and m not in delivered
  unordered = unordered ∪ {[sm, m]}

upon unordered != ∅ and not(wait)
  wait = true
  trigger <Propose, unordered>_sn

upon event <Decide, decided>_sn
  unordered = unordered \ decided
  ordered = deterministicSort(decided)
  for [sm, m] in ordered
    trigger <toDeliver, sm, m>
    delivered = delivered ∪ {m}
  sn = sn + 1
  wait = false
```

## (uniform) consensus

Processes propose values and must agree on one among these values.

- request: `<Propose, v>`
- indication: `<Decide, v'>`

1. **validity**: any value decided is a value proposed
2. **(uniform) agreement**: no two correct (any) processes decide differently
3. **termination**: every correct process eventually decides
4. **integrity**: every process decides at most once

### algorithm 1

The leader of each round is picked sequentially for each process (p1 is leader of first round, p2 is leader of second round etc). Leader decides using its own proposal and broadcasts it to all.

```
Implements: Consensus (cons)
Uses:
  - beb
  - PerfectFailureDetector

upon event <Init>
  suspected = ∅
  currentProposal = nil
  round = 1
  broadcast = false
  delivered[] = false

upon event <crash, pi>
  suspected = suspected ∪ {pi}

upon event <Proposal, v>
  if currentProposal == nil
    currentProposal = v

upon event <bebDeliver, p_round, value>
  currentProposal = value
  delivered[round] = true

upon event delivered[round] == true or p_round in suspected
  round = round + 1

upon event p_round == self and broadcast == false and currentProposal != nil
  trigger <Decide, currentProposal>
  trigger <bebBroadcast, currentProposal>
  broadcast = true
```
