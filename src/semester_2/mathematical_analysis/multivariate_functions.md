# multivariate functions

Functions that take multiple arguments: $f(x_1, x_2, \cdots, x_n) = y$

## level curve

let $f(x, y) = z$ then for some constant $c$, $f(x, y) = c$ is called a level curve

## limit

Finding a limit of a multivariate functions is much more difficult (even when there are only 2 arguments) because instead of approaching a point from left or right we have infinite ways of approaching it.

$$
	\lim_{(x, y) \to (x_0, y_0)} f(x, y) = L
$$

### two-path test

If the limit is different when approaching the point from 2 different paths then we can say the limit does not exist.

**Example**: let $f(x, y) = \frac{xy}{x^2 + y^2}$ when $(x, y) \to (0, 0)$

- if $y = 0$ then $f(x, 0) \to 0$
- if $y = x$ then $f(x, x) \to \frac{1}{2}$

### properties

Let $\lim_{(x, y) \to (x_0, y_0)} f(x, y) = L$ and $\lim_{(x, y) \to (x_0, y_0)} g(x, y) = M$

- $\lim_{(x, y) \to (x_0, y_0)} f(x, y) \pm g(x, y) = L + M$
- $\lim_{(x, y) \to (x_0, y_0)} f(x, y) \cdot g(x, y) = L \cdot M$
- $\lim_{(x, y) \to (x_0, y_0)} \frac{f(x, y)}{g(x, y)} = \frac{L}{M}$, $M \ne 0$
- $\lim_{(x, y) \to (x_0, y_0)} k \cdot f(x, y) = k \cdot L$

Sandwich theorem still applies.

## continuity

A function is considered continuos if $\lim_{(x, y) \to (x_0, y_0)} f(x, y) = f(x_0, y_0)$

## partial derivatives

Derivatives of a function with respect to a given argument.

$$
	\frac{\partial f}{\partial x} (x_0, y_0) \equiv \frac{d}{dx} f(x, y_0)|_{x=x_0} \equiv f_x(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}
$$

### higher order

#### pure

We call a partial derivative _pure_ when all partial derivatives were taken with respect to the same variable. **Example**: $f_{xx}$ or $f_{yy}$

#### mixed

We call a partial derivative _mixed_ when partial derivatives were taken with respect to different variables. **Example**: $f_{xy}$ or $f_{yx}$

### mixed derivatives theorem

If a function and its derivatives ($f_x$, $f_y$, $f_{yx}$, $f_{xy}$) are defined and continuous on an open region containing a point $(x_0 ,y_0)$ then $f_{xy}(x_0, y_0) = f_{yx}(x_0, y_0)$

### chain rule

Let $w = f(x, y)$, $x = g(r, s)$, $y = h(r, s)$ then:

$$
\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x} \frac{\partial x}{\partial r} + \frac{\partial w}{\partial y} \frac{\partial y}{\partial r}
$$

### implicit function

Suppose that $F(x, y)$ is differentiable and that the equation $F(x, y) = 0$ defines $y$ implicitly as a differentiable function of $z$, Then at any point where $F_y \ne 0$:

$$
	\frac{dy}{dx} = - \frac{F_x}{F_y}
$$

### gradient

Direction of the steepest ascent

$\nabla f(x, y) = grad f(x, y) = [f_x(x, y), f_y(x, y)] = f_x(x, y)\mathbf{i} + f_y(x, y)\mathbf{j}$

### directional derivative

Rate of change along a unit vector: $\nabla_{\vec u} f(x_0, y_0) = \nabla f(x_0, y_0) \cdot \vec u = |\nabla f(x_0, y_0)| \cos \theta = \lim_{s \to 0^+} \frac{f(P_0 + s \vec u) - f(P_0)}{s}$

### tangent plane

Like a tangent line, but it's a plane because of the higher dimension of the graph. The tangent plane at $P_0 = (x_0, y_0, f(x_0, y_0)) = (x_0, y_0, z_0)$ is defined as:

$$
	f_x(P_0)(x - x_0) + f_y(P_0)(y - y_0) - (z - z_0) = 0
$$

## extrema

Peaks and valleys

### local

minimum/maximum in a given radius

### global/absolute

minimum/maximum across the whole domain

### First Derivative Test

If $f(a, b)$ is a local extremum then $f_x(a, b) = f_y(a, b) = 0$

## critical points

Points where $f_x$ and $f_y$ are 0 or do not exist are called critical points of $f$. Extrema of $f$ can only exist on such points or on boundaries. However not every critical point means that theres an extremum there.

## saddle point

When there is a local maximum and minimum at the same time at a critical point.

## discriminant

$$
	Df(x, y) = \begin{vmatrix}
		f_{xx} & f_{xy} \\
		f_{yx} & f_{yy} \\
	\end{vmatrix} = f_{xx}f_{yy} - f^2_{xy}
$$

## second derivative test

Let $f(a, b)$ be a critical point, then:

- $f$ has a local maximum at $(a, b)$ if $Df(a, b) > 0$ and $f_{xx}(a, b) < 0$
- $f$ has a local minimum at $(a, b)$ if $Df(a, b) > 0$ and $f_{xx}(a, b) > 0$
- $f$ has a saddle point at $(a, b)$ if $Df(a, b) < 0$
- The test is inconclusive at $(a, b)$ if $Df(a, b) = 0$
