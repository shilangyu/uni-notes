# topological space

A topological space is a pair $(X, U)$ where $X$ is a set and $U$ is a family of subsets (called the open sets) satisfying the following properties:

1. $\emptyset \in U$ and $X \in U$
2. The union of an arbitrary collection of open sets is open
3. The intersection of a finite collection of open sets is open

The family $U$ of open sets is called a topology on $X$. A subset $C$ in $X$ is closed if $X \setminus C$ is open.

## product of spaces

$X \times Y = \{(x, y) : x \in X, y \in Y\}$ for which the open sets are arbitrary unions of sets of the form $U \times V$, where $U$ is an open set in $X$ and $V$ is an open set in $Y$.

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

Let $\sim$ be an equivalence relation on $X$. We define the quotient topology $X / \sim$ to consist of all sets $U$ in $X / \sim$ for which $\pi^{-1}(U)$ is open in $X$ where $\pi : X \to X/\sim$ is the quotient map given by $x \mapsto [x]_\sim$.

## simplicial complexes

### general position

Let $V = \{v_0, \cdots, v_n\}$ be a set of points in $\mathbb R^m$. We say $V$ is in general position if it is not contained in an affine subspace of dimension $n-1$ in $\mathbb R^n$.

### simplex

When $V$ is in general position, we define the simplex spanned by $V$ as the convex hull of V:

$$
r_0v_0 + r_1v_1 + \cdots + r_nv_n
$$

where $\sum_{i=0}^n r_i = 1$ and $r_i \ge 0$ for all $i$.

The points of $V$ are called vertices and the dimension of the simplex is $n$.

If $W$ is a subset of $V$ then a simplex spanned by $W$ is a face of the simplex spanned by $V$.

### simplicial complex cont.

A simplicial complex is a space $X$ which is a union of a list $L$ of simplices with the following two properties:

1. If a simplex belongs to $L$, then so does any face of it
2. For any two simplices $\sigma$ and $\tau$ the intersection $\sigma \cap \tau$ is a face of both $\sigma$ and $\tau$.

### subcomplex

A subcomplex of a simplicial complex $X$ is a collection of simplices belonging to $X$ that is a simplicial complex in its own right.

### abstract simplicial complex

A pair $(V, \Sigma)$ where $V$ is a finite set called the vertex set and where $\Sigma$ is a family of nonempty subsets of $V$ such that

$$
\sigma \in \Sigma \land \emptyset \ne \tau \subseteq \sigma \implies \tau \in \Sigma
$$

The elements of $\Sigma$ are called simplices.

For a simplicial complex $X$, the associated abstract simplicial complex has the same vertex set $V$, and a set of vertices is in $\Sigma$ iff it spans a simplex in $X$.
