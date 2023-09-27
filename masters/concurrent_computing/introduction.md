# introduction

## processes

- finite set of processes that know each other $p_1, \cdots, p_N$
- processes are sequential but work independently
- no assumption on the speed of individual processes
- crashed process does not recover
- process is called **correct** if it does not crash, otherwise it is called **faulty**
- processes access shared objects through their operations which return replies

### wait-freedom

A process gets replies despite the crash of other processes. Operations look sequential from the outside.

### register

Has a read and write operation. Initially stores 0, we assume it stores integers.
