# hypothesis testing

Null hypothesis $H_0$. New alternatives emerging from the previous hypothesis are alternative hypothesis $H_1$.

## testing procedure

Testing to check whether $H_0$ should be rejected or failed to reject.

### test statistic

Distance between the sample data we have collected and the null hypothesis.

### rejection region (RR)

Set of all values of test statistic for which $H_0$ would be rejected. If the test statistic falls into RR then $H_0$ will be rejected.

### error type

When an erroneous conclusion is reached about the population parameter.

#### Type 1 error

To reject a true null hypothesis

$$
\alpha = P(\text{reject } H_0|H_0 \text{ is true})
$$

#### Type 2 error

To fail to reject a false null hypothesis

$$
\beta = P(\text{accept } H_0|H_0 \text{ is false})
$$

#### power

$$
\text{power} = 1 - \beta = P(\text{reject } H_0|H_0 \text{ is false})
$$

## p-value

Probability of obtaining a test statistic at least as extreme as the observed one (given $H_0$ is true)

- If $\text{p-value} \le \alpha$ then reject $H_0$
- If $\text{p-value} > \alpha$ then fail to reject $H_0$

## simple hypothesis

### Nyeman-Pearson theorem

For testing $H_0: \theta = \theta_0$ versus a simple alternative hypothesis $H_1: \theta = \theta_1$, let $c$ be a positive fixed number. Then:

$$
R^* = \{(x_1, \cdots, x_n) : \frac{f(x_1, \cdots, x_n; \theta_1)}{f(x_1, \cdots, x_n; \theta_0)} \ge c \}
$$

is the rejection region.

$$
\alpha^* = P((X_1, \cdots, X_n) \in R^* | H_0)
$$

$$
\beta^* = P((X_1, \cdots, X_n) \notin R^* | H_1)
$$

Are type 1 and 2 errors respectively.

## uniformly most powerful tests (UMP tests)

Let $H_0: \theta \in \Omega_0$ vs $H_1: \theta \in \Omega_1$. The power function is defined as

$$
\pi(\theta') = P((X_1, \cdots, X_n) \in R|\theta = \theta')
$$

UMP test is one for which $\pi(\theta')$ is maximized for any $\theta' \in \Omega_1$ subject to $\pi(\theta') \le \alpha$ for any $\theta' \in \Omega_0$

### likelihood ratio test

TODO

## Wilcoxon Signed-Rank test

We wish to test $H_0$ be $\tilde \mu = 0$ (median or mean) without normality assumptions.

Let $R_1, \cdots, R_n$ be ranks of $|X_1|, \cdots, |X_n|$ (ascending order), then

$$
W_+ = \sum_{X_i:sign(X_i)=1} R_i
$$

Is the sum of all positive signed-ranks.

For $H_0$ $\tilde \mu = \mu_0$ then just subtract $\mu_0$ from each observation and consider the Wilcoxon test for the modified sample.

### Mann-Whitney test

Two independent samples, we wish to test $H_0$ $\mu_X = \mu_Y$. We order the pooled sample and assign ranks $R_1, \cdots, R_{m+n}$. Set

$$
W = \text{Sum of } R_i \text{ associated with } X-\text{sample}
$$
