# simplicial complexes

## general position

Let $V = \{v_0, \cdots, v_n\}$ be a set of points in $\mathbb R^m$. We say $V$ is in general position if it is not contained in an affine subspace of dimension $n-1$ in $\mathbb R^n$.

## simplex

When $V$ is in general position, we define the simplex spanned by $V$ as the convex hull of V:

$$
r_0v_0 + r_1v_1 + \cdots + r_nv_n
$$

where $\sum_{i=0}^n r_i = 1$ and $r_i \ge 0$ for all $i$.

The points of $V$ are called vertices and the dimension of the simplex is $n$.

If $W$ is a subset of $V$ then a simplex spanned by $W$ is a face of the simplex spanned by $V$.

## simplicial complex cont.

A simplicial complex is a space $X$ which is a union of a list $L$ of simplices with the following two properties:

1. If a simplex belongs to $L$, then so does any face of it
2. For any two simplices $\sigma$ and $\tau$ the intersection $\sigma \cap \tau$ is a face of both $\sigma$ and $\tau$.

## subcomplex

A subcomplex of a simplicial complex $X$ is a collection of simplices belonging to $X$ that is a simplicial complex in its own right.

## abstract simplicial complex

A pair $(V, \Sigma)$ where $V$ is a finite set called the vertex set and where $\Sigma$ is a family of nonempty subsets of $V$ such that

$$
\sigma \in \Sigma \land \emptyset \ne \tau \subseteq \sigma \implies \tau \in \Sigma
$$

The elements of $\Sigma$ are called simplices.

For a simplicial complex $X$, the associated abstract simplicial complex has the same vertex set $V$, and a set of vertices is in $\Sigma$ iff it spans a simplex in $X$.

## chain complex

A chain complex $V_* = (V_*, \partial_*)$ is a sequence $\cdots, V_i, \cdots, V_0$ of vector spaces together with a sequence of linear transformations $\partial_i:V_i \to V_{i-1}$ such that $\partial_i \circ \partial_{i+1} = 0$. The elements of a given $V_i$ are called $i$-chains, and the maps $\partial_i$ are called boundary maps or differentials.

Let $\mathbb k$ be a field and let $X$ be a set. Let $F(X)$ be a vector space on the set $X$, i.e. a vector space over $\mathbb k$ whose basis is in bijective correspondence with $X$.

## simplicial chain complex

Given an abstract simplicial complex $\Sigma$ and a field $\mathbb k$ we define a simplicial chain complex $C_*(\Sigma)$ by letting $C_n(\Sigma)$ be the vector space on the set of $n$-dimensional faces of $\Sigma$. The boundary maps are:

$$
\partial_n((v_0, \cdots, v_n)) = \sum_{i=0}^n (-1)^i (v_0, \cdots, \hat v_i, \cdots, v_n)
$$

where $\hat v_i$ denotes omitting that term (for example $(v_0, v_1, \hat v_2, v_3) = (v_0, v_1, v_3)$).

## Vietoris-Rips complex

Let $Z$ be a finite subset of $\mathbb R^n$ (point cloud). The Vietoris-Rips complex at scale $\varepsilon > 0$ is a simplicial complex with vertex set $Z$ for which a family $\{z_0, \cdots, z_k\}$ spans a simplex if $d(z_i, z_j) \le \varepsilon$ for $0 \le i < j \le k$. Denoted by $\text{VR}(Z, \varepsilon)$.
