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

## arc length

The length of a parametrized curve $\alpha: I \to \mathbb R^{n+1}$ is

$$
L(\alpha) = \int_a^b ||\dot \alpha(t)|| dt
$$

For $a, b \in I$. Unit speed curves are parametrized by arc length, that is $L(\alpha) = b - a$ (when $||\dot \alpha|| = 1$)

### theorem 1

If $C$ is an oriented plane curve then there exists a global parametrization of $C$ iff $C$ is connected.

### theorem 2

If $C$ is a connected oriented plane curve and $\beta: I \to C$ is a unit speed global parametrization of $C$ then, $\beta$ is either one to one or periodic.

$\beta$ is periodic iff $C$ is compact

## forms

If $V$ is a vector space over the field $K$, then a linear map $T: V \to K$ is called a form

### dual vector space

Let $V$ be a vector space over a field $F$. Then the dual of $V$ is the space $V^*$ of linear maps $T: V \to F$, $T_1, T_2 \in V^*$.

- $(T_1 + T_2)v = T_1v + T_2v$
- $(\lambda T)v = \lambda T v$

### differential 1-form

A differential 1-form on an open set $U \subset \mathbb R^{n+1}$ is a function $\omega: U \times \mathbb R^{n+1} \to \mathbb R$ such that for all $p \in U$ the restriction $\omega | p: \{p\} \times \mathbb R^{n+1}_p \to \mathbb R$ is a linear map.

#### differential of $f$

Let $f: U \to \mathbb R$ be a smooth function. Then the differential of $f$ is the 1-form:

$$
df(v) = \nabla_vf
$$

Let $x_i: U \to \mathbb R$ where $x_i(a_1, a_2, \cdots, a_{n+1}) = a_i$. Then its differential is $dx_i = v_i$.

Given a vector field $X$ and a 1-form $\omega$ we define a function $\omega(X): U \to \mathbb R$

$$
\omega(X)(p) = \omega(X(p))
$$

### theorem

For every 1-form $\omega$ on $U \subset \mathbb R^{n+1}$ there exist unique functions $f_i: U \to \mathbb R$ such that

$$
\omega = \sum_{i=1}^{n+1} f_i dx_i
$$

Let $U \subset \mathbb R^{n+1}$ and $f: U \to \mathbb R$ be smooth them,

$$
df = \sum_{i=1}^{n+1} \frac{\partial f}{\partial x_i} dx_i
$$

### exact and closed

- A 1-form which is a differential of a smooth function is called exact.
- A curve $\alpha: [a, b] \to \mathbb R^{n+1}$ with $\alpha(a) = \alpha(b)$is called closed

The integral of an exact 1-form over a closed connected oriented curve is always equal to zero.

## line integral

Let $\alpha: [a,b] \to U$ be a parametrized curve. We define the integral of a 1-form $\omega$ over $\alpha$ as

$$
\int_\alpha \omega = \int_a^b \omega(\dot\alpha(t))dt
$$

## winding number

Let $\eta$ be the 1-form on $\mathbb R^2 \setminus \{0\}$ defined by

$$
\eta = -\frac{x_2}{x_1^2 + x_2^2}dx_1 + \frac{x_1}{x_1^2 + x_2^2}dx_2
$$

Then for a closed, piecewise smooth, parametrized curve $\alpha: [a, b] \to \mathbb R^2 \setminus \{0\}$ we have

$$
\int_\alpha \eta = 2\pi k
$$

For some integer $k$. This number is called the winding number of $alpha$ about the origin.

