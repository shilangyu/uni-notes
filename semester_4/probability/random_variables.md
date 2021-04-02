# random variables

Random variable $rv$ is a function mapping the sample space to some other set. $X: \Omega \to \mathbf{R}$. $\mathcal{X}$ denotes the range of $X$: $\mathcal{X} = X(\Omega)$

## cumulative distribution function

$F(x) = P(X \le x) = P(\{\omega \in \Omega : X(\omega) \le x\})$

### properties

1. $\lim_{x\to -\infty} F(x) = 0$
2. $\lim_{x\to \infty} F(x) = 1$
3. cdf is non-decreasing
4. cdf is right continuous

### propositions

- $P(a < X \le b) = F(b) - F(a)$
- $P(a \le X \le b) = F(b) - F(a^-)$
- $P(a < X < b) = F(b^-) - F(a)$
- $P(a \le X < b) = F(b^-) - F(a^-)$

## discrete $rv$

A $rv$ that can take on at most a countable number of possible values

### probability mass function $pmf$

$p(a) = P(X = a)$

- $p(x) \ge 0$
- $\sum_{x\in X}p(x) = 1$

## continuous $rv$

Uncountable set of possible values

### probability density function $pdf$

$pmf$ for continuous $rv$: $F(x) = \int_{-\infty}^{x} f(t)dt$

## mixed $rv$

There exists $p \in (0; 1)$ such that $F(x) = p \cdot F_d(x) + (1 - p)\cdot F_c(x)$ where $F_d$ and $F_c$ are cdf of a discrete and continuous $rv$ respectively.

## function of $rv$

Let $Y(\omega) = g(X(\omega))$ be a new $rv$

If $g$ is a strictly monotonic, differentiable function then $Y$'s pdf is given by

$$
f_Y(y) = f_X(g^{-1}(y)) \cdot \frac{1}{|g'(g^{-1}(y))|}
$$

### for continuous $rv$

- When $Y = aX + b$ where $a \ne 0$: $f_Y(y) = \frac{1}{|a|}f_X(\frac{y-b}{a})$
- When $Y = X^2$ where $y > 0$: $f_Y(y) = \frac{1}{2\sqrt{y}}(f_X(\sqrt{y} + f_X(-\sqrt{y}))$

## expectations

_"probability mass center"_

### of discrete $rv$

$E[X] = \sum_{x_i \in X} x_iP(X = x_i)$

### of continuous $rv$

$E[X] = \int_{-\infty}^\infty xf(x) dx$

### of mixed $rv$

$E[X] = pE[X_d] + (1 - p)E[X_c]$

## moments

$E[(X - c)^n]$

### raw moment

$m_n = E[X^n]$

- if the n-th moment exists, all moments $<n$ also exist

### central moment

$\mu_n =  E[(X - \mu)^n]$

## variance

$V(X) = \sigma^2 = E[(X - \mu)^2] = m_2 - \mu^2 = E[X^2] - E^2[X]$

- The variance is 0 iff all values are equal
- $V(aX + b) = V(aX) = a^2V(X)$

## standardized

$X^* = \frac{X- \mu}{\sigma}$ where $\sigma = \sqrt{V(X)}$

## skewness

$\gamma_1 = E[X^{*^3}] = \frac{\mu_3}{\sigma^3}$

## kurtosis

$\gamma_2 = \frac{\mu_4}{\sigma^4} - 3$
