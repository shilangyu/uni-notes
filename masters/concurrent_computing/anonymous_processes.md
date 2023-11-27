# anonymous processes

## weak counter

A counter with the regular property.

correctness: if an operation p1 precedes another op2, then op2 returns a value that is larger than op1

```
fn wInc()
	i = 0
	while Reg[i] != 0
		if L has been updated n times
			return the largest value seen in L
		i = i + 1

	L = i
	Reg[i] = 1
	return 1
```

## snapshot

The same way as non-anonymous snapshot, but using the anonymous counter.

## consensus

### binary obstruction-free

An infinite list of registers Reg{0}[..] and Reg{1} for value 0 and 1 respectively. Initialized to $\bot$.

```
fn propose(v)
	i = 1
	while true
		if Reg{1-v}[i] == 0
			Reg{v}[i] = 1
			if i > 1 and Reg{1-v}[i-1] == 0
				return v
		else
			v = 1 - v
		i = i + 1
```

### binary lock-free

In a <>synchronous environment.

```
fn propose(v)
	white true
		if Reg{1-v}[i] = 0
			Reg{v}[i] = 1
			if i > 1 and Reg{1-v}[i-1] == 0
				return v
		else if Reg{v}[i] = 0
			v = 1 - v

		if v == 1
			wait(2*i)
		i = i + 1
```
