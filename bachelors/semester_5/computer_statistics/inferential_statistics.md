# inferential statistics

Procedures used to draw conclusions about population characteristics based on the information contained in a sample drawn from this population.

## $\chi^2$ distribution

Let $\chi_k^2$ denotes a $\chi^2$ distribution with $k$ degrees of freedom

- Let $X \sim N(0,1)$ then $X^2 \sim \chi_1^2$
- Let $U_1, \cdots, U_n \sim \chi_1^2$ then $V = \sum_{i=1}^n U_i \sim \chi_n^2$
- $E[\chi_n^2] = n$
- $Var(\chi_n^2) = 2n$

### $t$-student distribution

Let $X \sim N(0,1)$ and $U \sim \chi_n^2$ independent, then:

$$
\frac{X}{\sqrt{\frac{U}{n}}} \sim t_n
$$

## sample mean

Let $X_1, \cdots, X_n \stackrel{i.i.d.}{\sim} N(\mu, \sigma)$. Then:

$$
\begin{aligned}
	E(\bar X_n) = \mu, &&& V(\bar X_n) = \frac{\sigma^2}{n}, &&& \bar X_n \sim N(\mu, \frac{\sigma}{\sqrt{n}})
\end{aligned}
$$

$$
\begin{aligned}
	\bar X_n \stackrel{n \to \infty}{\to} \mu &\text{ in probability} \\
	Var(X_n) \stackrel{n \to \infty}{\to} 0 & \\
\end{aligned}
$$

## central limit theorem (CLT)

Let $X_1, \cdots, X_n$ be $i.i.d.$ and $E(X_i) = \mu$ and $V(X_i) = \sigma^2 < \infty$. Then:

$$
\frac{\bar X_n - \mu}{\frac{\sigma}{\sqrt n}} \stackrel{n \to \infty}{\to} N(0, 1) \text{ in distribution}
$$

## empirical distribution function (ECDF)

$$
F_n(x) = \frac{1}{n} \sum_{i=1}^n 1_{(-\infty, x]} (X_i)
$$

Where $1_A(x)$ is the indicator function equal to one if $x \in A$ and zero otherwise.

### Glivenko-Cantelli

As $n \to \infty$,

$$
\sup_{t \in \mathbf{R}} |F_n(t) - F(t)| \to 0
$$

with probability 1.
