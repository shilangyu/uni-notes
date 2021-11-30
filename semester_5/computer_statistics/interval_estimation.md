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
Cl_{1 - \alpha}(\theta) = (l(X_1, \cdots, X_n); u(X_1, \cdots, X_n))
$$

### standard normal

For the standard normal we can define the confidence interval for a sample as

$$
Cl_{1 - \alpha}(\mu) = (\bar X - \frac{\sigma}{\sqrt{n}} Z_{1 - \frac{\alpha}{2}}; \bar X + \frac{\sigma}{\sqrt{n}} Z_{\frac{\alpha}{2}})
$$
