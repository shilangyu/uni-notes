# curves in space

$P = (f(t), g(t), h(t))$

$\vec\sigma(t) = f(t)\hat\imath + g(t)\hat\jmath + h(t)\hat k$

When $||\vec\sigma(t)|| = \text{const}$ then $\vec\sigma'(t)$ is perpendicular to $\vec\sigma(t)$ for all $t$

## tangent line

$r = \vec\sigma(t_0) + t\vec\sigma'(t_0)$

## length

$L = \int_a^b \sqrt{f'(t)^2 + g'(t)^2 + h'(t)^2}dt$

## regular

A curve is called regular if $\vec\sigma'(t) \ne \mathbf 0$ for all $t$

### unit tangent vector to the curve

When a curve is regular then $T = \frac{\vec\sigma'(t)}{||\vec\sigma'(t)||}$ is called the unit tangent vector to the curve

### unit speed curve

If the length of $\vec\sigma'(t)$ is constant and equal to 1, the curve is said to be parametrized by arc length (or unit speed curve)

## curvature

$s = \int_a^t ||\vec\sigma'(u)||du$

Let $k$ be a scalar: $k = ||\frac{dT}{ds}||$. Then $k$ is called the
curvature of a curve.

### principle normal vector

When $k \ne 0$:

$N = \frac{\frac{dT}{ds}}{||\frac{dT}{ds}||}$

Then $N$ is called the principle normal vector

Alternative formulae:

$k = \frac{||v \times v'||}{||v||^3}$

$N(t) = \frac{(v \cdot v)v' - (v' \cdot v)v}{||(v \cdot v)v' - (v' \cdot v)v||}$
