# introduction

## asymptotic notation

- upper bound: $f = O(g)$
- lower bound: $f = \Omega(g)$
- tight bound: $f = \Theta(g)$, $g = \Theta(f)$

## computational complexity

1. $O(1)$: constant time (does not depend on the size of input)
2. $O(\log n)$: logarithmic time
3. $O(n)$: linear time
4. $O(n \log n)$: quasilinear/loglinear time
5. $O(n^2)$: quadratic time
6. $O(n^c)$: polynomial time
7. $O(c^n)$: exponential time
8. $O(n!)$: factorial time

## problem types

- decision problem: does the input satisfy some conditions?
- optimization problem: optimal solution for given input

## algorithmic domain

$(A, f_1, \cdots, f_m, r_1, \cdots, r_n)$ where:

- $A$ universum
- $f_1, \cdots, f_m$ function such that $f_i: A^{k_1} \to A$
- $r_1, \cdots, f_n$ relations such that $r_j \subset A^{l_j}$

We say $f$ is a partial function if its value is undefined for some elements of $A$

There are:

- instructions
- predicates
