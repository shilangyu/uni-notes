# analysis

## metric space

$X$ is a metric space if $d: X \times X \to \mathbb R$ s.t.:

1. $\forall_{x, y \in X} d(x, y) \ge 0, d(x, y) = 0 \iff x = y$
2. $\forall_{x, y \in X} d(x, y) = d(y, x)$
3. $\forall_{x, y, z \in X} d(x, z) \le d(x, y) + d(y, z)$

## dissimilarity matrix

$v, w \in \mathbb R^n$ given $S = \{v_1, \cdots, v_N\} \subset \mathbb R^n$, we can form the matrix

$$
\begin{bmatrix}
	d(v_1, v_1) & \cdots & d(v_1, v_N) \\
	\vdots & \ddots & \vdots \\
	d(v_N, v_1) & \cdots & d(v_N, v_N) \\
\end{bmatrix}
$$

A dissimilarity matrix is a nonnegative symmetric matrix which has zeroes along the diagonal.

### as a function

Let $D: X \times X \to \mathbb [0; \infty)$ for a finite set $X$, it

1. vanishes on the diagonals
2. $D(x, x') = D(x', x)$

### dissimilarity space

Dissimilarity space is a pair $(X, D)$ where $X$ and $D$ are defined above.

### multidimensional scaling (MDS)

Given a $n \times n$ dissimilarity matrix interpreted as a dissimilarity measure on a set of points $S = \{x_1, \cdots, x_n\}$ MDS produces an embedding of $S$ in the Euclidean $\mathbb R^d$ space for some $d$ such that the loss function

$$
\sum_{i<j}(||\tilde x_i - \tilde x_j|| - d(x_i, x_j))^2
$$

is minimized, where $\tilde x_i$ denotes the vector in $\mathbb R^d$ corresponding to $x_i \in S$.

### single-linkage clustering

Two points $x, x'$ are in the same cluster iff there is a sequence $x_0, \cdots, x_n$ of elements of $X$ with the properties

1. $x_0 = x$
2. $x_n = x'$
3. $D(x_i, x_{i+1}) \le r$
