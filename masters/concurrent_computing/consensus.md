# consensus

1. **wait-free-termination**: if a correct process proposes, then it eventually decides
2. **agreement**: no two processes decide differently
3. **validity**: any value decided must have been proposed

## consensus impossibility

Proof by lemma 1 + lemma 2. As adversary we start at a bivalent configuration and can always takes steps to another bivalent configuration never reaching a consensus.

### lemma 1

There exists a bivalent initial configuration.

### lemma 2

Given a bivalent configuration, there exists an arbitrarily long sequence of steps that lead to a bivalent configuration.

## fetch&increment

A counter containing an integer. The operation `fetch&inc()` increments the counter and returns the new value.

Consensus can be implemented among two processes with fetch&increment and registers. Since consensus is impossible (with r/w registers), then fetch&increment is impossible.

Reg[1, 2] = [0, 0], C initialized to zero

```
propose(v)
	R[i] = v
	val = C.fetch&inc()
	if val == 1
		return v
	else
		return R[1]
```

## queue

A queue has two operations `enq(v)` and `deq()`.

Consensus can be implemented among two processes with queue and registers. Since consensus is impossible (with r/w registers), then queue is impossible.

Reg[1, 2] = [0, 0], Q initialized to [winner, loser]

```
propose(v)
	R[i] = v
	item = Q.deq()
	if item == winner
		return v
	else
		return R[1]
```

## universality

A type T is **universal** if together with other registers instance of T can be used to provide a wait-free linearizable implementation of any other type.

### universal construction

Given a consensus object we can implement all other deterministic objects. Processes publish the operation they would like to perform to a shared `requests` object. Then the perform consensus on the collected requests minus those that the process has already executed. The consensus decides on a request that will be performed next. This ensures all processes simulate execution of all other processes in the exactly same way.

### consensus number

A construction has consensus number $n$ if that construction can solve consensus for $n$ processes, but not for $n+1$.

- Compare&Swap has consensus number $\infty$
- Test&Set has consensus number $2$
- Register has consensus number $1$

## obstruction-freedom

If a process executes alone (no concurrence) it will complete its operation.

### o-consensus

Consensus with:

- **obstruction-free-termination**: if a correct process proposes and eventually executes alone, then the process eventually decides

Reg[1, .., N] array of registers Reg[i].T is a timestamp, Reg[i].V is a pair (value, timestamp). `ts` is initialized to `i` (process number).

```
fn propose(v)
	while true
		Reg[i].T = ts
		val = highestTspValue(Reg[..])
		if val = ⊥
			val = v
		Reg[i].V = (val, ts)
		if ts = highestTsp(Reg[..])
			return val
		ts = ts + N
```

## lock-freedom

Individual processes may starve, but there is system wide progress.

### l-consensus

Consensus with:

- **lock-free-termination**: if a correct process proposes, then at least one correct process eventually decides

We need a <>leader.

```
fn propose(v)
	while true
		if leader()
			Reg[i].T = ts
			val = highestTspValue(Reg[..])
			if val = ⊥
				val = v
			Reg[i].V = (val, ts)
			if ts = highestTsp(Reg[..])
				return val
			ts = ts + N
```

If the process that decided would write the result into register `Res` and the loop condition was changed to `while Res == ⊥` and we would return `Res`, then the algorithm would be wait-free with timing assumptions. The execution that makes it not fully wait-free are processes exponentially slowing down. So consensus is possible in an <>synchronous environment.

#### leader

It has an operation `leader()` returning a boolean. If true is return to a process, it is a leader. If a correct process invokes `leader()`, then the invocation returns and eventually, some correct process is permanently the only leader.

`check` and `delay` is initialized to 1. `last[1, .., N]` and `Reg[1, .., N]` initialized to zero. The ask `update` is started in the background of processes using <>leader.

```
fn leader()
	return leader == self

task update
	clock = 0
	while true
		if leader == self
			Reg[i] = Reg[i] + 1
		clock = clock + 1
		if clock == check
			elect()

priv fn elect()
	no_leader = true

	for j in 1:(i-1)
		if Reg[j] > last[j]
			last[j] = Reg[j]
			if leader != pj
				delay = delay * 2
			leader = pj
			no_leader = false
			break

	check = check + delay

	if no_leader
		leader = self
```
