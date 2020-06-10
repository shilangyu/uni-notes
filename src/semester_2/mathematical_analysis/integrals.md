# integrals

A function $F(x)$ is called an antiderivative of $f(x)$ when:

$$
	F'(x) = f(x) \implies \frac{d F(x)}{dx} = f(x) \implies F(x) = \int f(x) dx
$$

## common antiderivatives

| $f(x)$                       | $\int f(x) dx$                                                               |
| ---------------------------- | ---------------------------------------------------------------------------- |
| $a$                          | $ax + C$                                                                     |
| $x^n$                        | $\frac{x^{n+1}}{n+1} + C$, $a \ne -1$                                        |
| $\frac{1}{x}$                | $\ln\vert x \vert + C$                                                       |
| $e^x$                        | $e^x + C$                                                                    |
| $a^x$                        | $\frac{a^x}{\ln(a)} + C$                                                     |
| $\vert x \vert$              | $\frac{x\vert x \vert}{2} + C$                                               |
| $\ln(x)$                     | $x\ln(x) - x + C$                                                            |
| $\sin(x)$                    | $-\cos(x) + C$                                                               |
| $\cos(x)$                    | $\sin(x) + C$                                                                |
| $\frac{1}{a^2 + x^2}$        | $\frac{1}{a}\arctan(\frac{x}{a}) + C$                                        |
| $\frac{1}{\sqrt{a^2 - x^2}}$ | $\arcsin\frac{x}{a} + C$                                                     |
| $\sqrt{a^2 - x^2}$           | $\frac{x}{2} \sqrt{a^2 - x^2} + \frac{a^2}{2} \arcsin\frac{x}{a} + C$        |
| $\frac{1}{\sqrt{a^2 + x^2}}$ | $\ln(x + \sqrt{a^2 + x^2}) + C$                                              |
| $\sqrt{a^2 + x^2}$           | $\frac{x}{2} \sqrt{a^2 + x^2} + \frac{a^2}{2} \ln(x + \sqrt{a^2 + x^2}) + C$ |

## rules

### constant multiple

$$
	\int af(x) dx = a \int f(x) dx
$$

### sum and difference

$$
	\int (f(x) \pm g(x)) dx = \int f(x) dx \pm \int g(x) dx
$$

### by substitution

Let $y = g(x)$

$$
	\int f(g(x))g'(x) dx = \int f(y)dy
$$

### by parts

$$
	\int f(x)g'(x)dx = f(x)g(x) - \int f'(x)g(x)dx
$$

In other words:

$$
	\int fdg = fg - \int gdf
$$

## $+\ C$

We need to always add a constant after integration because it is lost during derivation:

Let $f(x) = x + 1$ then $f'(x) = 1$, then we integrate $\int f'(x) dx = x$. As we can see, the $+\ 1$ was lost.

Functions differing by a constant are called a family of primitive functions.

## method of partial fractions

To find $\int \frac{f(x)}{g(x)} dx$ two things have to be satisfied:

- the degree of $f(x)$ must be smaller than the degree of $g(x)$
- we must know the factors of $g(x)$

Then the following steps can be taken:

1. factorize $g(x)$
2. take factors of degree one from $g(x)$ (form of $(x - a)^m$) assign to them the sum of $m$ partial fractions:
   $$\sum_{i=1}^{m} \frac{A_i}{(x - a)^i}$$
3. take factors of degree two from $g(x)$ (form of $(x^2 + px + q)^n$) assign to them the sum of $n$ partial fractions:
   $$\sum_{i=1}^{n} \frac{B_ix + C_i}{(x^2 + px + q)^i}$$
4. set $\frac{f(x)}{g(x)}$ to be the sum of the partial sums from step 2 and 3
5. find the $A, B, C$ coefficients

Taking an integral of the partial fractions is much simpler.

## universal trigonometric substitution

Let $t = \tan\frac{x}{2}$ then trigonometrical functions can be reduced to a rational function:

- $\sin x = \frac{2t}{1 + t^2}$
- $\cos x = \frac{1 - t^2}{1 + t^2}$
- $\tan x = \frac{2t}{1 - t^2}$

$dx$ is then replaced with $\frac{2}{1 + t^2}dt$

## definite integrals

Powerful tool for finding areas under graphs

### Riemann sums

Let $f$ be continuous on some closed interval $[a,b]$. Now we evenly divide it into $n$ subintervals. If $P$ is the partition of all edges of intervals then $P = \{ x_0 = a, x_1, \cdots, x_{n-1}, x_n = b\}$. To find the area of some subinterval of $f$ at some point $c_k$: $f(c_k) \cdot (x_k - x_{k-1}) = f(c_k) \cdot \Delta_{x_k}$. Therefore to find the area of the whole interval:

$$
	\sum_{k=1}^n f(c_k) \cdot \Delta_{x_k}
$$

To find the area ($I$) of some $f$ on a closed interval $[a,b]$ $n$ has to approach infinity

$$
	\lim_{n \to \infty} \sum_{k=1}^n f(c_k) \cdot \Delta_{x_k} = I
$$

$I$ is called the definite integral of $f$ over $[a,b]$

$$
I = \int_a^bf(x)dx = F(b) - F(a)
$$

where $F' = f$

### differentiation

$\frac{d}{dx} \int_a^{g(x)} f(t)dt = f(g(x))g'(x)$

