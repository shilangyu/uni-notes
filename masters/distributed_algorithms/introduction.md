# introduction

- **atomic commit** - ensure that all processes agree that a transaction should be committed or aborted
- **process** - separate computers, communicate through links. Two failures are distinguished
  - **omission** - the process omits to send a message
  - **arbitrary** - the process sends something it was not supposed to
  - **crash-stop**
  - **correct** - a process is correct when it never fails
- **safety** - property that nothing bad will happen
- **liveness** - property that something good will happen

## channels

Communication network. Messages are uniquely identified.

### fair-loss links

Similar to UDP

1. **Fair-loss**: if a message is sent infinitely often by pi to pj, and neither pi or pj crashes, then m is delivered infinitely often by pj
2. **Finite duplication**: if a message m is sent a finite number of times by pi to pj then m is delivered a finite number of times by pj
3. **No creation**: no message is delivered unless it was sent

### stubborn links

1. **Stubborn delivery**: if a process pi sends a message m to a correct process pj, and pi does not crash, then pj delivers m an infinite number of times
2. **No creation**: no message is delivered unless it was sent

### reliable (perfect) links

1. **Validity**: if pi and pj are correct, then every message sent by pi to pj is eventually delivered by pj
2. **No duplication**: no message is delivered more than once
3. **No creation**: no message is delivered unless it was sent

## failure detectors

Detection of failing processes (for example by timing assumptions). Defined by completeness and accuracy.

### perfect

- **Strong completeness**: eventually, every process that crashes is permanently suspected by every correct process
- **Strong accuracy**: no process is suspected before it crashes

### eventually perfect

- **Strong completeness**: eventually, every process that crashes is permanently suspected by every correct process
- **Eventual strong accuracy**: eventually, no correct process is ever suspected

## broadcast

Sending some message to all other processes.

### best-effort (beb)

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

### reliable broadcast (rb)

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

### uniform broadcast (urb)

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

### causal broadcast (co)

- request: `<coBroadcast, m>`
- indication: `<coDeliver, src, m>`

Let m1 and m2 be any two messages. m1 $\prec$ m2

1. **FIFO order**: some process pi broadcasts m1 before broadcasting m2
2. **local order**: some process pi delivers m1 and then broadcasts m2
3. **transitivity**: there is a message m3 such that m1 $\prec$ m3 and m3 $\prec$ m2

#### reliable causal broadcast (rcb)

##### Algorithm 1

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
  ack[m] = ∅ for all m

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

##### Algorithm 2

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
  while (s, [Data, VC_m, m]) in pending and forall pk: (VC[pk] >= VC_m[pk])
    pending = pending \ {(pj, [Data, VC_m, m])}
    trigger <rcoDeliver, self, m>
    VC[s] = VC[s] + 1
```

#### uniform causal broadcast (ucb)

Using algorithms for rcb but with an underlying urb instead of a rb.
