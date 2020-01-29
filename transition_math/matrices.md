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
	\vdots  & \vdots  & \ddots & \vdots\\
	0 & 0 & \cdots & 1\\
\end{pmatrix}
$$

$A \cdot I = A$

#### properties

- $(A \cdot B) \cdot C = A \cdot (B \cdot C )$
- $A \cdot I_{m \times m} = I_{k \times k} \cdot A = A$
- $(A + A_1 ) \cdot B = A \cdot B + A_1 \cdot B$
- $A \cdot (B + B_1 ) = A \cdot B + A \cdot B_1$

### transposition

Flipping rows and columns $(\forall i, j) A^T(i, j) = A(j, i)$. Transposition over addition and multiplication is defined as such: $(A + B)^T = A^T + B^T$ and $(A \cdot B)^T = B^T \cdot A^T$

### elementary operations

All of them are invertible

#### row/column switching

$i$-th row/column and $j$-th row/column are interchanged: $(R_i \leftrightarrow R_j)$/$(C_i \leftrightarrow C_j)$

#### row/column scaling

Each element in $i$-th row/column is multiplied by a nonzero scalar $k \in \mathbf{K}$ $(kR_i \rightarrow R_i)$/$(kC_i \rightarrow C_i)$

#### row/column addition

$i$-th row/column is replaced by as sum of $i$-th row/column and a multiple of $j$-th row/column $(R_i + k \cdot R_j \rightarrow R_i)$/$(C_i + k \cdot C_j \rightarrow C_i)$

### row equivalence

We say that matrices $A$ and $B$ of the same sizes are row equivalent if one can be obtained from the other using elementary row operations. $A \sim B$

### row echolon form

We say that a matrix $A$ is ain _row echolon form_ if

- all zero rows are at the bottom
- the first nonzero number in the $i$-th row is to the right from the first nonzero coefficient in the row above it

Example:

$$
A =
\begin{pmatrix}
	2 & 1 & 0  & 3 \\
	0 & 6 & 12 & 12\\
	0 & 0 & 2  & 1 \\
	0 & 0 & 0  & 0 \\
\end{pmatrix}
$$

The nonzero rows of a row-echelon matrix are linearly independent.

### row canonical

It is a row echolon plus:

- the first nonzero entry in every nonzero row is $1$
- the first nonzero entry in every nonzero row is the only nonzero entry in its column

### rank

The rank of a matrix $A$ is the dimension of the space spanned by rows of $A$. The equivalent for columns is called the **column rank**.

For every $A$ column_rank($A$) = rank($A$)

$A \sim B$, $B$ is row echolon then: rank($A$) = the number of nonzero rows in $B$

### Rouché–Capelli law

$AX = B$ has solution iff $rank(A) = rank([A|B])$

### determinant

Works only for square matrices

$$
A =
\begin{pmatrix}
	a_{1,1} & a_{1,2} & a_{1,3} \\
	a_{2,1} & a_{2,2} & a_{2,3} \\
	a_{3,1} & a_{3,2} & a_{3,3} \\
\end{pmatrix}
$$

$\det(A) = a_{1,1} \cdot a_{2,2} \cdot a_{3,3} + a_{1,2} \cdot a_{2,3} \cdot a_{3,1} + a_{1,3} \cdot a_{2,1} \cdot a_{3,2} - a_{1,3} \cdot a_{2,2} \cdot a_{3,1} - a_{1,2} \cdot a_{2,1} \cdot a_{3,3} - a_{1,1} \cdot a_{2,3} \cdot a_{3,2}$

#### Laplace expansion

For any $j \in \{1, \cdots, n\}$

$\det(A) = \sum_{i=1}^n (-1) ^{i+j} \cdot \det(A_{ij})$

#### properties

- $\det(A) = \det(A^T)$
- $\det(A) = 0$ if $A$ has a zero row/column or two identical rows\columns
- $\det(A) = 0$ iff $rank(A) < n$
- $\det(A) = -\det(B)$ if $B$ is obtained from $A$ by single row switching $R_i \leftrightarrow R_j$
- $\det(A) = \det(B)$ if $B$ is obtained from $A$ by single row addition $R_i + k \cdot R_j \rightarrow R_i$
- $k \cdot \det(A) = \det(B)$ if $B$ is obtained from $A$ by the row scaling $kR_i \rightarrow R_i$
- $\det(I_{n \times n}) = 1$
- $\det(A \cdot B) = \det(A) \cdot \det(B)$

#### linear equations

If $AX = B$ is a system of $n$ linear equations with $n$ unknowns then
$AX = B$ has a unique solution iff $\det(A) \ne 0$. Therefore $\det(A) = 0$ means we either have no or more than one solution.

##### Cramer's rule

Let $A_{|i}$ denote a matrix obtained from $A$ by replacing its $i$-th column with the column $B$. If $\det(A) \ne 0$ then: $x_n = \frac{\det(A_{|n})}{\det(A)}$

### inversion

$AX = I$, then $M = A^{-1}$

Passing through $[A|I]$ to $[I|B]$ with elementary operations will yield a $B = A^{-1}$

### eigenvalue and eigenvector

For $A_{n \times n}$ and $\lambda$, $\lambda$ is called eigenvalue of $A$ if either holds:

- there is a non-zero vector $v$ such that $Av = \lambda v$
- $\det(A - \lambda I) = 0$ same as $(A - \lambda I)v = \mathbf{0}$

$v$ is an eigenvector. There are at most $n$ different eigenvalue for a given matrix.

An eigenvalue of $A$ is also an eigenvalue of $A^T$

### similar

We say that $A_{n \times n}$ is similar to $B_{n \times n}$ iff $(\exists P)(A = P^{-1}BP)$

### diagonal

$A$ is diagonal iff $(\forall 1 \le i, j \le n)(i \ne j \implies A(i, j) = 0)$
