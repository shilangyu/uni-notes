# surfaces

Let $U$ be an open set in $\mathbb R^{n+1}$ and $f: U \to \mathbb R$ be a smooth function

Surface $S = f^{-1}(c)$ where $\forall_{p \in S} \nabla f(p) \ne 0$, that is, level sets where all points are regular.

Let $S_p = [\nabla f(p)]^\perp$ denote the tangent space to a surface $S$ at $p$.

## lagrange multipliers

Let $S = f^{-1}(c)$ be an n-surface where $f: U \to \mathbb R$. Suppose $g: U \to \mathbb R$ is a smooth function and $p \in S$ is an extreme point of $g$ on $S$. Then there exists a real number $\lambda$ (Lagrange multiplier) such that $\nabla g(p) = \lambda \nabla f(p)$.

## vector fields on surfaces

### tangent vector field

At each point $p \in S$ vector is tangent to the surface. Denoted by $T(p)$

### normal vector field

At each point $p \in S$ vector is normal to the surface. Denoted by $N(p)$

#### orientation

An orientation is a smooth choice of a normal vector direction at every point $p \in S$.

### positive tangent direction

A unit vector in $\mathbb R^{n+1}_p$ is called the direction at $p$. Thus an orientation is a smooth choice of normal direction at each point of $S$.

By rotating the orientation normal direction at $p$ through an angle of $-{\pi \over 2}$ we get the positive tangent direction.

### rotation

On a 2-surface orientation can be used to determine the direction of rotation at each point, $R_\theta: S_p \to S_p$

$$
R_\theta(v) = (\cos \theta)v + (\sin \theta)N(p) \times v
$$

## connectivity

A subset $S$ of $\mathbb R^{n+1}$ is called path-connected if for each pair of points $p, q \in S$ there exists a continuous map $\alpha: [a; b] \to S$ such that $\alpha(a) = p$ and $\alpha(b) = q$.

Let $S \subset \mathbb R^{n+1}$ be a connected n-surface, on $S$ there exists exactly two unit normal vector fields $\vec N_1(p) = -\vec N_2(p)$ for all $p \in S$.

## Gauss map

Gauss map is the vectors translated to the origin of the smooth unit normal vector field $N$ of an oriented n-surface.

$$
N: S \to \mathbf S^n \subset \mathbb R^{n+1}
$$

Note: $\mathbf S^n$ is a unit sphere in $n$ dimensions.

### closeness

A subset $K \subset \mathbb R^{n+1}$ is closed if for every convergent sequence of points $\{a_n\}^\infty_{n=1}$ which is contained in $K$, the limit $\lim_{n\to\infty}a_n$ belongs to $K$.

### compactness

A subset $K$ of a metric space is compact if every infinite sequence of points in $K$ has a convergent subsequence whose limit belongs to $K$.

### Heine-Borel theorem

A subset of $\mathbb R^{n+1}$ is compact iff it is closed and bounded.

A continuous function $f$ defined on a compact set $K$ achieves a minimum value $m$ at $x_m$ and a maximal value $M$ at $x_M$.

### theorem

Let $S$ be a compact, connected, oriented $n$-surface in $\mathbb R^{n+1}$ exhibited as a level set of some smooth function, then the Gauss map maps $S$ onto the unit sphere $\mathbf S^n$ in $\mathbb R^{n+1}$
