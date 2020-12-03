# coordinate systems

## cylindrical

$(r, \theta, z)$

$$
\begin{cases}
x = r \cos\theta \\
y = r \sin\theta \\
z = z \\
\end{cases}
$$

If $r \ge 0$ and $- \pi < \theta \le \pi$:

$$
r = \sqrt{x^2 + y^2} \\

\theta = \begin{cases}
\tan^{-1}(\frac{y}{x}) & \text{if} & x \ge 0 \\
\tan^{-1}(\frac{y}{x}) + \pi & \text{if} & x < 0 \\
\end{cases}
$$

## spherical

$(\rho, \theta, \phi)$

$$
\begin{cases}
x = \rho \sin\phi \cos\theta \\
y = \rho \sin\phi \sin\theta \\
z = \rho \cos\theta \\
\end{cases}
$$

If $\rho \ge 0$ and $- \pi < \theta \le \pi$:

$$
\rho = \sqrt{x^2 + y^2 + z^2} \\

\theta = \begin{cases}
\tan^{-1}(\frac{y}{x}) & \text{if} & x \ge 0 \\
\tan^{-1}(\frac{y}{x}) + \pi & \text{if} & x < 0 \\
\end{cases} \\

\phi = \cos^{-1}\frac{z}{\sqrt{x^2 + y^2 + z^2}}
$$
