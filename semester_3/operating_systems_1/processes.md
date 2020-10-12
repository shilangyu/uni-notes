# processes

Instance of a program that is being executed.

## concepts

A process can be described as either:

- IO-bound process - spends more time doing IO than computations; many short CPU bursts
- CPU-bound process – spends more time doing computations; few very long CPU bursts

### structure

- text: code
- data: global/static variables
- stack: temporary quick access data
- heap: dynamically allocated memory during runtime

Stack and heap is growable/shrinkable.

### states

- new: The process is being created
- ready: The process is waiting to be assigned to a processor
- running: Instructions are being executed
- waiting: The process is waiting for some event to occur
- terminated: The process has finished execution

### process control block (PCB)

Stores information about running processes. pid, process state, CPU registers, CPU scheduling info (priorities, queue), memory limits, stats etc.

### context switch

Switching from one process to another. Requires saving current PCB and loading the one that is needed. Context switches are expensive to perform.

## scheduling

Maximize/optimize CPU use. Decides which process is executed next.

Processes move around these queues:

- job queue
- ready queue
- device queue

### types

- short-term scheduler: selects the next process and allocates CPU (fast, often runs)
- long-term scheduler: selects processes into the read queue (slower, rarely runs)
- medium-term scheduler: swaps out/in processes from/to disk to/from memory

## operations

Processes are a tree: parents can create its own processes called children.

- parent and children execute concurrently
- parent has to wait until children terminate

### fork

Creates a new child process with a copy of the current process' memory, registers, etc.

### exec family

Executing other programs with arguments.

### process termination

`exit()` exits current process with a given status code.

`kill(pid, SIGNAL)` kills a process.

- If no parent was waiting for its child, the child process becomes a _zombie_
- If parent terminates before the child, the child process becomes an _orphan_ (some operating systems don't allow such behavior and all children are killed if the parent terminated)

All resources are deallocated by the operating system.

#### wait

Waits for child to exit. Returns the exit code and pid of the child process.

### inter-process communication (IPC)

Either by shared memory or message passing.
