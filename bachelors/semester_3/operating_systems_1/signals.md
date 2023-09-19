# signals

Signal is notification to a process/thread from the system. During generation of a signal it is determined whether it is addressed to a process or a thread.

- hardware exceptions
- actions by processes: `kill()`, `alarm()`, etc

Some popular signals:

| Nr  | Name    | Meaning                           | Action           |
| --- | ------- | --------------------------------- | ---------------- |
| 1   | SIGHUP  | Hangup                            | Exit             |
| 2   | SIGINT  | tty interrupt (typically: ^C)     | Exit             |
| 9   | SIGKILL | Unconditional process termination | Exit             |
| 11  | SIGSEGV | Segmentation Fault                | Core dump + exit |

## signals in C

`int kill(pid_t pid, int sig)`

Where `pid` is the process ID, and `sig` is the signal number.

The signal is sent to:

- `pid > 0`: a process with given PID
- `pid == 0`: all processes that belong to the process group of the sender
- `pid == -1`: all processes in the system except init
- `pid < -1`: to all processes that belong to the process group where the process group id is `-pid`

## handling signals

Each process has a defined set of actions to take when a signal is received. In C, these actions can be overwritten with custom behavior. When handling a signal there is no information where did the signal come from, just the number.

The main program is stopped when handling a signal, therefore it is not advised to handle signals for too long (ex. don't do IO).
