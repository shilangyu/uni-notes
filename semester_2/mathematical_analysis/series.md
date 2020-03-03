# series

### infinite sums

Some infinite series have a sum: $\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots = 1$, they are called **convergent**

Others don't: $1 - 1 + 1 - 1 + \cdots$, they are called **divergent**

[more about sequences](/uni-notes/semester_1/transition_math/sequences.html)

### test for divergence

If $\sum_{n=1}^{\infty} a_n$ converges then $a_n \to 0$.

Series diverges if $\lim_{n\to\infty} a_n$ fails to exist or is different from 0.

This however does not work the other way, if $a_n \to 0$ the series still can be divergent.

### series with non-negative terms

Partial sums form non-decreasing sequence.

These series converge iff partial sums are bounded from above.

**example:** Harmonic series $\sum_{n=1}^{\infty} \frac{1}{n^p}$ is convergent iff $p > 1$

#### direct comparison test (DCT)

##### convergence

$\sum_{n=1}^{\infty} a_n$ converges if there is a convergent series $\sum_{n=1}^{\infty} c_n$ with $a_n \le c_n$ for all $n > N$, for some integer $N$.

##### divergence

$\sum_{n=1}^{\infty} a_n$ diverges if there is a divergent series $\sum_{n=1}^{\infty} d_n$ with $a_n \ge d_n$ for all $n > N$, for some integer $N$.

#### limit comparison test (LCT)

Let $\lim_{n \to \infty} \frac{a_n}{b_n} = L$

- if $0 < L < \infty$ then $\sum a_n$ and $\sum b_n$ both converge or both diverge
- if $L = 0$ and $\sum b_n$ converges then $\sum a_n$ converges
- if $L = \infty$ and $\sum b_n$ diverges then $\sum a_n$ diverges

#### ratio test

Measure the rate of growth or decline of a series: $\frac{a_{n+1}}{a_n}$

Let $\rho = \lim_{n \to \infty} \frac{a_{n+1}}{a_n}$, then:

- the series converges if $\rho < 1$
- the series diverges if $\rho > 1$
- the test is inconclusive if $\rho = 1$

#### n-th root test

Let $\rho = \lim_{n \to \infty} \sqrt[n]{a_n}$, then:

- the series converges if $\rho < 1$
- the series diverges if $\rho > 1$
- the test is inconclusive if $\rho = 1$

### alternating series

Series in which terms alternate between positive and negative. Usually consists of $(-1)^n$.

#### alternating harmonic series

$\sum (-1)^n \frac{1}{n}$

#### alternating series test

The series $\sum (-1)^{n+1} a_n$ converges if all three are satisfied:

- $a_n > 0$
- $a_n \ge a_{n+1}$ for $n \ge N$
- $\lim_{n \to \infty} a_n = 0$

#### absolute convergence

We say that $\sum a_n$ is convergent absolutely iff $\sum |a_n|$ is convergent

#### conditional convergence

We say that $\sum a_n$ is convergent conditionally iff $\sum a_n$ is convergent and $\sum |a_n|$ is divergent

#### absolute convergence test

If $\sum |a_n|$ converges, then $\sum a_n$ converges.
