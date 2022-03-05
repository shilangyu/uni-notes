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

## vector fields

- A vector at point $p$ is a pair $\vec v = (p, v)$ where $p, v \in \mathbb R^{n+1}$
- $\vec v + \vec w = (p, v+w)$ for $\vec v = (p, v)$, $\vec w = (p, w)$
- $c \vec v = (p, c \cdot v)$
- If $\{v_1, \cdots, v_{n+1}\}$ is the basis of $\mathbb R^{n+1}$ then $\{(p, v_1), \cdots, (p, v_{n+1})\}$ is the basis of $\mathbb R^{n+1}_p$
- $(p, v) \cdot (p, w) = v \cdot w$
- $(p, v) \times (p, w) = (p, v \times w)$ (Given $\times$ is defined for the size of vectors)
- $||\vec v|| = \sqrt{\vec v \cdot \vec v}$
- $\cos \theta = \frac{\vec v \cdot \vec w}{||\vec v|| \cdot ||\vec w||}$

**Vector field**: $\vec X(p) = (p, X(p))$ for $X: U \to \mathbb R^{n+1}$

### parametrized curve

A smooth function $\alpha: I \to \mathbb R^{n+1}$ where $I$ is an open interval in $\mathbb R$

#### velocity vector

$$
\dot \alpha(t) = (\alpha(t), \frac{d\alpha}{dt}) = (\alpha(t), \frac{dx_1}{dt}, \cdots, \frac{dx_{n+1}}{dt})
$$

#### integral curve

$\alpha$ is an integral curve of the vector field $\vec X$ on an open set $U$ in $\mathbb R^{n+1}$ if $\alpha(t) \in U$ and $X(\alpha(t)) = \dot \alpha(t)$

**Theorem**: There exists a maximal integral curve, defined on $I$, $\alpha: I \to \mathbb R^{n+1}$ of $\vec X$ such that $\alpha(0) = p$

## tangent space

TODO
