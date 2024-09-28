# circuits

## boolean circuits

Every $f: \{0, 1\}^n \to \{0, 1\}$ is computed by CNF/DNF of size $\le 2^n$

## general circuits

The graph has to be acyclic, it is a DAG

- input variables $x_1, \cdots, x_n$
- gates $\land, \lor, \neg$
- directed edges (wires)
- one or more output wires

### size

The size of a circuit is the number of wires

### complexity

A language is in $SIZE(t(n))$ if there exists a circuit family $\{C_n\}_{n \in \N}$ such that for all $n$:

- $C_n$ has size $O(t(n))$
- $\forall_{x \in \{0, 1\}^n} C_n(x) = 1 \iff x \in L$

Note: $\forall_{L \subseteq \{0, 1\}^*} L \in SIZE(2^n)$

#### P/poly

P/poly is $\bigcup_{k \in \N} SIZE(n^k)$

$P \subseteq$ P/poly

#### circuit SAT

C-SAT = $\{C_n : \exists_{x \in \{0, 1\}^n} C_n(x) = 1\}$

#### witness existence

WE = $\{(V, x, 1^t) : \exists_y V(x, y) = 1 \text{ in time } t\}$

WE $\in$ NP

WE $\le_P$ C-SAT $\le_P$ SAT
