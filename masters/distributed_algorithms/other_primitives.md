# other primitives

## non-blocking atomic commit

1. **agreement**: no two processes decide differently
2. **termination**: every correct process eventually decides
3. **commit-validity**: 1 can only be decided if all processes propose 1
4. **abort-validity**: 0 can only be decided if some process crashes or proposes 0

```
Implements: NonBlockingAtomicCommit (nbac)
Uses:
  - beb
  - PerfectFailureDetector
  - UniformConsensus (ucons)

upon event <Init>
  prop = 1
  delivered = ∅
  correct = S

upon event <crash, pi>
  correct = correct \ {pi}

upon event <Propose, v>
  trigger <bebBroadcast, v>

upon event <bebDeliver, pi, v>
  delivered = delivered ∪ {pi}
  prop = prop * v

upon event correct \ delivered == ∅
  if correct != S
    prop = 0
  trigger <uconsPropose, prop>

upon event <uconsDecide, decision>
  trigger <Decide, decision>
```

## group memberships

To know who is participating in an exchange. Similar to failure detector.

1. **local monotonicity**: if a process installs view (j, M) after installing (k, N) then j > k and N $\subseteq$ M
2. **agreement**: no two processes install views (j, M) and (j, M') such that M $\ne$ M'
3. **completeness**: if a process p crashes, then there is an integer j such that every correct process eventually installs view (j, M) such that p $\notin$ M
4. **accuracy**: if some process installs a view (i, M) and p $\notin$ M, then p has crashed

```
Implements: GroupMembership (gmp)
Uses:
	- PerfectFailureDetector (P)
	- UniformConsensus (ucons)

upon event <Init>
  view = (id: 0, memb: S)
  correct = S
  wait = false

upon event <crash, pi>
  correct = correct \ {pi}

upon event (correct ⊊ view.memb) and (wait == false)
  wait = true
  trigger <uconsPropose, (view.id + 1, correct)>

upon event <uconsDecided, (id, memb)>
  view = (id, memb)
  wait = false
  trigger <membView, view>
```

### with joining/leaving

Group membership but we can coordinate leaving/joining.

## view synchrony

Properties of group membership plus reliable broadcast plus a new property:

1. **view synchrony**: a message is vsDelivered in the view where it was vsBroadcast

While deciding on a view broadcasting is blocked.

```
Implements: ViewSynchrony (vs)
Uses:
  - GroupMembership (gmp)
  - TerminatingReliableBroadcast (trb)
  - BestEffortBroadcast (beb)

upon event <Init>
  view = (id: 0, memb: S)
  nextView = ⊥
  pending = ∅
  delivered = ∅
  trbDone = ∅
  flushing = false
  blocked = false

upon event <vsBroadcast, m> and (blocked == false)
  delivered = delivered ∪ {m}
  trigger <vsDeliver, self, m>
  trigger <bebBroadcast, [Data, view.id, m]>

upon event <bebDeliver, src, [Data, vid, m]>
  if (view.id == vid) and (m not in delivered) and (blocked == false)
    delivered = delivered ∪ {m}
    trigger <vsDeliver, src, m>

upon event <membView, V>
  addToTail(pending, V)

upon (pending != ∅) and (flushing == false)
  nextView = removeFromHead(pending)
  flushing = true
  trigger <vsBlock>

upon event <vsBlockOk>
  blocked = true
  trbDone = ∅
  trigger <trbBroadcast, (view,id, delivered)>

upon event <trbDeliver, p, (vid, deli)>
  trbDone = trbDone ∪ {p}
  for (m in deli) and (m not in delivered)
    delivered = delivered ∪ {m}
    trigger <vsDeliver, p, m>

upon event (trbDone == view.memb) and (blocked == true)
  view = nextView
  flushing = false
  blocked = false
  delivered = ∅
  trigger <vsView, view>
```

### consensus based

```
Implements: ViewSynchrony (vsc)
Uses:
  - UniformConsensus (gmp)
  - PerfectFailureDetector (P)
  - BestEffortBroadcast (beb)

upon event <Init>
  view = (id: 0, memb: S)
  correct = S
  flushing = false
  blocked = false
  delivered = ∅
  dSet = ∅

upon event <vsBroadcast, m> and (blocked == false)
  delivered = delivered ∪ {m}
  trigger <vsDeliver, self, m>
  trigger <bebBroadcast, [Data, view.id, m]>

upon event <bebDeliver, src, [Data, vid, m]>
  if (view.id == vid) and (m not in delivered) and (blocked == false)
    delivered = delivered ∪ {m}
    trigger <vsDeliver, src, m>

upon event <crash, p>
  correct = correct \ {p}
  if flushing == false
    flushing = true
    trigger <vsBlock>

upon event <vsBlockOk>
  blocked = true
  trigger <bebBroadcast, [DSET, view.id, delivered]>

upon event <bebDeliver, src, [DSET, vid, deli]>
  dSet = dSet ∪ {(src, deli)}
  if forall p in correct, (p, mSet) in dSet
    trigger <uconsPropose, (view.id+1, correct, dSet)>

upon event <uconsDecided, (id, memb, vsdset)>
  for (p, mSet) in vsdset such that p in memb
    for (src, m) in mSet such that m not in delivered
      delivered = delivered ∪ {m}
      trigger <vsDeliver, src, m>
  view = (id, memb)
  flushing = false
  blocked = false
  dSet = ∅
  delivered = ∅
  trigger <vsView, view>
```
