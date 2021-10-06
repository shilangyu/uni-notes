# Introduction

## mathematical induction

Let $W$ be a condition concerning natural numbers

If:

1. $W(0)$ is satisfied for 0
2. $\forall_{n\in \mathbb{N}} W(n) \implies W(n+1)$

then for each $n \in \mathbb{N}$ $W(n)$

## trees

Connected graph without cycles, or:

1. $T = (\{v\}, \empty)$ is the tree with the root $v$
2. if $T_1 = (V_1, E_1)$, $T_2 = (V_2, E_2)$, $\cdots$, $T_m = (V_m, E_m)$ are trees with roots $v_1, v_2, \cdots, v_m$ then $T=(V_1 \cup \cdots V_m \cup \{v\}, E_1 \cup \cdots E_m \cup \{\{v, v_1\}, \cdots, \{v, v_m\}\})$ is a tree with the root $v$
3. tree is an object obtained by applying previous two steps finite amount of times

### height

1. $h(T) = 0$ for $T = (\{v\}, \empty)$
2. assume the $T_1, \cdots, T_m$ are of height $h_1, \cdots, h_m$, then $h(T) = 1 + \max\{h_1, \cdots, h_m\}$

### k-tree

k-tree is a tree where the maximal number of children of each vertex is $k$, and at least one vertex has $k$ children

#### max leaves

Let $leaves(T)$ be the number of leaves of the tree $T$.

A k-tree with height $h$ has at most $k^h$ leaves

**Proof**:

1. $T = (\{v\}, \empty)$, $h(T) = 0$, $leaves(T) = 1 = k^0$
2. we assume that $leaves(T_1) \le k^{h_1}, \cdots, leaves(T_m) \le k^{h_m}$. Therefore $leaves(T) \le k^{h_1} + k^{h_2} + \cdots + k^{h_m} \le k \cdot k^{\max\{h_1, \cdots, h_m\}} = k^{1+\max\{h_1, \cdots, h_m\}} = k^h$
