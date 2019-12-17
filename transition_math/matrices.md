# matrices

A $m \times n$ matrix has $m$ rows and $n$ columns, therefore the size is $m by n$. A matrix is a rectangular table of elements $a_{i,j} \in \mathbb{K}$ for $i = 1, \cdots, m$ and $j = 1, \cdots, n$. Matrices like sets are denoted by a capital letter and elements as a lowercase letter. The set of matrices of size $m \times n$ over $\mathbb{K}$ is denoted by $\mathbb{K}^n_m$

$$
A =
\begin{pmatrix}
	a_{1,1} & a_{1,2} & \cdots & a_{1,n}\\
	a_{2,1} & a_{2,2} & \cdots & a_{2,n}\\
	\vdots  & \vdots  & \ddots & \vdots \\
	a_{m,1} & a_{m,2} & \cdots & a_{m,n}\\
\end{pmatrix}
$$

You can scale and add matrices (only if the sizes are equal).

### matrix multiplication

$M(\phi) \cdot M(\psi) = M(\phi \circ \psi)$ also $M^n_m \times M^k_n \to M^k_m$ [visual](http://matrixmultiplication.xyz/)\
Let $A$ be a $k \times m$-matrix and $B$ be a $m \times n$-matrix. The product
$A \cdot B$ of the matrices $A$, $B$ is the $k \times n$-matrix $C = (c_{i,j})$ whose entries are defined by $c_{i,j} = a_{i,1}b_{1,j} + a_{i,2}b_{2,j} + \cdots + a_{i,m}b_{m,j}$ for $i = 1, \cdots, k$ and $j = 1, \cdots, n$.

#### identity matrix

The identity for multiplication for $M^n_n$ is:

$$
I =
\begin{pmatrix}
	1 & 0 & \cdots & 0\\
	0 & 1 & \cdots & 0\\
	\vdots  & \vdots  & \ddots & \vdots \\
	0 & 0 & \cdots & 1\\
\end{pmatrix}
$$

$A \cdot I = A$

#### properties

$$
	(A \cdot B) \cdot C = A \cdot (B \cdot C )\\
	A \cdot I_{m \times m} = I_{k \times k} \cdot A = A\\
	(A + A_1 ) \cdot B = A \cdot B + A_1 \cdot B\\
	A \cdot (B + B_1 ) = A \cdot B + A \cdot B_1
$$

### transposition

Flipping rows and columns $(\forall i, j) A^T(i, j) = A(j, i)$. Transposition over addition and multiplication is defined as such: $(A + B)^T = A^T + B^T$ and $(A \cdot B)^T = B^T \cdot A^T$