$\frac{d}{dx} \int_a^b f(x)dx = 0$

### properties

Same as with indefinite integrals plus:

- $\int_a^b f(x)dx = -\int_b^a f(x)dx$
- $\int_a^a f(x)dx = 0$
- $\int_a^b f(x)dx = \int_a^c f(x)dx +  \int_c^b g(x)dx$

### substitution

$$
	\int_a^b f(g(x)) \cdot g'(x) dx = \int_{g(a)}^{g(b)} f(u) du
$$

### mean value theorem

While this is true, finding $c$ is incredibly hard:

$$
	\int_a^b f(x) dx = (b-a)f(c)
$$

### smooth function

A function with a continuous first derivative is called smooth and its graph is a smooth curve.

### area between curves

If in a range $[a,b]$ $f(x) \le g(x)$ then the area between the curves is

$$
\int_a^b |g(x) - f(x)| dx
$$

### length of the curve

Let $f$ be a smooth function. The length of the curve from $a$ to $b$ is then:

$$
	\int_a^b \sqrt{1 + (f'(x))^2}dx
$$

### volume of solids of revolution

If we rotate some region $P$ (marked by the area under the graph of some function $f$ from $a$ to $b$) about the $x$ axis the formula for its volume is:

$$
\pi \int_a^b (f(x))^2dx
$$

## improper integrals

Integrals with infinite limits are called _improper integrals_.

$$
\int_a^\infty f(x)dx = \lim_{b\to\infty} \int_a^b f(x)dx
$$

If the limit is finite we say the improper integral converges and the limit is the resulting value. Otherwise it diverges.

### harmonic series

Just like with series, $\int_1^\infty \frac{1}{x^p}dx$ converges only if $p > 1$, converges to $\frac{1}{p-1}$

### convergence

$$
\int_{-\infty}^\infty f(x)dx = \int_{-\infty}^c f(x)dx + \int_c^\infty f(x)dx
$$

The left side converges only if the right one does as well.

### unbounded limits

If one (or both) of the limits of an integral are unbounded, we can define an improper integral with a limit directed towards the interval:

let $a$ be unbounded:

$$
\int_a^b f(x)dx = \lim_{c \to a^+} \int_c^b f(x)dx
$$

let $b$ be unbounded:

$$
\int_a^b f(x)dx = \lim_{c \to b^-} \int_a^c f(x)dx
$$

### omitting unbounded points

If the function we are integrating over some interval is not continuous, we split the integral into multiple smaller ones to omit the unbounded points and analyze the left and right side separately.

### tests for convergence

It is important to note it only tells us where something diverges/converges, the converging values might still be different

#### DCT

let $0 \le f(x) \le g(x)$ for $x \ge a$

- $\int_a^\infty f(x)dx$ converges if $\int_a^\infty g(x)dx$ converges
- $\int_a^\infty g(x)dx$ diverges if $\int_a^\infty f(x)dx$ diverges

#### LCT

let $f$ and $g$ be positive continuous functions on $[a, \infty)$. If $\lim_{x\to\infty}\frac{f(x)}{g(x)} = L$, $0 \le L$ then $\int_a^\infty f(x)dx$ and $\int_a^\infty g(x)dx$ both converge or both diverge.

### integral test

Let $N \ge 1$, $a_n = f(n)$ then $\sum_{n=1}^\infty a_n$ and $\int_N^\infty f(x)dx$ both diverge or both converge.

## double integrals

The find a volume under some region $R$ of a function $f(x, y)$ we use double integrals (assuming $f(x, y)$ is continuous over $R$):

$$
	\iint\limits_R f(x, y)dxdy
$$

### rectangular region

If $R$ is a rectangular region bounded by $a \le x \le b$ and $c \le y \le d$, then:

$$
	\int_{a}^b \big(\int_{c}^d f(x, y)dy\big)dx = \int_{c}^d \big(\int_{a}^b f(x, y)dx\big)dy
$$

### non-rectangular region

When one component is bounded by a function, it has to be integrated first, example: $0 \le x \le 1$ and $g(x) \le y \le h(x)$

$$
	\int_{0}^1 \big(\int_{g(x)}^{h(x)} f(x, y)dy\big)dx
$$

## Jacobian matrix

Matrix of all partial derivatives of a function

$$
	\mathbf{J} =
	\begin{bmatrix}
		\frac{\partial f_{x_1}}{\partial x_1}	& \cdots & \frac{\partial f_{x_1}}{\partial x_n} \\
		\vdots & \ddots & \vdots \\
		\frac{\partial f_{x_n}}{\partial x_1}	& \cdots & \frac{\partial f_{x_n}}{\partial x_n} \\
	\end{bmatrix}
$$

### switching between coordinate systems during integration

The function has to be multiplied by the determinant of the Jacobian matrix when switching from cartesian to polar parametrization.

$$
\iint \limits_{f(A)} f(x, y)dxdy = \iint \limits_{A} f(r\cos\theta, r\sin\theta) \det\mathbf{J} drd\theta
$$

In the case of 2 dimensions for polar $\det\mathbf{J} = r$, in 3 $\det\mathbf{J}_x = r^2\sin\theta$

## additional usages

Two variable functions:

- area of region $D$: $S = \iint \limits_D \sqrt{1 + f_x^2 + f_y^2}dxdy$
- volume of region $W$: $V = \iiint \limits_W dxdydz$
