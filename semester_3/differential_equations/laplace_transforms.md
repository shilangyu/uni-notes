# Laplace transforms

Let $u(t)$ be a function defined on $0 \le t < \infty$. The Laplace transform of $u(t)$ is $U(s)$ defined as:

$$
\mathcal{L}[u] = U(s) = \int_0^\infty u(t) e^{-st} dt
$$

Assuming the improper integral exists.

## Heavyside function

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
