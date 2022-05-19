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
