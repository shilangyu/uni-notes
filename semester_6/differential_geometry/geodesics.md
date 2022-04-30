# geodesics

A curve on a surface that locally minimizes distance

A geodesic in an $n$-surface $S$ in $\mathbb R^{n+1}$ is a parametrized curve $\alpha: I \to S$ whose acceleration is orthogonal to $S$ at every point, $\forall t \in I$, $\ddot \alpha(t) \in S_{\alpha(t)}^\perp$. Geodesic has constant speed.

**Theorem**:

Let $S$ be an $n$-surface, let $p \in S$ and let $v \in S_p$. Then there exists an open interval $I$ containing $0$ and a geodesic $\alpha: I \to S$ such that:

1. $\alpha(0) = p$ and $\dot \alpha(0) = v$
2. $\alpha$ is maximal

## vector field along a parametrized curve

- A vector field $\vec X$ along a parametrized curve $\alpha: I \to \mathbb R^{n+1}$ is a function which assigns to each $t \in I$ a vector $\vec X(t)$ at $\alpha(t)$. $\vec X(t) = (\alpha(t), X_1(t), \cdots, X_{n+1}(t))$
  - $\frac{d}{dt} (\vec X + \vec Y) = \frac{d\vec X}{dt} + \frac{d\vec Y}{dt}$
  - $\frac{d}{dt} (f\vec X) = \frac{df}{dt}\vec X + f\frac{d\vec X}{dt}$
  - $\frac{d}{dt} (\vec X \cdot \vec Y) = \frac{d \vec X}{dt}\cdot\vec Y + \vec X\cdot\frac{d \vec Y}{dt}$
- A function $f$ along $\alpha$ is simply a function $f: I \to \mathbb R$

## parallel transport

### covariant derivative

A tangent vector field is obtained by projecting $\dot X$ orthogonally to $S_{\alpha(t)}$. The covariant derivative measures the rate of change of $X$ along $\alpha$ as registered on $S$.

$$
X' = \dot X - [\dot X \cdot N(\alpha(t))]N(\alpha(t))
$$

#### properties

- $(X + Y)' = X' + Y'$
- $(fX)' = f'X + fX'$
- $(X \cdot Y)' = X' \cdot Y + X \cdot Y'$
- A parametrized curve $\alpha$ is a geodesics in $S$ iff its covariant acceleration $(\dot \alpha)$' is zero along $\alpha$

### euclidean parallel

Let $\vec v = (p, v) \in \mathbb R_{p}^{n+1}$ and $\vec w = (q, w) \in \mathbb R_{q}^{n+1}$

A vector field $\vec X$ is Euclidean parallel along $\alpha$ if $X(t_1) = X(t_2)$ for all $t_1, t_2 \in I$

### Levi-Civita parallel

A smooth vector field $X$ tangent to $S$ along $\alpha$ is called Levi-Civita parallel if $X'(t) = 0$ for all $t \in I$.

#### properties

- If $X$ is parallel along $\alpha$ then $X$ has constant length
- If $X$ and $Y$ are parallel along $\alpha$ then $X \cdot Y$ is constant along $\alpha$
- If $X$ and $Y$ are parallel along $\alpha$ then the angle between them is constant
- If $X$ and $Y$ are parallel along $\alpha$ then so are $X + Y$ and $cX$ for $c \in \mathbb R$
- The velocity vector field along $\alpha$ in $S$ is parallel iff $\alpha$ is a geodesic

#### theorems

##### 1

There exists a unique vector field $V$ tangent to $S$ along $\alpha$ which is parallel and has $V(t_0 \in I) = v \in S_{\alpha(t_0)}$

##### 2

Each parametrized curve $\alpha: [a; b] \to S$ from $p$ to $q$ determines a map $P_\alpha: S_p \to S_q$ given by $P_\alpha(v) = V(b)$. Where $V$ is the unique parallel vector field along $\alpha$ with $V(a) = v$. The vector $P_\alpha(v)$ is called the parallel transport of $v$ from $p$ to $q$ along $\alpha$.
