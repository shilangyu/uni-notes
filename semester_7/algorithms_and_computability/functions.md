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

## Ackermann function

It is not a primitive recursive function.

$$
\begin{cases}
	A(0, y) = y + 1 \\
	A(x+1, 0) = A(x, 1) \\
	A(x+1, y+1) = A(x, A(x+1, y)) \\
\end{cases}
$$

### properties

$\forall_{x, y \in \mathbb N}$

1. $A(x, y) > y$
2. $A(x, y+1) > A(x, y)$
3. if $y_2 > y_1$ then $A(x, y_2) > A(x, y_1)$
4. $A(x+1, y) \ge A(x, y+1)$
5. $A(x+1, y) > A(x, y)$
6. if $x_2 > x_1$ then $A(x_2, y) > A(x_1, y)$
7. $A(x, y) > x$
8. $A(x + 2, y) > A(x, 2y)$

### theorem

For every primitive recursive function $f: N^n \to N$ there exists a constant $k \in N$ such that $\forall_{x_1, \cdots, x_n \in N} A(k, \max(x_1, \cdots, x_n)) > f(x_1, \cdots, x_n)$

## unbounded minimum

For some $p: N^{n+1} \to N$ we define $\mu_y[p(x_1, \cdots, x_n, y) = 0]: N^{n+1} \to N$ where

$$
\mu_y[p(x_1, \cdots, x_n, y) = 0](x_1, \cdots, x_n) = \begin{cases}
	\text{the smallest } y \le j \text{ such that } p(x_1, \cdots, x_n, y) = 0 &\text{if such } y \text{ exists} \\
	0 &\text{otherwise}
\end{cases}
$$

$\mu_y$ is a partial function called unbounded minimum.

## regular function

A function $f: N^{n+1} \to N$ is called regular if $\forall_{x_1, \cdots, x_n \in N}\exists_{y \in N} f(x_1, \cdots, x_n, y) = 0$

## recursive function

A function $f$ is a recursive function if:

1. $f$ is the zero function or the successor function or a projection function
2. $f$ is defined as a composition of recursive functions
3. $f$ is defined by primitive recursion with recursive functions
4. $f$ is defined by unbounded minimum on a total regular recursive function

Every recursive function is a total function

## partial recursive function

A function $f$ is a partial recursive function if:

1. $f$ is the zero function of the successor function or a projection function
2. $f$ is defined as a composition of partial recursive functions
3. $f$ is defined by primitive recursion with partial recursive function
4. $f$ is defined by unbounded minimum on a total partial recursive function

## computable functions

A function $f: N^n \to N$ is computable by a TM if there exists a TM $M$ such that for the input arguments $x_1, \cdots, x_n$ written on the tape:

1. $M$ halts and $f(x_1, \cdots, x_n)$ is written on the tape if $f(x_1, \cdots, x_n)$ is defined
2. $M$ does not halt if $f(x_1, \cdots, x_n)$ is undefined

Every partial recursive function is computable by a TM. Every recursive function is computable by a TM with stop property.

For every TM $M$ there exists a partial recursive function $f_M$ such that:

- if for the given input arguments $M$ halts, then the value of $f_M$ for these arguments is the output of $M$
- if for the given input arguments $M$ does not halt, then the value of $f_M$ of these arguments is undefined

If $M$ is a TM with stop property then $f_M$ is a recursive function.

$$
\text{the set of primitive recursive functions} \subsetneq \text{the set of recursive functions} \subsetneq \text{the set of partial recursive functions}
$$
