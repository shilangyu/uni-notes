# elliptic curves

## galois fields

Finite fields. Denoted by $GF(p^k)$, the set of all polynomials in $Z_p[x]$ of degree at most $k-1$. Addition is modulo $p$. Multiplication reduced modulo $P(x)$. $P(x)$ is a monic irreducible polynomial of degree $k$ in $Z_p[x]$.

Properties:

- the cardinality of any finite field is a prime power $p^k$
- for any prime power $p^k$ there exists a finite field of cardinality $p^k$, $p$ is called the characteristic of the field
- two finite fields of same cardinality is isomorphic. We denote $GF(p^k)$ as Galois field of cardinality $p^k$
- $GF(p^k)$ is isomorphic to a subfield of $GF(p^{k \cdot \ell})$
- $GF(p^k)$ can be defined as the quotient of ring of polynomial with coefficients in $Z_p$ by a principal ideal spanned by an irreducible polynomial of degree $k$: $Z_p[x] / (P(x))$

Properties of $GF(2^k)$:

- $1 + 1 = 0$
- $-a = a$
- $(a + b)^2 = a^2 + b^2$
- $2^i$ is linear
- for $k > 1$, $a^{2^{k-1}}$ is the unique square root of $a$
- trace function - $Tr(a) = a + a^2 + a^{2^2} + \cdots + a^{2^{k-1}}$
  - it is linear $Tr(a + b) = Tr(a) + Tr(b)$
  - $Tr(a^2) = Tr(a)$

## elliptic curves

$$
E_{a,b} = \{\mathcal O\} \cup \{(x, y) : y^2 = x^3 + ax + b\}
$$

For an elliptic curve to be non-singular, we have to fulfill $4a^3 + 27b^2 \ne 0$. $\lambda = \frac{y_Q - y_P}{x_Q - x_P}$ is the chord slope. $\lambda = \frac{3x_P^2 + a}{2y_P}$ is the tangent slope.

### group structure

Let $P = (x_P, y_P)$, $Q = (x_Q, y_Q)$, and $R = (x_R, y_R)$

- $-P = (x_P, -y_P)$, $-\mathcal O = \mathcal O$
- if $P = -Q$ then $P + Q = \mathcal O$
- $P + Q = R$:

  $$
  \begin{aligned}
  	\lambda &= \begin{cases}
  		\frac{y_Q - y_P}{x_Q - x_P} & \text{ if } x_P = x_Q \\
  		\frac{3x_P^2 + a}{2y_P} & \text{ if } x_P \ne x_Q \\
  	\end{cases} \\
  	x_R &= \lambda^2 - x_P - x_Q \\
  	x_Y &= (x_P - x_R)\lambda - y_P \\
  \end{aligned}
  $$

- $\mathcal O$ is the neutral element in the group for addition

$E_{a, b}(K)$ is an abelian group of an elliptic curve over a field $x, y \in K$. The characteristic should be larger than 3.

### points of order 2

If a point $P = (x, y)$ is of order 2, then $P + P = 0$, then $P = -P$ so $y = 0$. So $P$ is the solution of $x^3 + ax + b = 0$. As there are at most three solutions, there are at most 3 elements of order 2 in $E_{a,b}$. If $E_{a,b}$ is cyclic then there can be only one or zero elements of order 2.
