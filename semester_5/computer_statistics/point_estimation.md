# point estimation

## point estimator

A single value regarded as a sensible choice for $\theta$

## bias

$bias(\hat \theta) = E(\hat \theta) - \theta$

- Estimator is called unbiased if $bias(\hat \theta) = 0$
- Estimator is called asymptotically unbiased if $bias(\hat \theta) \stackrel{\text{sample size} \to \infty}{\to} 0$

## variance

$$
Var(\hat \theta) = E(\hat \theta - E(\hat \theta))^2
$$

### minimum variance unbiased estimator (MVUE)

Among all unbiased estimators, the one with the smallest variance is called MVUE

## mean squared error (MSE)

$$
MSE(\hat \theta) = E(\hat \theta - \theta)^2 = Var(\hat \theta) + bias(\hat \theta)^2
$$
