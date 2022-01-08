# interval estimation

## confidence interval (CI)

Let $h(X_1, \cdots, X_n, \theta)$ is a random variable with a known distribution not depending on $\theta$.

For any $\alpha \in (0; 1)$ constants $a$ and $b$ can be found that satisfies

$$
\begin{aligned}
	P(a < h(X_1, \cdots, X_n, \theta) < b) = 1 - \alpha \\
	P(l(X_1, \cdots, X_n) < \theta < u(X_1, \cdots, X_n)) = 1 - \alpha \\
\end{aligned}
$$

Then the confidence interval is

$$
CI_{1 - \alpha}(\theta) = (l(X_1, \cdots, X_n); u(X_1, \cdots, X_n))
$$

### standard normal

#### for $\mu$

For the standard normal we can define the confidence interval for a sample as

Known $\sigma$

$$
CI_{1 - \alpha}(\mu) = (\bar X - \frac{\sigma}{\sqrt{n}} Z_{1 - \frac{\alpha}{2}}; \bar X + \frac{\sigma}{\sqrt{n}} Z_{1 - \frac{\alpha}{2}})
$$

Unknown $\sigma$

$$
CI_{1 - \alpha}(\mu) = (\bar X - \frac{s}{\sqrt{n}} t_{1 - \frac{\alpha}{2}, n-1}; \bar X + \frac{s}{\sqrt{n}} t_{1 - \frac{\alpha}{2}, n-1})
$$

#### for $\sigma$

$$
CI_{1 - \alpha}(\sigma^2) = (\frac{(n-1)s^2}{\chi^2_{1- \frac{\alpha}{2}, n-1}}; \frac{(n-1)s^2}{\chi^2_{\frac{\alpha}{2}, n-1}})
$$

### any large sample

Using CLT, it is approximately

$$
CI_{1 - \alpha}(\mu) = (\bar X - \frac{s}{\sqrt{n}} Z_{1 - \frac{\alpha}{2}}; \bar X + \frac{s}{\sqrt{n}} Z_{1 - \frac{\alpha}{2}})
$$

#### proportion

$X_1, \cdots, X_n \sim Ber(p)$

$$
CI_{1-\alpha}(p) = (\hat p - \sqrt{\frac{\hat p(1-\hat p)}{n}}Z_{1 - \frac{\alpha}{2}}; \hat p + \sqrt{\frac{\hat p(1-\hat p)}{n}}Z_{1 - \frac{\alpha}{2}})
$$

## one sided confidence interval

Confidence bounded by an upper or lower bound.
