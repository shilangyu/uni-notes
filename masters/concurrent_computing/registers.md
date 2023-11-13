# registers

Have read and write operations. They store integers. Initial state is 0.

## dimensions

- dimension 1: binary / multivalued
- dimension 2:
  - SRSW (single reader, single writer)
  - MRSW (multiple readers, single writer)
  - MRMW (multiple readers, multiple writes)
- dimension 3: sage / regular / atomic

### safe execution

Reads return the value from the last finished write.

### regular execution

Reads return the value from the last finished write or the value concurrently written.

### atomic execution

Each operation executes in a particular point in time.

## theorem

A multivalued MRMW atomic register can be wait-free implemented with binary SRSW safe registers.

### safe binary SRSW $\to$ safe binary MRSW

Let Reg[1, .., N] be an array of SRSW registers.

```
fn read()
	return Reg[i]

fn write(v)
	for j in 1:N
		Reg[j] = v
```

This also works for multi-valued registers and regular ones.

### safe binary MRSW $\to$ regular binary MRSW

Let Reg be a safe register

```
fn read()
	return Reg

fn write(v)
	if old != v
		Reg = v
		old = v
```

### binary MRSW $\to$ M-valued MRSW

Let Reg[1, ..., M] init to [1, 0, ..., 0]

```
fn read()
	for j in 1:M
		if Reg[j] == 1
			return j

fn write(v)
	Reg[v] = 1
	for j in rev(1:(v-1))
		Reg[j] = 0
```

### SRSW regular $\to$ SRSW atomic

Let Reg be a regular SRSW

```
fn read()
	(t', x') = Reg
	if t’ > t
		t = t'
		x = x'
	return x

fn write(v)
	t = t+1
	Reg = (t, v)
```

### SRSW atomic $\to$ MRSW atomic

We assume there are N readers. Let RReg[(1, 1), (1, 2), ..., (N, N)] be N\*N SRSW atomic registers for readers to communicate. Let WReg[1, ..., N] be SRSW atomic registers.

```
fn read()
	for j in 1:N
		(t[j], x[j]) = RReg[i, j]
	(t[0], x[0]) = WReg[i]
	(t, x) = highest(t[..], x[..])
	for j in 1:N
		RReg[j, i] = (t, x)
	return x

fn write(v)
	t1 = t1 + 1
	for j in 1:N
		WReg[j] = (t1, v)
```

### MRSW atomic $\to$ MRMW atomic

Let Reg[1, ..., N] be MRSW atomic registers.

```
fn read()
	for j in 1:N
		(t[j], x[j]) = Reg[j]
	(t, x) = highest(t[..], x[..])
	return x

fn write(v)
	for j in 1:N
		(t[j], x[j]) = Reg[j]
	(t, x) = highest(t[..], x[..])
	t = t + 1
	Reg[i] = (t, v)
```

## limitations of registers

**Theorem**: there is no wait-free algorithm that implements a SRSW atomic register that uses a finite number of bounded SRSW regular registers where the base registers are only written by the writer.

To prove we simplify the problem WLOG:

1. the higher-level register is binary
2. instead of many SRSW regular registers we will use only one

**Theorem**: there is no wait-free algorithm that implements a MRSW atomic register using many SRSW atomic registers where the base registers can only be written by the writer.

## counter

```
fn read()
	sum = 0
	for j in 1:N
		sum = sum + Reg[j]
	return sum

fn inc()
	Reg[i] = Reg[i] + 1
```

## snapshot

```
fn collect()
	for j in 1:N
		x[j] = Reg[j]
	return x

fn scan()
	t1 = collect()
	t2 = t1
	while true
		t3 = collect()
		if t3 == t2
			return t3
		for j in 1:N
			if t3[j].2 >= t1[j].2 + 2
				return t3[j].3
		t2 = t3

fn update(v)
	ts = ts + 1
	Reg[i] = (v, ts, scan())
```

## fetch&increment

A counter containing an integer. The operation `fetch&inc()` increments the counter and returns the new value.

Consensus can be implemented among two processes with fetch&increment and registers. Since consensus is impossible, then fetch&increment is impossible.

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

Consensus can be implemented among two processes with queue and registers. Since consensus is impossible, then queue is impossible.

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

## consensus impossibility

Proof by lemma 1 + lemma 2. As adversary we start at a bivalent configuration and can always takes steps to another bivalent configuration never reaching a consensus.

### lemma 1

There exists a bivalent initial configuration.

### lemma 2

Given a bivalent configuration, there exists an arbitrarily long sequence of steps that lead to a bivalent configuration.

## universality

A type T is **universal** if together with other registers instance of T can be used to provide a wait-free linearizable implementation of any other type.

### consensus number

A construction has consensus number $n$ if that construction can solve consensus for $n$ processes, but not for $n+1$.

- Compare&Swap has consensus number $\infty$
- Test&Set has consensus number $2$
- Register has consensus number $1$
