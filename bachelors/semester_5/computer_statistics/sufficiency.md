# sufficiency

Statistic $T(X)$ is a function defined on the sample $X = (X_1, \cdots, X_n)$ with values in $\mathbf{R}^k$ with $k \le n$

Statistic $T(X)$ is a sufficient statistic for $\theta$ if the conditional distribution function of $X$ given $T(X)$ does not depend on $\theta$

For some joint p.d. $X$ of i.i.d. we wish to consider $P_\theta (X = x | T(X) = T(x))$

Since $\{X = x\}$ is a subset of all events $\{T(X) = T(x)\}$ then $P_\theta (X = x | T(X) = T(x)) = \frac{P_\theta (X = x)}{P_\theta (T(X) = T(x))}$

## factorization theorem

Let $p(x|\theta)$ be a joint pdf (or pmf) of $X$. A statistic $T(x)$ is sufficient if we can find

$$
p(x|\theta) = h(x)g(T(x) | \theta)
$$

### minimal sufficient statistic

A function of any other sufficient statistic. Has the smallest dimensionality.

If

$$
(\frac{p(x|\theta)}{p(y|\theta)} \text{ does not depend on } \theta) \iff (T(x) = T(y))
$$

Then $T(X)$ is the minimal sufficient statistic.

## exponential family

Distribution belongs to the exponential family if its pdf can be expressed as:

$$
p(x|\theta) = h(x)c(\theta)\exp(\sum_{j=1}^k \omega_j(\theta)t_j(x))
$$

If i.i.d. joint distributions belong to the exponential family then

$$
T(X) = (\sum_{i = 1}^n t_1(X_i), \cdots, \sum_{i = 1}^n t_k(X_i))^T
$$

is a sufficient statistic for $\theta$
