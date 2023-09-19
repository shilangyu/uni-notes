# coordinate systems

_in 3 dimensions_

Let $P$ be a point in the given coordinate system

## rectangular

$P = (x, y, z)$

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Rectangular_coordinates.svg/1034px-Rectangular_coordinates.svg.png){style="filter: invert(1);"}

## cylindrical

$P = (\rho, \phi, z)$

![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Cylindrical_coordinates.svg/878px-Cylindrical_coordinates.svg.png){style="filter: invert(1);"}

## spherical

$P = (r, \theta, \phi)$

![](https://upload.wikimedia.org/wikipedia/commons/4/4f/3D_Spherical.svg){style="filter: invert(1);"}

## bridge between systems

- rectangular $\leftrightarrow$ cylindrical

$$
\begin{matrix}
	x &=& \rho \cos \phi \\
	y &=& \rho \sin \phi \\
	z &=& z \\
\end{matrix}
$$

- rectangular $\leftrightarrow$ spherical

$$
\begin{matrix}
	x &=& r \sin \theta \cos \phi \\
	y &=& r \sin \theta \sin \phi \\
	z &=& r \cos \theta \\
\end{matrix}
$$

- cylindrical $\leftrightarrow$ spherical

$$
\begin{matrix}
	\rho &=& r \sin \theta \\
	\phi &=& \phi \\
	z &=& r \cos \theta \\
\end{matrix}
$$
