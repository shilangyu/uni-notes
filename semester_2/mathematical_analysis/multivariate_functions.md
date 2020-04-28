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
