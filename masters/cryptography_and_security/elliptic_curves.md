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
E_{a,b} = \{\mathcal O\} \cup \{(x, y) \in K^2 : y^2 = x^3 + ax + b\}
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
  		\frac{y_Q - y_P}{x_Q - x_P} & \text{ if } x_P \ne x_Q \\
  		\frac{3x_P^2 + a}{2y_P} & \text{ if } x_P = x_Q \\
  	\end{cases} \\
  	x_R &= \lambda^2 - x_P - x_Q \\
  	x_Y &= (x_P - x_R)\lambda - y_P \\
  \end{aligned}
  $$

- $\mathcal O$ is the neutral element in the group for addition

$E_{a, b}(K)$ is an abelian group of an elliptic curve over a field $x, y \in K$. The characteristic should be larger than 3.

### points of order 2

If a point $P = (x, y)$ is of order 2, then $P + P = 0$, then $P = -P$ so $y = 0$. So $P$ is the solution of $x^3 + ax + b = 0$. As there are at most three solutions, there are at most 3 elements of order 2 in $E_{a,b}$. If $E_{a,b}$ is cyclic then there can be only one or zero elements of order 2.

## over $Z_p$ for $p > 3$

Same as before, but the discriminant is now $\Delta = -16(4a^3 + 27b^2) \ne 0$

$E_{a,b} \simeq  E_{u^4a,u^6b}$ by $(x, y) \mapsto (u^2x, u^3y)$.

### twist

$E_{a,b}$ and $E_{v^2a,v^3b}$ are twist of each other if $u^2 = x$ has no solution (ie $u$ is not a square). They can become isomorphic in the extension field $K[\theta]/(\theta^2 - v)$, because $v = \theta^2$ becomes a square.

### Hasse theorem

$q+1-2\sqrt{q} \le |E_{a,b}| \le q+1+2\sqrt{q}$ where $q$ is the cardinality of $K$.

### j-invariant

$j = 1728 \frac{4a^3}{4a^3 + 27b^2}$. Isomorphic groups have always the same $j$. Alternatively, if $\frac{a^3}{b^2}$ are equal, then the curves are isomorphic.

## over $Z_2$

$$
E_{a_2,a_6} = \{\mathcal O\} \cup \{(x, y) \in K^2: y^2 + xy = x^3 + a_2x^2 + a_6\}
$$

Discriminant $\Delta = a_6 \ne 0$

Let $P = (x_P, y_P)$, $Q = (x_Q, y_Q)$, and $R = (x_R, y_R)$

- $-P = (x_P, x_P + y_P)$, $-\mathcal O = \mathcal O$
- if $P = -Q$ then $P + Q = \mathcal O$
- $P + Q = R$:

  $$
  \begin{aligned}
  	\lambda &= \begin{cases}
  		\frac{y_Q + y_P}{x_Q + x_P} & \text{ if } x_P \ne x_Q \\
  		\frac{x_P^2 + y_P}{x_P} & \text{ if } x_P = x_Q \\
  	\end{cases} \\
  	x_R &= \lambda^2 + \lambda + a_2 + x_P + x_Q \\
  	x_Y &= (x_P + x_R)\lambda + y_P + x_R\\
  \end{aligned}
  $$

- $\mathcal O$ is the neutral element in the group for addition

$E_{a_2,a_6} \simeq  E_{a_2+u^2 + y, a_6}$ by $(x, y) \mapsto (x, ux + y)$.

j-invariant: $1 \over \Delta$

## ECM (elliptic-curve factorization method)

The Pollard's $p-1$ factorization method can be used on elliptic curves

## point compression

For a prime field case, a single $x$ leads to two possible $y$ values. Given $x$ and the parity of $y$ we have a point (which is cheaper than storing both and $x$ and $y$).

## domain parameters

- a field either a prime $p$ or a power $q$ of 2 together with an irreducible polynomial over GF(2) of degree $\log_2q$
- coefficients defining the elliptic curve E
- a point $G$ on E
- the order $n$ of $G$ on $E$
- for pseudorandom curves a seed $s$ for generating the j-invariant

## elliptic curve cryptography

### ECDH (elliptic curve diffie hellman)

1. Alice (U) and Bob (V) agree on domain parameters $T = (p, a, b, G, n, h)$ or $T = (m, f(x), a, b, G, n, h)$ where $f(x)$ is an irreducible polynomial over $GF(2^m)$. $h$ is the cofactor $\frac{1}{n} \#E(GF(q))$ for $q = p$ or $q = 2^m$
2. $U$ and $V$ select their secret key $d_U \in Z_n^*$ and $d_V \in Z_n^*$ and compute their public keys $Q_U = d_U \cdot G$, $Q_V = d_V \cdot G$
3. exchange public keys
4. both check if $Q \in E(GF(p))$, $Q \ne \mathcal O$, $nQ = \mathcal O$
5. both compute $P = d_VQ_U = d_UQ_V$
6. set $z = P_x$, use KDF to derive $K$

If $n$ is prime and is coprime with $h$ then $\langle G \rangle = \{Q \in \text{group} : nQ = \mathcal O\}$

## pairing of elliptic curves

For some pairs of elliptic curves $G_1$ and $G_2$ we can construct a function $e: G_1 \times G_2 \to G_T$ which maps a pair to a group with multiplicative notation such that

- $e$ is **bilinear**: $e(aP, bQ) = e(P, Q)^{ab}$, $e(P + P', Q) = e(P, Q)e(P', Q)$, $e(P, Q + Q') = e(P, Q)e(P, Q')$
- $e$ is **non-degenerate**: $e(P, Q) \ne 1$

### types

- type-1 pairing: $G_1 = G_2$
- type-2 pairing: $G_1 \ne G_2$ and there exists an efficiently computable homomorphism from $G_2$ to $G_1$
- type-3 pairing: $G_1 \ne G_2$ and there exists no efficiently computable homomorphism from $G_2$ to $G_1$
- type-4 pairing: same as type-2 with efficient hashing into $G_2$

### three party DH

Let $G$ generate a subgroup of order $p$ of $G_1 = G_2$ such that $e(G, G) \ne 1$

- Alice picks $a \in Z_p^*$ and broadcasts $A = aG$
- Bob picks $b \in Z_p^*$ and broadcasts $B = bG$
- Charlie picks $c \in Z_p^*$ and broadcasts $C = cG$
- everyone computes $e(B, C)^a = e(A, C)^b = e(A, B)^c = e(G, G)^{abc} = K$
