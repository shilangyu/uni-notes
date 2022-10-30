# functions

## total

$f: N^n \to N$ is a total functions if it is defined for all elements of $N^n$.

## partial

If a function is not total it is a partial function.

## primitive recursive functions

Let $N = \mathbb N$

1. zero function $Z: N \to N$ $Z(x) = 0$
2. successor function $S: N \to N$ $S(x) = x+1$
3. projection functions $P_i^n: N^n \to N$ $P_i^n(x_1, \cdots, x_n) = x_i$

### operations

1. composition $f(x_1, \cdots, x_n) = h(g_1(x_1, \cdots, x_n), \cdots, g_m(x_1, \cdots, x_n))$ for $f,g_1,\cdots,g_m: N^n \to N$, $h: N^m \to N$
2. primitive recursion:

$$
\begin{aligned}
	f(x_1, \cdots, x_n, 0) &= g(x_1, \cdots, x_n) \\
	f(x_1, \cdots, x_n, y+1) &= h(x_1, \cdots, x_n, y, f(x_1, \cdots, x_n, y)) \\
\end{aligned}
$$

where $g: N^n \to N$, $h: N^{n+2} \to N$, $f: N^{n+1} \to N$

A function $f$ is a primitive recursive function if:

1. $f$ is a zero function or a successor function or a projection function
2. $f$ is defined as a composition of primitive recursive functions
3. $f$ is defined by primitive recursion with primitive recursive functions

Every recursive function is a total function.

## primitive recursive functions

### simple

1. addition $add(x, y) = x + y$
2. multiplication $mult(x, y) = x \cdot y$
3. power $exp(x, y) = x^y$
4. factorial $fact(x) = x!$
5. predecessor $pd(y) = \{0 \text{ if } y = 0, y-1 \text{ otherwise }\}$
6. sign $sg(y) = \{1 \text{ if } y > 0, 0 \text{ otherwise }\}$
7. bounded difference $ld(y) = \{x-y \text{ if } x \ge y, 0 \text{ otherwise }\}$
8. absolute difference $abs(y) = \{x-y \text{ if } x \ge y, y-x \text{ otherwise }\}$
9. comparing $ls(x,y)$, $gr(x,y)$, $eq(x,y)$
10. bounded sum, for some $p: N^{n+1} \to N$ primitive recursive function $f(x_1, \cdots, x_n, y) = \sum_{i=0}^y p(x_1, \cdots, x_n, i)$
11. bounded product, for some $p: N^{n+1} \to N$ primitive recursive function $f(x_1, \cdots, x_n, y) = \prod_{i=0}^y p(x_1, \cdots, x_n, i)$
12. division $quo(x, y) = \{x / y \text{ if } x \ne 0, 0 \text{ otherwise }\}$
13. remainder $rem(x, y) = \{y - quo(x, y) \text{ if } x \ne 0, 0 \text{ otherwise }\}$
14. divisibility $div(x, y) = \{1 \text{ if } x \ne 0 \land y \ne 0 \land x|y, 0 \text{ otherwise }\}$
15. number of divisors $ndiv(y)$
16. is prime $pr(x) = \{1 \text{ if } x \text{ is prime}, 0 \text{ otherwise }\}$
17. i-th prime $pn(i)$

### bounded minimum

For some $p: N^{n+1} \to N$ primitive recursive function we define $\mu[p(x_1, \cdots, x_n, y) = 0]: N^{n+1} \to N$ where

$$
\mu[p(x_1, \cdots, x_n, y) = 0](x_1, \cdots, x_n, j) = \begin{cases}
	\text{the smallest } y \le j \text{ such that } p(x_1, \cdots, x_n, y) = 0 &\text{if such } y \text{ exists} \\
	0 &\text{otherwise}
\end{cases}
$$

#### alternative definition

For some $\omega: N^n \to N$ primitive recursive function we define $\mu_{y \le \omega(x_1, \cdots, x_n)}[p(x_1, \cdots, x_n, y) = 0]: N^{n+1} \to N$ where

$$
\mu_{y \le \omega(x_1, \cdots, x_n)}[p(x_1, \cdots, x_n, y) = 0](x_1, \cdots, x_n, j) = \mu[p(x_1, \cdots, x_n, y) = 0](x_1, \cdots, x_n, \omega(x_1, \cdots, x_n))
$$

### cantor enumeration

Returns the index of a pair in the Cantor enumeration.

$$
\Pi : N^2 \to N,\ \Pi(x,y) = \frac{(x+y)(x+y+1)}{2} + x
$$

#### decoding

let $\sigma_1, \sigma_2: N \to N$ where $\Pi(\sigma_1(z), \sigma_2(z)) = z$

### cantor tuple function

$\Pi^2 \stackrel{\text{def}}{=} \Pi$, $\sigma_i^2 \stackrel{\text{def}}{=} \sigma_i$

$$
\Pi^{n+1}(x_1, \cdots, x_n, x_{n+1}) = \Pi^2(\Pi^n(x_1, \cdots, x_n), x_{n+1})
$$

$$
\sigma_k^{n+1}(z) = \sigma_k^n(\sigma_1^2(z))
$$

### Godel numbering

$$
(x_0, \cdots, x_n) \mapsto p_0^{x_0}p_1^{x_1}\cdots p_n^{x_n}
$$

where $p_i$ is the i-th prime number, $p_i = pn(i)$
