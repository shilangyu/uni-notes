# introduction

- **atomic commit** - ensure that all processes agree that a transaction should be committed or aborted
- **process** - separate computers, communicate through links. Two failures are distinguished
  - **omission** - the process omits to send a message
  - **arbitrary** - the process sends something it was not supposed to
  - **crash-stop**
  - **correct** - a process is correct when it never fails
- **safety** - property that nothing bad will happen
- **liveness** - property that something good will happen

## channels

Communication network. Messages are uniquely identified.

### fair-loss links

Similar to UDP

1. **Fair-loss**: if a message is sent infinitely often by pi to pj, and neither pi or pj crashes, then m is delivered infinitely often by pj
2. **Finite duplication**: if a message m is sent a finite number of times by pi to pj then m is delivered a finite number of times by pj
3. **No creation**: no message is delivered unless it was sent

### stubborn links

1. **Stubborn delivery**: if a process pi sends a message m to a correct process pj, and pi does not crash, then pj delivers m an infinite number of times
2. **No creation**: no message is delivered unless it was sent

### reliable (perfect) links

1. **Validity**: if pi and pj are correct, then every message sent by pi to pj is eventually delivered by pj
2. **No duplication**: no message is delivered more than once
3. **No creation**: no message is delivered unless it was sent

## failure detectors

Detection of failing processes (for example by timing assumptions). Defined by completeness and accuracy.

### perfect

- **Strong completeness**: eventually, every process that crashes is permanently suspected by every correct process
- **Strong accuracy**: no process is suspected before it crashes

### eventually perfect

- **Strong completeness**: eventually, every process that crashes is permanently suspected by every correct process
- **Eventual strong accuracy**: eventually, no correct process is ever suspected
