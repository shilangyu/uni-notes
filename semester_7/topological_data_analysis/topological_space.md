# topological space

A topological space is a pair $(X, U)$ where $X$ is a set and $U$ is a family of subsets (called the open sets) satisfying the following properties:

1. $\emptyset \in U$ and $X \in U$
2. The union of an arbitrary collection of open sets is open
3. The intersection of a finite collection of open sets is open

The family $U$ of open sets is called a topology on $X$. A subset $C$ in $X$ is closed in $X \setminus C$ is open.

## discrete topology

Let $X$ be any set. Let $U = 2^X$. This is a topology on $X$.

## indiscrete topology

Let $X$ be any set. Let $U = \{\emptyset, X\}$. This is a topology on $X$.

## Hausdorff property

A topological space is Hausdorff if $\forall_{p,q \in X, p \ne q}\exist_{U, V} p \in U \land q \in V \land U \cap V = \emptyset$

## continuity

Let $f: X \to Y$ be a continuous bijection between subsets of Euclidean space. If $X$ then $f$ is a homeomorphism.
