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

## faulty registers

1. responsive: if enters a $\bot$ state (all reads return $\bot$) then it stays in this state
2. non-responsive: might never reply. Impossible to distinguish from a slow register in the asynchronous model

### responsive MRSW $\to$ MRSW

Given that $t$ registers might fail.

Reg[1..t+1] MRSW responsive registers.

```
fn write(v)
	for j in 1:t+1
		Reg[j] = v

fn read()
	for j in t+1 to 1
		v = Reg[j]
		if v != ⊥
			return v
```

### non-responsive SRSW $\to$ SRSW

Given that $t$ registers might fail.

Reg[1..2t+1] MRSW non-responsive registers. seq initially set to 1. sn initially set to -1. val initially set to ⊥

```
fn write(v)
	seq = seq + 1
	parallel for j in 1:2t+1
		Reg[j] = (seq, v)
	<<wait for majority of ACKs>>

fn read()
	parallel for j in 1:2t+1
		(s, v) = Reg[j]
	(sn, val) = "(s,v) with the highest s from majority, including old (sn, val)"
	return val
```
