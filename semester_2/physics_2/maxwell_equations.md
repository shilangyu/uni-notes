# Maxwell equations

## del/nabla

Del is denoted by $\nabla$, it is a vector of derivatives of each component: $\nabla = \frac{\delta}{\delta x} \hat{\imath} + \frac{\delta}{\delta y} \hat{\jmath} + \frac{\delta}{\delta z} \hat{k}$

It doesn't exist by itself, it will appear next to a vector or a multivariate function.

### Laplacian

$\Delta = \nabla \nabla = \nabla^2$

## curl

Curl (sometimes called rotation) describes the rotation of a vector field.

Let $\vec{F} = [F_x, F_y, F_z]$, then:

$$
	curl(F) = \nabla \times \vec{F} =
		\begin{vmatrix}
			\hat{\imath}            & \hat{\jmath}            & \hat{k}                 \\
			\frac{\delta}{\delta x} & \frac{\delta}{\delta y} & \frac{\delta}{\delta x} \\
			F_x                     & F_y                     & F_z                     \\
		\end{vmatrix} =
		\begin{bmatrix}
			\frac{\delta F_z}{\delta y} - \frac{\delta F_y}{\delta z} \\
			\frac{\delta F_x}{\delta z} - \frac{\delta F_z}{\delta x} \\
			\frac{\delta F_y}{\delta x} - \frac{\delta F_x}{\delta y} \\
		\end{bmatrix}
$$

## gradient

Gradient of a scalar field $f$ shows the direction to the local maximum of $f$.

$$
	grad(f) = \nabla f = \frac{\delta f}{\delta x}\hat{\imath} + \frac{\delta f}{\delta y}\hat{\jmath} + \frac{\delta f}{\delta z}\hat{k}
$$

## divergence

Divergence of a vector field $\vec v$ is a measure of its increase in the direction it points

$$
	div(\vec v) = \nabla \cdot \vec v = \frac{\delta v_x}{\delta x} + \frac{\delta v_y}{\delta y} + \frac{\delta v_z}{\delta z}
$$

### formulae

#### differential forms

$$
	\nabla \times \vec E = -\frac{\delta \vec B}{\delta t}
$$

$$
	\nabla \times \vec H = \vec J + \frac{\delta \vec D}{\delta t}
$$

$$
	\nabla \cdot \vec D = \rho_v
$$

$$
	\nabla \cdot \vec B = 0
$$

#### complex forms

$$
	\nabla \times \underline{\vec E} = -j\omega \underline{\vec B}
$$

$$
	\nabla \times \underline{\vec H} = \underline{\vec J} + j\omega \underline{\vec D}
$$

$$
	\nabla \cdot \underline{\vec D} = \rho_v
$$

$$
	\nabla \cdot \underline{\vec B} = 0
$$

### environment of propagating EM waves

$$
$$
