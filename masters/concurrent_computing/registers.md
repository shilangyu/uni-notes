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
