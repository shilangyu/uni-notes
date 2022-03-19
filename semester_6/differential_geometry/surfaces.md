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

### rotation

On a 2-surface orientation can be used to determine the direction of rotation at each point, $R_\theta: S_p \to S_p$

$$
R_\theta(v) = (\cos \theta)v + (\sin \theta)N(p) \times v
$$

## connectivity

A subset $S$ of $\mathbb R^{n+1}$ is called path-connected if for each pair of points $p, q \in S$ there exists a continuous map $\alpha: [a; b] \to S$ such that $\alpha(a) = p$ and $\alpha(b) = q$.

Let $S \subset \mathbb R^{n+1}$ be a connected n-surface, on $S$ there exists exactly two unit normal vector fields $\vec N_1(p) = -\vec N_2(p)$ for all $p \in S$.
