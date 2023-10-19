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
