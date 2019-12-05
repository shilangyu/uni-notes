# functions

$X$ is the domain of a function and Y is the range co-domain.

$f : X \to Y$

### injective

A function is injective if for any two arguments $x_1, x_2 \in X$ we have: $f(x_1) = f(x_2) \implies x_1 = x_2$. In other words: a given $y$ can be obtained only through one $x$.

### surjective

$(\forall y \in Y)(\exists x \in X)(f(x) = y)$. In other words: All $y \in Y$ have to obtainable.

### inverse

The inverse of a function is denoted by $f^{-1}: Y \to X$. The function has to be surjective and injective to be invertible: $f^{-1}(b) = a$ if $f(a) = b$. Its also true that for $(f^{-1} \circ f)(x) = (f \circ f^{-1})(x) = x$

### image

For some set $A$, the image of $A$ by $f$ is $f(A) = \{f(x): x \in A\}$. We can also define an inverse of an image even when the function itself isn't invertible $f^{-1}(A)$.

### logarithm

$\log_a(b) = c \equiv a^c = b$ where $a, b > 0\ \cap a \neq 1\ \cap b \neq 1$

$\log_a(x^c) = c\log_a(x)$

$\log_a(b) = \frac{1}{\log_b(a)}$

$\log_{a^n}(b) = \frac{1}{n}\log_a(b)$

$\log_a(b) = \frac{\log_c(b)}{\log_c(a)}$

### asymptotes

![asymptote types](https://www.mathsisfun.com/algebra/images/asymptote-types.svg)

#### horizontal

The horizontal asymptote has a form of $y = b$ where:

$\lim_{x \to \infty} f(x) = b$ or $\lim_{x \to -\infty} f(x) = b$

#### vertical

The vertical line $x = a$ is an asymptote if:

$\lim_{x \to a^-} f(x) = \pm \infty$ or $\lim_{x \to a^+} f(x) = \pm \infty$

#### oblique

A line $y = ax + b$ is an oblique asymptote at $\infty$ where:

$$
\begin{matrix}
	a = \lim_{x \to \infty} \frac{f(x)}{x} \\
	b = \lim_{x \to \infty} (f(x) - ax) \\
\end{matrix}
$$

### continuity

A function is said to be continuous if at all points it is true that: $f(x_0) = \lim_{x \to x_0^-}f(x) = \lim_{x \to x_0^+}f(x)$

### differentiability

A function is said to be differentiable at some point $x_0$ if the $f'(x_0)$ exists. It also means that the function is continuous at point $x_0$ but not the other way around.

### extreme values

To find an extremum we can take a derivative and compare to zero (Make sure the derivative at $x_0$ exists): $f'(x_0) = 0$. Then using the found arguments $f(x_0)$ is an extremum.

#### local

A local maximum or minimum is a maximal or minimal value of a function in a given range

#### global/absolute

A global maximum or minimum is a maximal or minimal value of a function in $Y$

---

1. Composition operator: $(g \circ f)(a) \equiv g(f(a))$
