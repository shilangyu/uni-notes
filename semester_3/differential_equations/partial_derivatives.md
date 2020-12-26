# partial derivatives

## linear approximation

$\Delta z = f_x(x_0, y_0)\Delta x + f_y(x_0, y_0)\Delta y$

## chain rule

Let $F(t) = f(g(t), h(t), i(t))$ then:

$$
F'(t) = f_x(g(t), h(t), i(t))g'(t) + f_y(g(t), h(t), i(t))h'(t) + f_z(g(t), h(t), i(t))i'(t)
$$

### matrix function

$$
\frac{\partial(u_1, \cdots ,u_m)}{\partial (x_1, \cdots, x_n)} =
\begin{pmatrix}
	\frac{\partial u_1}{\partial x_1} & \frac{\partial u_1}{\partial x_2} & \cdots & \frac{\partial u_1}{\partial x_n} \\
	\frac{\partial u_2}{\partial x_1} & \frac{\partial u_2}{\partial x_2} & \cdots & \frac{\partial u_2}{\partial x_n} \\
	\vdots & \vdots & \ddots & \vdots\\
	\frac{\partial u_m}{\partial x_1} & \frac{\partial u_m}{\partial x_2} & \cdots & \frac{\partial u_m}{\partial x_n} \\
\end{pmatrix}
$$

### generalization

$$
\frac{\partial(u_1,\cdots,u_m)}{\partial (t_1,\cdots,t_k)} =
\frac{\partial(u_1,\cdots,u_m)}{\partial (x_1,\cdots,x_n)}
\frac{\partial(x_1,\cdots,x_n)}{\partial (t_1,\cdots,t_k)}
$$

## Lagrange multipliers

To find the extreme values of $f(x,y)$ on a $g(x,y) = c$ constraint solve the system of equations:

$$
\begin{cases}
	f_x(x,y) = \lambda g_x(x,y)\\
	f_y(x,y) = \lambda g_y(x,y)\\
	g(x,y) = c \\
\end{cases}
$$
