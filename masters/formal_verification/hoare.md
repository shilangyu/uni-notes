# Hoare

## strength and weakness

condition $P_1$ is stronger than $P_2$ means that:

- $\forall_{\bar x} P_1 \implies P_2$
- $\{\bar x : P_1\} \subseteq \{\bar x : P_2\}$

A strongest possible condition is the smallest set, $\emptyset$. The weakest possible condition is the biggest set, the set of all tuples.

## Hoare logic

Let $P, Q \subseteq S$ and $r \subseteq S \times S$

$$
\{P\} r \{Q\} \iff \forall_{s, s' \in S} (s \in P \land (s, s') \in r \implies s' \in Q)
$$

Note $\{P\}r\{Q\}$ is syntax, not a relation between two singleton sets.

### strongest post-condition

$$
sp(P, r) = \{s' : \exists_s s \in P \land (s, s') \in r\}
$$

### weakest pre-condition

$$
wp(r, Q) = \{s : \forall_{s'} (s, s') \in r \implies s' \in Q\}
$$

## Hoare triple

The following are equivalent:

1. $\{P\} r \{Q\}$
2. $P \subseteq wp(r, Q)$
3. $sp(P, r) \subseteq Q$

## Presburger logic

The arithmetic has logical operations, quantifiers, < and = for relation, and only addition as arithmetic operation. We can also introduce subtraction (which is addition of a negative number), multiplication by a constant (which is addition n times), and divisibility check (which is $\exists_y x = K \cdot y$)

### one-point rule

If $\bar y$ is a tuple of variables not containing x, then $\exists_x (x = t(\bar y) \land F(x, \bar y)) \iff F(t(\bar y), \bar y)$ or the dual $\forall_x (x = t(\bar y) \implies F(x, \bar y)) \iff F(t(\bar y), \bar y)$

### quantifier elimination (QE)

Given a formula $F$ containing quantifiers find an equivalent quantifier-free formula $G$ such that $FV(G) \subseteq FV(F)$.

We can check satisfiability of $H(\bar y)$ by evaluating $\exists_{\bar y} H(\bar y)$ which has no free variables. We can check validity of $H(\bar y)$ by evaluating $\forall_{\bar y} H(\bar y)$ which has no free variables.

We consider elimination of existential conjunction of literals $\exists_y L_1 \land \cdots \land L_n$.

Elimination of $\exists_x$ from an arbitrary quantifier-free formula $F(x, \bar y)$:

1. transform into DNF $F \iff \bigvee_{i = 1}^m C_i$ ($C_i$ are conjunction of literals)
2. push existential inside $[\exists_x \bigvee_{i = 1}^m C_i] \iff [\bigvee_{i = 1}^m \exists_x C_i]$

Elimination of $\forall_x$ from an arbitrary quantifier-free formula $F(x, \bar y)$:

1. $\forall_x F(x, \bar y) \iff \neg [\exists_x \neg F(x, \bar y)]$
2. apply elimination of $\exists_x \neg F \leadsto F_1$ and keep $\neg F_1$

Note that:

- $\neg(t_1 < t_2) \iff t_2 \le t_1$
- $t_1 \le t_2 \iff t_1 < t_2 + 1$
- $t_1 = t_2 \iff t_1 < t_2 + 1 \land t_2 < t_1 + 1$
- $\neg(K|t) \iff \bigvee_{i=1}^{K-1} K|t+i$
- $t_1 < t_2 \iff 0 < t_2 - t_1$

To apply one-point rule on some variable we first need to make sure the variable is used has the same coefficient in a formula. This can be enforced by computing the lcm and applying it. Then when applying one-point rule we add a conjunct of the substitution being divisible by that lcm: $\exists_y F(M \cdot y) \iff \exists_x F(x) \land M|x$

For each variable we can find its bounds by transforming its literals into the following form:

$$
\bigwedge_{i=1}^L a_i < x \land \bigwedge_{i=1}^U x < b_i \land \bigwedge_{i=1}^D K_i | x + t_i
$$

When $D = 0$ this can be seen as $\bigvee_{i=1}^{L} F_1(a_i + 1)$. When $D > 0$ we have $\bigvee_{i=1}^{L} \bigvee_{d=1}^{lcm(K_1, \cdots, K_D)} F_1(a_i + d)$. When $L = 0$ we let $F_2(x) = \bigwedge_{i=1}^D K_i | x + t_i$ which then can be seen as $\bigvee_{d=1}^{lcm(K_1, \cdots, K_D)} F_2(d)$
