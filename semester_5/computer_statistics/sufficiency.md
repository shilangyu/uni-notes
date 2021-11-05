# sufficiency

Statistic $T(X)$ is a function defined on the sample $X = (X_1, \cdots, X_n)$ with values in $\mathbf{R}^k$ with $k \le n$

Statistic $T(X)$ is a sufficient statistic for $\theta$ if the conditional distribution function of $X$ given $T(X)$ does not depend on $\theta$

For some joint p.d. $X$ of i.i.d. we wish to consider $P_\theta (X = x | T(X) = T(x))$

Since $\{X = x\}$ is a subset of all events $\{T(X) = T(x)\}$ then $P_\theta (X = x | T(X) = T(x)) = \frac{P_\theta (X = x)}{P_\theta (T(X) = T(x))}$
