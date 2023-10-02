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
	return Reg[i].read()

fn write(v)
	for j in 1:N
		Reg[j].write(v)
```

This also works for multi-valued registers and regular ones.
