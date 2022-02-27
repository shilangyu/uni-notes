# geometry

Study of equivalence classes of certain transformation groups

## Euclidean geometry

Studies equivalence classes of rigid motions of the plane or three dimensional space

### affine geometry

Euclidean geometry where we allow for dilations

$$
d(f(x), f(y)) = rd(x, y)
$$

## topology

Two spaces are equivalent if there are continuous maps $f: X \to Y$ and $g: Y \to X$ such that $gf = id_X$ and $fg = id_Y$

### manifolds

Objects are locally Euclidean: in the vicinity of any point it looks like a piece of $\mathbb R^n$. We say it is a $n$-manifold.

## level sets

$$
f^{-1}(c) = \{(x_1, \cdots, x_{n+1}) \in U : f(x_1, \cdots, x_{n+1}) = c\}
$$

### metric space

A metric space $X$ is a set equipped with a distance function $d: X \times X \to R$ such that

$$
	(\forall x,y \in X) d(x, y) \ge 0 \land d(x, y) \iff x = y \\
	(\forall x,y \in X) d(x, y) = d(y, x) \\
	(\forall x,y,z \in X) d(x, z) \le d(x, y) + d(y, z) \\
$$

### open ball

$$
B(x_0, r) = \{x \in X : d(x, x_0) < r\}
$$

We say $U \subset \mathbb R^{n+1}$ is open if

$$
\forall_{x_0 \in U} \exists_{r < 0} B(x_0, r) \subseteq U
$$
