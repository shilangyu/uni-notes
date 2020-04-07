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
- $\cos x = \frac{1 - t}{1 + t^2}$
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

$\frac{d}{dx} \int_a^x f(t)dt = f(x)$

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
