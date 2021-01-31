# Laplace transforms

Let $u(t)$ be a function defined on $0 \le t < \infty$. The Laplace transform of $u(t)$ is $U(s)$ defined as:

$$
\mathcal{L}[u] = U(s) = \int_0^\infty u(t) e^{-st} dt
$$

Assuming the improper integral exists.

## table

| $u(t)$         | $U(t)$                            |
| -------------- | --------------------------------- |
| $1$            | $\frac{1}{s}$ for $s > 0$         |
| $t$            | $\frac{1}{s^2}$ for $s > 0$       |
| $e^{at}$       | $\frac{1}{s - a}$ for $s > a$     |
| $h_a(t)$       | $\frac{1}{s} e^{-as}$ for $s > 0$ |
| $h_a(t)u(t-a)$ | $U(s)e^{-as}$                     |
| $\delta_a(t)$  | $e^{-as}$                         |
| $$             | $$                                |
| $$             | $$                                |

## Heavyside function (unit switching function)

Useful for defining functions of several formulae as a single formula

$$
h_a(t) = \begin{cases}
	0 & \text{if} & t < a \\
	1 & \text{if} & t \ge a \\
\end{cases}
$$

**Example**:

$$
f(t) = \begin{cases}
	t^2 & \text{if} & 0 \le t < 1 \\
	1 & \text{if} & 1 \le t < 2 \\
	t - 1 & \text{if} & 2 \le t \\
\end{cases}
$$

Can be expressed as $f(t) = t^2h_0(t) + (1-t^2)h_1(t) + (t-2)h_2(t)$

## condition

If the function $u(t)$ is piecewise continuous and there exists a constant $M > 0$ and $\alpha$ such that $|u(t)| \le Me^{\alpha t}$ then $u(t)$ has a Laplace transform.

## theorems

- $\mathcal{L}[u'] = sU(s) - u(0)$
- $\mathcal{L}[u''] = s^2U(s) - su(0) - u'(0)$

## properties

- Linearity: $\mathcal{L}[c_1u_1 + c_2u_2] = c_1\mathcal{L}[u_1] + c_2\mathcal{L}[u_2]$
- Shift property: $\mathcal{L}[u(t)e^{at}](s) = \mathcal{L}[u](s - a)$
- Switching property: $\mathcal{L}[h_a(t)u(t - a)] = \mathcal{L}[u](s) \cdot e^{-as}$

## convolution

$(u * v)(t) = \int_0^t u(\tau)v(t - \tau) d\tau$

When $u$ and $v$ are continuous on $[0, \infty)$ then $(u * v)(t) = (v * u)(t)$

## delta function

Let $a > 0$, $\epsilon > 0$

$$
b_{a,\epsilon}(t) = \begin{cases}
\frac{1}{\epsilon} & \text{for } a - \frac{\epsilon}{2} \le t < a + \frac{\epsilon}{2} \\
0 & \text{otherwise}
\end{cases} = \frac{1}{\epsilon}(h_{a - \frac{\epsilon}{2}}(t) - h_{a+\frac{\epsilon}{2}}(t))
$$

Delta function is a generalized function:

$\delta_a(t) = \lim_{\epsilon \to 0} b_{a, \epsilon}(t)$

### properties

- $\int_0^\infty \delta_a(t)\phi(t) dt = \phi(a)$ for $a \ge 0$
