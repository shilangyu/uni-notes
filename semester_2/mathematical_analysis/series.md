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
