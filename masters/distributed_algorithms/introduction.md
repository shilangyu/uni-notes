# introduction

- **reliable broadcast** - ensure that a message is received by receivers, or that no one has received it
- **atomic commit** - ensure that all processes agree that a transaction should be committed or aborted
- **process** - separate computers, communicate through links. Two failures are distinguished
  - **omission** - the process omits to send a message
  - **arbitrary** - the process sends something it was not supposed to
  - **crash-stop**
  - **correct** - a process is correct when it never fails
- **channels** - communication network. Messages are uniquely identified
  - **fair-loss link** - similar to UDP
  - **stubborn link** - a message that was sent is delivered an infinite amount of times
  - **perfect (reliable) link** - similar to TCP
- **failure detectors** - detection of failing processes (for example by timing assumptions). Defined by completeness and accuracy.
  - **perfect** - Strong completeness (eventually every process that crashed is detected to have crashed). Strong accuracy (no process is suspected before it crashes).
  - **eventually perfect** - Strong completeness. Eventual Strong accuracy.
- **safety** - property that nothing bad will happen
- **liveness** - property that something good will happen

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
  trigger <rbDelivered, self, m>
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

$\cup$

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
