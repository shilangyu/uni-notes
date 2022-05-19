# curvature

## Weingarten map

The Weingarten map of $S$ at $p$ is the linear map

$$
L_p : S_p \to S_p
$$

where $L_p(v) = - \nabla_vN$. $L_p$ measures the rate of change of $N$ as it passes through $p$ along $\alpha$

### derivative with respect to $v$

Measure the rate of change of the unit normal vector $N$ to the surface

$f: U \to \mathbb R$, $\alpha: I \to U$, and $v \in \mathbb R_p^{n+1}$ then

$$
\nabla_v f = (f \circ \alpha)'(t_0)
$$

where $\alpha(t_0) = p$ and $\dot\alpha(t_0) = v$

When $||v|| = 1$ it is called the directional derivative.

**Properties**:

- $\nabla_{v+w}f = \nabla_v f + \nabla_w f$
- $\nabla_{cv}f = c\nabla_v f$

### derivative of a vector field

Let $X$ be a smooth vector field on an open set $U \subset \mathbb R^{n+1}$ with respect to $v \in \mathbb R_p^{n+1}$, $p \in U$:

$$
\nabla_vX = \dot{(X \circ \alpha)}(t_0)
$$

where $\alpha: I \to U$, $\alpha(t_0) = p$ and $\dot\alpha(t_0) = v$

Let $N$ be an orientation of $S$. Then $\nabla_vN$ is tangent to $S$.

### covariant derivative

When $X$ is a tangent vector field on $S$ then $D_vX$ is the tangential component of $\nabla_vX$:

$$
D_v X = \nabla_v X - (\nabla_vX \cdot N(p))N(p)
$$

### theorems

#### theorem 1

Let $S$ be an $n$-surface in $\mathbb R^{n+ 1}$, oriented by the unit normal vector field $N$. Let $p \in S$ and $v \in S_p$. Then for every parametrized curve $\alpha: I \to S$ with $\dot \alpha(t_0) = v$ for some $t_0 \in I$,

$$
\ddot \alpha(t_0) \cdot N(p) = L_p(v) \cdot v
$$

#### theorem 2

The Weingarten map is self-adjoint, that is

$$
L_p(v) \cdot w = v \cdot L_p(w)
$$

for all $v, w \in S_p$

## plane curves

Let $U$ be an open subset of $\mathbb R^2$ and $f: U \to \mathbb R$ be a smooth function. A plane curve is a $1$-surface $C$ oriented by $\frac{\nabla f}{||\nabla f||}$

The weingarten $l_p: C_p \to C_p$ map is a linear transform on a 1-dimensional space. Let $e_1$ be the basis of $C_p$ and $L_p(e_1) = me_1$. Then $\forall_{v\in C_p} v = a_1 e_1$, for some $a_1 \in \mathbb R$

### curvature of plane curves

$\kappa(p) = \frac{L_p(v) \cdot v}{||v||^2}$, $\kappa(\alpha(t)) = \frac{\ddot \alpha(t)\cdot N(\alpha(t))}{||\dot\alpha(t)||^2}$ is the curvature in $\mathbb R^2$.

Thus $L_p(v) = \kappa(p)v$

If:

- $\kappa(p) > 0$ - the curve at $p$ turns towards $N$
- $\kappa(p) < 0$ - the curve at $p$ turns away $N$

### parametrization

A parametrization of a segment of a plane curve $C$ containing $p \in C$ is a parametrized curve $\alpha: I \to C$ which:

1. is regular ($\forall_{t \in I} \dot \alpha(t) \ne 0$)
2. is oriented consistently with $C$
3. $p \in Im(\alpha)$

If $Im(\alpha) = C$ then it is a global parametrization.

#### theorem

Let $\alpha: I \to \mathbb R^{n+1}$ be a parametrized curve with $\dot \alpha(t) \ne 0$ for all $t \in I$ then there exists a unit speed parametrization $\beta$ of $\alpha$.

### circle of curvature

For a plane curve $C$ with non-zero curvature $\kappa$ there exists a unique oriented circle $O$ at each $p \in C$ which

1. is tangent to $C$ at $p$ ($O_p = C_p$)
2. is oriented consistently with $C$ ($N_O(p) = N_C(p)$)
3. whose normal turns at the same rate at $p$ as does the normal to $C$ ($\nabla_vN_O = \nabla_vN_C$ for all $v \in C_p = O_p$)

- $r(p) = \frac{1}{\kappa(p)}$ is the radius of curvature
- the center of $O$ is the center of curvature
