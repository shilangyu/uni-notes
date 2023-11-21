# shared memory

Registers local to a process. See [concurrent computing](../concurrent_computing/registers.md) for definitions.

## regular register (single writer)

Regular register implemented as message passing. Write is global (broadcast information of a write), read is local (read the cached value).

If we do not have a failure detector we can use the majority and timestamps instead.
