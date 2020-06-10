# sequences

#### arithmetic

Difference is denoted with $d$, such that $d = a_{n+1} - a_n$

Sum: $S_n = \frac{2a_1 + (n-1)d}{2}n$

n-th term: $a_n = a_1 + (n-1)d$

Relation: $a_n = \frac{a_{n-1} + a_{n+1}}{2}$

#### geometric

Quotient is denoted with $q$, such that $q = \frac{a_{n+1}}{a_n}$

Sum: $S_n = a_1\frac{1 - q^n}{1 - q}$

n-th term: $a_n = a_1q^{n-1}$

Relation: $a_n^2 = a_{n-1}a_{n+1}$

#### bound

$|a_n| < M$

#### limits

A sequence is convergent if it has a limit otherwise it is divergent

$L$ - limit of a sequence

$\epsilon$ -

then: $|a_n - L| < \epsilon$

- $\lim(a_n \pm b_n) = \lim a_n \pm \lim b_n$
- $\lim(a_nb_n) = \lim a_n \lim b_n$
- $\lim(\frac{a_n}{b_n}) = \frac{\lim a_n}{\lim b_n}$
- $\lim(c \cdot a_n) = c\lim a_n$

#### subsequences

$a_n$ converges to $L$ if all of its subsequences converge to $L$

let $a_n = (-1)^n$ then $a_{2n} = (-1)^{2n}$ and $a_{2n-1} = (-1)^{2n-1}$ are subsequences of $a_n$. They have different limits therefore $a_n$ has no limit.

#### sandwich theorem

$a_n \leq b_n \leq c_n$

if $\lim a_n = \lim c_n = L$ then $\lim b_n = L$

#### Euler limit

$\lim \limits_{n \to \infty} (1 + \frac{x}{n})^n = e^x$

#### L'Hopital rule

Iff $\lim_{x \to c} f(x) = \lim_{x \to c} g(x) = 0$ or $\lim_{x \to c} f(x) = \pm \lim_{x \to c} g(x) = \pm \infty$ then $\lim_{x \to c}\frac{f(x)}{g(x)} = \lim_{x \to c}\frac{f'(x)}{g'(x)}$

**implicit usage**:

- $0 \cdot \infty: f \cdot g = \frac{f}{\frac{1}{g}}$
- $\infty - \infty: f - g = \frac{\frac{1}{g} - \frac{1}{f}}{\frac{1}{fg}}$
- $0 \cdot \infty: f \cdot g = \frac{f}{\frac{1}{g}}$
- $0^0, \infty^0, 1^\infty: f^g = e^{g \ln f}$
