# P vs NP

## TIME complexity

$\text{TIME}(t(n))$ = the set of languages that can be decided by a TM in time $O(t(n))$

$$
P = \bigcup_{k = 1}^\infty \text{TIME}(n^k)
$$

## decider

A **decider** for a language $L$ is a TM M such that given $x \in \Sigma^*$

- if $x \in L$ then M accepts $x$
- if $x \notin L$ then M rejects $x$

## verifier

A **verifier** for a language $L$ is a TM M such that given $x \in \Sigma^*$

- if $x \in L$ then there exists C such that M accepts $\langle x, C \rangle$
- if $x \notin L$ then for every C, M rejects $\langle x, C \rangle$

## NP

The class of languages that has verifiers that work in polynomial time. Or equivalently, the class of languages that has nondeterministic deciders that work in polynomial time.

$$
NP = \bigcup_{k = 1}^\infty \text{NTIME}(n^k)
$$

### reductions

Showing that to solve a problem A it is sufficient to solve the problem B.

#### poly-time reducible

$A \le_P B$: language A is poly-time reducible to B

### NP-completeness

A language $L$ is NP-complete when

1. $L$ is in NP
2. $\forall_{L' \in NP} L' \le_P L$
