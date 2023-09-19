# series solutions of differential equations

$a(x)y''+b(x)y'+c(x)y=f(x)$

Solution will be a power series: $y = \sum_{i=0}^\infty a_i(x - x_0)^i$

The sums coming from $y''$ and $y'$ should have a common $x^i$ factor to be able to join them. Then a recursive formula for $a_i$ can be derived.

**Example:**

$y'' + 2xy' - y = 0$, $y(0) = 0$, $y'(0) = 1$

1. Let $y = \sum_{i=0}^\infty a_ix^i$
   - Then $y' = \sum_{i=0}^\infty ia_ix^{i-1}$
   - Then $y'' = \sum_{i=0}^\infty i(i-1)a_ix^{i-2}$
2. Create a common $x^i$: $y'' = \sum_{j=0}^\infty (j+2)(j+1)a_{j+2}x^j$ (we leave $y'$ with a $x^{i-1}$ because $b(x) = 2x$)
3. DE takes form of: $\sum_{j=0}^\infty (j+2)(j+1)a_{j+2}x^j + \sum_{i=0}^\infty 2ia_ix^i - \sum_{i=0}^\infty a_ix^i = 0$
4. Simplify: $\sum_{i=0}^\infty \big[(i+2)(i+1)a_{i+2} + (2i - 1)a_i \big] x^i = 0$
5. Which means: $(i+2)(i+1)a_{i+2} + (2i - 1)a_i = 0 \implies a_{i+2} = -\frac{2i - 1}{(i+2)(i+1)}a_i$
6. After calculating some $a$ terms we get: $y = a_0(1 + \frac{x^2}{2} - \frac{3x^4}{4!} + \frac{21x^6}{6!} - \cdots) + a_1(x - \frac{x^3}{3!} + \frac{5x^5}{5!} - \frac{45x^7}{7!} + \cdots)$
7. Using the initial conditions we get $a_0 = 0$ and $a_1 = 1$

## the Frobenius method

When we cannot get a recursive formula for $a_i$

Then we consider a solution in a form of $y = x^r \sum_{i=0}^\infty a_i$
