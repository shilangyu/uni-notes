# topological space

A topological space is a pair $(X, U)$ where $X$ is a set and $U$ is a family of subsets (called the open sets) satisfying the following properties:

1. $\emptyset \in U$ and $X \in U$
2. The union of an arbitrary collection of open sets is open
3. The intersection of a finite collection of open sets is open

The family $U$ of open sets is called a topology on $X$. A subset $C$ in $X$ is closed if $X \setminus C$ is open.

## discrete topology

Let $X$ be any set. Let $U = 2^X$. This is a topology on $X$.

## indiscrete topology

Let $X$ be any set. Let $U = \{\emptyset, X\}$. This is a topology on $X$.

## Hausdorff property

A topological space is Hausdorff if $\forall_{p,q \in X, p \ne q}\exist_{U, V} p \in U \land q \in V \land U \cap V = \emptyset$

## continuity

Let $f: X \to Y$ be a continuous bijection between subsets of Euclidean space. If $X$ then $f$ is a homeomorphism.

## homotopy

Let $f,g : X \to Y$ be continuous maps. By a homotopy from $f$ to $g$ we mean a continuous map $H : X \times [0; 1] \to Y$ such that $H(x, 0) = f(x)$ and $H(x, 1) = g(x)$.

If a homotopy exists then $f$ and $g$ are homotopic which is denoted by $f \simeq g$.

### homotopy equivalence

Given two topological spaces $X$ and $Y$, a homotopy equivalence between those spaces are two continuous maps $f: X \to Y$ and $g: Y \to X$ such that $f \circ g \simeq \text{id}_Y$ and $g \circ f \simeq \text{id}_X$. Then the two spaces are called homotopy equivalent.

## fundamental group

Given $(X, x_0)$ the fundamental group is

$$
\pi_1(X, x_0) = [(S^1, 1), (X, x_0)]
$$

Which is a group of the equivalence classes under the homotopy of loops based at $x_0$.

## quotient topology

Let $\sim$ be an equivalence relation on $X$. We define the quotient topology $X / \sim$ to consist of all sets $U$ in $X / \sim$ for which $\pi^{-1}(U)$ is open in $X$ where $\pi : X \to X/\sim$ is the quotient map given by $x \mapsto [x]_\sim$
