# point estimation

## point estimator

A single value regarded as a sensible choice for $\theta$

## bias

$bias(\hat \theta) = E(\hat \theta) - \theta$

- Estimator is called unbiased if $bias(\hat \theta) = 0$
- Estimator is called asymptotically unbiased if $bias(\hat \theta) \stackrel{\text{sample size} \to \infty}{\to} 0$

## variance

$$
Var(\hat \theta) = E[(\hat \theta - E(\hat \theta))^2]
$$

### minimum variance unbiased estimator (MVUE)

Among all unbiased estimators, the one with the smallest variance is called MVUE

## mean squared error (MSE)

$$
MSE(\hat \theta) = E[(\hat \theta - \theta)^2] = Var(\hat \theta) + bias^2(\hat \theta)
$$

## regular model

Model $P = \{f(\cdot, \theta) : \theta \in \Theta\}$ is called regular if

1. $\Theta$ is open interval in $\mathbb R$
2. Support $A = \{ x \in \mathbb R : f(x; \theta) > 0 \}$ does not depend on $\theta$
3. The derivative $\frac{\partial \ln(f(x; \theta))}{\partial \theta}$ exists and is finite for each $x \in A$ and $\theta \in \Theta$
4. $0 < E[(\frac{\partial \ln(f(X; \theta))}{\partial \theta})^2] < \infty$
5. Is $f(x; \theta)$ a pdf and $E_\theta[|T|] < \infty$ so

$$
\frac{\partial}{\partial \theta} \int T(X)f(x; \theta)dx = \int T(X) \frac{\partial}{\partial \theta} f(x; \theta)dx
$$

### fisher information

$I(\theta)$ in a single observation from pdf or pmf $f(x; \theta)$ is the variance of a random variable $U = \frac{\partial \ln(f(X; \theta))}{\partial \theta}$

$$
I(\theta) = Var[\frac{\partial \ln(f(X; \theta))}{\partial \theta}]
$$

If $f(X; \theta)$ is twice differentiable then,

$$
I(\theta) = -E[\frac{\partial^2 \ln(f(X; \theta))}{\partial \theta^2}]
$$

### random sample

Let $I_n(\theta)$ be the fisher information for random sample $X_1, \cdots, X_n$ then $nI(\theta) = I_n(\theta)$

### Cramer-Rao

If the statistic $T = t(X_1, \cdots, X_n)$ is an unbiased estimator of $\theta$ then

$$
Var[T] \ge \frac{1}{I_n(\theta)}
$$

## efficiency

The ratio of cramer-rao lower bound to $Var[T]$ is called efficiency. $T$ is called efficient if its efficiency is equal to 1.

### relative

Let $T_1$ and $T_2$ be unbiased estimators of $\theta$. Then

$$
eff(T_1, T_2) = \frac{Var[T_2]}{Var[T_1]}
$$

is called the relative efficiency.

## finding estimators

### method of moments

The $k$-th moment is $E[X^k]$. The $k$-th sample moment is $\frac{1}{n} \sum_{i=1}^n X_i^k$

Let $X_1, \cdots, X_n$ be a random sample from $f(x; \theta_1, \cdots, \theta_m)$ where $\theta_i$ are unknown parameters. The moment estimators $\hat \theta_1, \cdots, \hat \theta_m$ are obtained by equaling the first $m$ sample moment to corresponding population moments and solving for $\theta_1, \cdots, \theta_m$

### maximum likelihood estimator (MLE)

$$
L(\theta) = f(x_1, \cdots, x_n; \theta_1, \cdots, \theta_m) = \prod_{i=1}^n p(x_i; \theta_1, \cdots, \theta_m)
$$

When $x$ are observed values, $L(\theta)$ is regarded as a function of $\theta$ and called a likelihood function. The maximum likelihood estimates $\hat \theta$ are those values that maximize $L(\theta)$. MLE is the estimator when replacing $x_i$ with $X_i$

#### theorems

- Let $\hat \theta$ be MLE of $\theta_0$ then $\hat \theta \to \theta_0$ in probability when $n \to \infty$. That is, $\hat \theta$ is a consistent estimator for $\theta_0$
- $\sqrt{n I(\theta_0)}(\hat \theta - \theta_0) \to N(0, 1)$
- $Var[\hat \theta] \approx \frac{1}{nI(\theta_0)}$ when $n$ is big. MLE is asymptotically efficient

### Bayesian estimation

Let $\Theta$ be the unknown parameter, a random variable. We know its $f_\Theta(\theta)$ pdf/pmf (called prior). Then the distribution given the date is

$$
f_{\Theta|X}(\theta|x) = \frac{f_{X|\Theta}(x|\theta)f_\Theta(\theta)}{\int f_{X|\Theta}(x|\theta)f_\Theta(\theta) d\theta}
$$

The pdf $f_{\Theta|X}(\theta|x)$ is called the posterior.

$f_{\Theta|X}(\theta|x) \propto f_{X|\Theta}(x|\theta)f_\Theta(\theta)$

### density estimator

$$
\hat f_h(x) = \frac{1}{nh} \sum_{i=1}^n K(\frac{x - X_i}{h})
$$

Where $K(t)$ is a Kernel function and $h$ a bandwidth

#### kernel functions

- Boxcar: $K(u) = \frac{1}{2}1_{\{|u| \le 1\}}$
- Epanechnikov: $K(u) = \frac{3}{4}(1 - u^2)1_{\{|u| \le 1\}}$
- Gaussian: $K(u) = \frac{1}{\sqrt{2\pi}} e^{-\frac{u^2}{2}}$
