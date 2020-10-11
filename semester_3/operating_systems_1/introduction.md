# introduction

## overview

Operating system (OP) is something that:

- acts as a intermediary between a user and the hardware
- fairly allocates resources
- has an always running kernel
- executes user programs

### structure

1. computer hardware: CPU, memory, IO devices
2. operating system: _see above_
3. program: instructions defining the way in which the system resources are used to solve the computing problems of the users
4. users: people, other computers

### multiprogramming

OP has to schedule jobs to evenly distribute work across CPU cores:

- when one job is waiting for something (for example IO), OP switching to a different job
- allocate physically private memory chunks for each job
- provides interfaces for shared devices through IO functions

### timesharing (multitasking)

When the CPU switches the jobs very frequently making it feel like multiple jobs are running simultaneously. If processes use more memory than available, **swapping** moves them in and out between memory and swap memory (swap file/swap partition).

### real-time (RT) systems

Systems with a rigid time requirement

#### hard RT systems

- time-critical systems like industrial control, robotics, embedded
- can't exist in universal/multi-mode systems
- prevent usage of cost effective solutions like virtual memory, dynamic loading (introduces unpredictable response times)

#### soft RT systems

- attempt to meet deadlines but can fail in return for a more overall cost-effective system
- used when predictable response times are not a requirement

### interface

### concurrent resource usage

Jobs have access to shared resources only indirectly - through system calls (syscall). Often implemented through some system function to form an interface between OP and user programs.

Multiprogramming and timesharing. Concurrent resource use is implemented with:

- interrupts
- communication and synchronization
- multi-core architectures

#### symmetric multiprocessing (SMP)

CPUs share the whole system

#### asymmetric multiprocessing (SMP)

One master and many slave (workers) CPUs

### syscall API

Example scenario with C's `printf()` (POSIX environment)

- `printf()` is called
- formatted string is stored in a local stdout buffer
- when the buffer is full (or forcefully flushed with `fflush()`) a `write` syscall is dispatched to move the buffer to a destination device

### structure

#### simple system: MS-DOS

- single-tasking
- shell spawned on boot up
- single memory space
- loads a program into memory overwriting all but the kernel
- when program ends the shell is reloaded

#### monolithic system

- kernel as a single program
- system programs

#### microkernel system

- moved as much functionality to user space
- communication with message passing

| pros                                                        | cons                                                            |
| ----------------------------------------------------------- | --------------------------------------------------------------- |
| easier to extend with new functionality                     | performance overhead because of kernel-user space communication |
| easier to port to new architectures                         |                                                                 |
| less code runs in kernel mode thus more secure and reliable |                                                                 |

#### hybrid system

One that uses approaches from different system structures to address the specific problems it is trying to solve.

For example:

- Linux: has a monolithic kernel but with dynamic loading of functionality
- Mac OS: Mach microkernel, BSD Unix parts, dynamically loadable modules (here called kernel extensions)

### kernel modules

Each core component is separate and loadable.

## operation

- IO devices and the CPU can execute concurrently
- each device controller is in charge of a particular device type
- each device controller has a local buffer
- CPU moves data from/to main memory to/from local buffers
- IO is from the device to local buffer of controller
- device controller informs CPU that it has finished its operation by causing an _interrupt_

### interrupts

Interrupts inform the OS that attention is needed and something has to be immediately executed. Interrupts can be cause by hardware (IO devices), software, or CPU traps (like error).

Interrupts are disabled when a different interrupt is being processed to prevent lost interrupts.

Operating systems are **interrupt driven**

#### handling

- preserve the state of the CPU (store registers)
- which type of interrupt has occurred
  - polling
  - vectored interrupt system

### IO

- synchronous: CPU idles until the next interrupt, only one IO at a time (though can be completed in a non-blocking manner: if can't be performed immediately it will return with an error code)
- asynchronous: non-blocking but status has to be polled. IO states are stored in a device-status table

### direct memory access (DMA)

Device transfers its buffer straight to memory without CPU intervention.

- high speed IO information transfer (close to memory speed)
- CPU and DMA might fight for memory resulting in inconsistent speed ups

### storage

disk storage (ROM) $\implies$ main memory (RAM) $\implies$ cache $\implies$ registers

|                  | registers      | cache        | RAM         | ROM       |
| ---------------- | -------------- | ------------ | ----------- | --------- |
| size             | < 1 KB         | > 16 MB      | > 16 GB     | > 100 GB  |
| access time [ns] | 0.25-0.5       | 0.5-25       | 80-250      | 5,000,000 |
| bandwidth [MB/s] | 20,000-100,000 | 5,000-10,000 | 1,000-5,000 | 20-150    |

### modes

- Current mode is stored in a _mode bit_
- Some operations can be only done in kernel mode (called privileged instructions)
- A syscall switches to kernel mode and after returning from call changes back to user mode
