# algorithm design

## divide and conquer

Dividing a problem into the same kind but with a smaller size of input. Once the size is small enough the solution is trivial.

1. Divide the problem into small chunks
2. Recursively conquer subproblems
3. Combine solutions to subproblems to form the complete general solution

An example of a divide and conquer problem is merge sort, where sorting is done by merging sorted sublists.

## dynamic programming

When subproblems are repeating. Dynamic programming adds a `memo` object where we remember results to subproblems (partial solutions) (think: cache).

Example: computing n-th fibonacci number.
