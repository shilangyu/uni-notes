# introduction

- **reliable broadcast** - ensure that a message is received by receivers, or that no one has received it
- **atomic commit** - ensure that all proccesses agree that a transaction should be committed or aborted
- **process** - separate computers, communicate through links. Two failures are distinguished
  - **omission** - the process omits to send a message
  - **arbitrary** - the process sends something it was not supposed to
  - **crash-stop**
- **channels** - communication network. Messages are uniquely identified
  - **fair-loss link** - similar to UDP
  - **stubborn link** - a message that was sent is delivered an infinite amount of times
  - **perfect (reliable) link** - similar to TCP
- **failure detectors** - detection of failing processes (for example by timing assumptions). Defined by completeness and accuracy.
  - **perfect** - Strong completeness (eventually every process that crashed is detected to have crashed). Strong accuracy (no process is suspected before it crashes).
  - **evetually perfect** - Strong completeness. Eventual Strong accuracy.
- **safety** - property that nothing bad will happen
- **liveness** - property that something good will happen
