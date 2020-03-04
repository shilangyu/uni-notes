# Maxwell equations

<!--
### electromagnetic field (EMF)

**E** is electric field OR electruc field intesity $V/m$
**D** is electruc flux density OR electruc displacement OR electrc infuctuin $C/m2$
**epsilon** is permittivity $F/m$

**H** is magnetic field OR

$\vec D = \overline{\overline \epsilon}\vec E$ -->

## del/nabla

Del is denoted by $\nabla$, it is a vector of derivatives of each component: $\nabla = \frac{\delta}{\delta x} \hat{\imath} + \frac{\delta}{\delta y} \hat{\jmath} + \frac{\delta}{\delta z} \hat{k}$

It doesn't exist by itself, it will appear next to a vector or a multivariate function.

## curl

Curl (sometimes called rot) describes the rotation of a vector field.

Let $\vec{F} = [F_x, F_y, F_z]$, then:

$$
	\nabla \times \vec{F} =
		\begin{vmatrix}
			\hat{\imath}            & \hat{\jmath}            & \hat{k}                 \\
			\frac{\delta}{\delta x} & \frac{\delta}{\delta y} & \frac{\delta}{\delta x} \\
			F_x                     & F_y                     & F_z                     \\
		\end{vmatrix}
$$

### formulae

$$
\begin{matrix}
	\nabla \cdot  D &=& \rho_v                         \\
	\nabla \cdot  B &=& 0                            \\
	\nabla \times E &=& -\frac{\delta B}{\delta t}   \\
	\nabla \times H &=& J + \frac{\delta D}{\delta t}\\
\end{matrix}
$$

### environment of propagating EM waves
