# greedy algorithms

## max-weight spanning trees

Given a graph $G = (V, E)$, $w : E \to \R$, find tree $T \subseteq E$ of maximum total weight $w(T) = \sum_{e \in T} w(e)$.

The solution does not have to be unique. Greedy algorithm solution:

1. Sort and label edges such that $w_{e_1} \ge w_{e_2} \ge \cdots \ge w_{e_m}$ where $m = |E|$
2. $S \leftarrow \emptyset$
3. for $i = 1$ to $|E|$
   1. if $S + e_i$ is acyclic then $S \leftarrow S + e_i$
4. return $S$

## matroids

$M = (E, I)$. Finite ground set $E$, family $I$ of subsets of $E$. This is a matroid if:

1. if $X \subseteq Y$ and $Y \in I$, then $X \in I$
2. if $X \in I$ and $Y \in I$ and $|Y| > |X| \implies \exists_{e \in Y\setminus X} X + e \in I$

Elements of $I$ are called independent sets. Every maximal independent set is of the same cardinality, they are called a **base**.

### theorem

For any ground set $E$, a family $I$ of subsets of $E$ greedy finds a max weight base of $M$ for every $w: E \to \R$ iff $M$ is a matroid.

### example matroids

- graphic matroid. $F \in I$ iff $F$ is acyclic
- k-uniform matroid. $I = \{F \subseteq E : |F| \le k\}$
- partition matroid. Partition $E$ into disjoint sets $E_1, E_2, \cdots, E_\ell$, $I = \{X \subseteq E : \forall_{i = 1, \cdots, \ell} |X \cap E_i| \le k_i\}$
- linear matroid. The ground set are the columns of a matrix $A$. $I =\{X \subseteq E : rank(A_X) = |X|\}$
- truncating matroid. Given a matroid $M$, the $k$-truncation of $M$ is $M_k = (E, I_k)$ where $I_k = \{X \subseteq E : X \in I \land |X| \le k\}$

### matroid intersection

Given $G = (V, E)$, find a matching of maximum size. If we let $I = \{M \subseteq E : M \text{ is a matching}\}$, this does not form an independent set for a matroid as it violates axiom 2.

Given two matroids $M_1 = (E, I_1)$ and $M_2 = (E, I_2)$ the intersection of $M_1$ and $M_2$ is $M_1 \cap M_2 = (E, I_1 \cap I_2)$. There exists a polynomial time algorithm for finding the max weight independent set in intersection of any two matroids (not necessarily max cardinality!).

## maximum cardinality bipartite matchings

- **alternating path** - a path that alternates between a matching $M$ and $E \setminus M$
- **augmenting path** - an alternating path that starts and ends with unmatched vertices from a matching $M$

1. $M \leftarrow \emptyset$
2. while there exists an augmenting path $P$
   1. $M \leftarrow M \Delta P$
3. return $M$

For all matchings $M$ and all vertex covers $C$ of a graph $|M| \le |C|$

### Kőnig's theorem

For any bipartite graph, the size of the max matching is equal to the size of min vertex cover.

For a bipartite graph $G = (A \cup B, E)$ and a maximal matching $M$, the minimal vertex cover is $C = (A \setminus L) \cup (B \cap L)$ where $L$ is the set of vertices reachable from unmatched vertices of $A$ by alternating path with respect to $M$.
