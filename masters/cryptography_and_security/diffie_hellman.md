# Diffie-Hellman cryptography

## arithmetics

Normal:

- addition $O(\ell)$ (digit addition with carry)
- multiplication $O(\ell^2)$ (double-and-add)
- euclidean division $O(\ell^2)$
- (extended) euclid algorithm $O(\ell^2)$

Modular:

- addition $O(\ell)$
- multiplication $O(\ell^2)$
- modulo $O(\ell^2)$ (euclidean division)
- exponential $O(\ell^2\log_2{e})$
- inversion $O(\ell^2)$ (extended euclid algorithm)

## key agreement

Assume a group is generated by some $g$. This $g$ is public. Actor 1 (Alice) picks an $x$ at random and computes $X = g^x$ and sends it over to actor 2. Actor 2 (Bob) picks $y$ at random and computes $Y = g^y$ and $K = X^y$ and sends $Y$ to actor 1. Actor 1 computes $K = Y^x$. The key is therefore $K = g^{xy}$.

The security requirement is that given $(g, g^x, g^y)$ it is hard to compute $g^{xy}$. Assuming authentication the secret key can be shared over a public channel. This is a public-key cryptography.

Example Diffie-Hellman groups:

- $Z_p^*$ (compute $g^x \bmod p$) for large primes $p$
- elliptic curves

## negligible function

$f(\lambda) = negl(\lambda) \iff \forall_n f(\lambda) = O(\lambda^{-n})$ as $\lambda \to \infty$

## the discrete logarithm problem (DL problem)

If we consider the subgroup generated by $g$ of prime order $q$. $\langle g \rangle \subseteq Z_p^*$. $\langle g \rangle = \{1, g, \cdots, g^{q-1}\} \iff \{0, 1, \cdots, q-1\} = Z_q$.

Relative to **Setup** the DL problem is hard if for any PPT (probabilistic-polynomial time) algorithm $\mathcal A$ the probability of returning 1 is $negl(\lambda)$.

DL($\lambda$):

1. Setup($1^\lambda$) $\to$ (group, q, g)
2. pick $x \in Z_q$
3. $X \leftarrow g^x$
4. $x' \leftarrow \mathcal A$(group, q, g, X)
5. return $1_{X = g^{x'}}$

- Advantage of $\mathcal A$: Adv(security parameter) = $P$\[Game $\to 1$]
- Security: $\forall_{PPT, \mathcal A} Adv = negl$

### general number field sieve (GNFS)

Algorithm for a subgroup of $Z_p^*$ with $n$ and $p$ prime.

### baby-step giant-step

For $g$ and $X$ in a cyclic group $G$, $B$ is an upper bound for $|G|$

## man in the middle

A middle man could establish a key with Alice and Bob and pass around the messages.

## computational diffie-hellman (CDH)

CDH($\lambda$):

1. Setup($1^\lambda$) $\to$ (group, q, g)
2. pick $x, y \in Z_q$
3. $X \leftarrow g^x$, $Y \leftarrow g^y$
4. $K \leftarrow \mathcal A$(group, q, g, X, Y)
5. return $1_{K = g^{xy}}$

CDH is as hard as DL.

## decisional diffie-hellman (DDH)

The DDH problem relative to **Setup** is hard if for any PPT algorithm $\mathcal A$ we have $Adv_\mathcal A(\lambda) = P[DDH(\lambda, 1) \to 1] - P[DDH(\lambda, 0) \to 1] = negl(\lambda)$

DDH($\lambda, b$):

1. Setup($1^\lambda$) $\to$ (group, q, g)
2. pick $x, y, z \in Z_q$
3. if $b = 1$ then $z \leftarrow xy$
4. $X \leftarrow g^x$, $Y \leftarrow g^y$, $Z \leftarrow g^z$
5. $t \leftarrow \mathcal A$(group, q, g, X, Y, Z)
6. return $t$

## vulnerabilities

### problem when not checking group membership

Assuming Bob uses a public static key Y.

The adversary picks X of small order $q'$ and passes it to Bob. Bob computes $K = X^y$. The message ct = $Enc_{KDF(K)}(pt)$. Find $y_{q'}$ such that $Dec_{KDF(X^{y_{q'}})}(ct)$ makes sense. Deduce that $y_{q'} = y \bmod q'$

### man-in-the-middle with shared keys

Middle man trying to establish such communication that Alice and Bob are using the same key. This allows the middle man to leave at any people without breaking communication.

1. middle man can choose the common key as $X' = Y' = 1$. This leads to the key being equal to 1. Trivial case, we therefore forbid $X$ and $Y$ to be 1.
2. if the group used have order divisible by $w$ such that DL is easy in $\langle g^w \rangle$. When passing along the first $X$ we pass it as $X' = X^w$. When we receive $Y$ we pass $Y' = Y^w$ such that $X' = g^{x'w}$, $K = Y^{x'w}$. The key is then $K = g^{xyw}$. We fix this by only using groups of prime order.

### weird key distribution

The final key is random in $\langle g \rangle$ which is a small subset of $Z_p^*$. The binary representation of $K$ can be far from being uniform. So we use KDFs (key derivation functions).

## correct DF key exchange

Assume a group $\langle g \rangle$ generated by some $g$ of prime order $q$.

- Alice picks $x \in Z_q^*$ and computes $X \leftarrow g^x$
- Bob checks if $X \notin \langle g \rangle - \{1\}$, if yes then abort
- Bob picks $y \in Z_q^*$ and computes $Y \leftarrow g^y$
- Alice checks if $Y \notin \langle g \rangle - \{1\}$, if yes then abort
- Alice and Bob compute $K = KDF(X^y) = KDF(Y^x)$ through the KDF function

### RFC 2631

Official specification of the Diffie-Hellman key exchange

- group parameters $(p, q, g)$, $p$ is prime, $q$ is prime and divides $p - 1$, $g = h^\frac{p - 1}{q} \bmod p$ with $h$ random until $1 < h < p - 1$ and $g > 1$
- secret keys: $x_A$, $x_B$ between 1 and $q - 1$
- public keys: $y_A = g^{x_A} \bmod p$, $y_B = g^{x_B} \bmod p$
- 3 modes:
  - ephemeral-ephemeral: both keys are fresh
  - ephemeral-static: recipient has a static key
  - static-static: both participants use a static public key
- shared secret: $ZZ = g^{x_Ax_B} \bmod p$

#### parameter verification

- $p$ and $q$ are prime, $q$ divides $p - 1$
- $p$ and $q$ follow the parameter generation algorithm from the seed and counter
- $g^q \bmod p = 1$ and $1 < g < p$

For the public key:

- check $2 \le y \le p - 1$ and $y^q \bmod p = 1$

## non-deterministic encryption

Ciphertext space is larger than plaintext space. Encryption is probabilistic, decryption is deterministic.

## semi-static-DH public key encryption

- Bob has a secret key $y$ and a public $Y = g^y$
- Alice picks $x$ at random and computes $X = g^x$ and $K = KDF(Y^x)$
- Bob computes $K = KDF(X^y)$

## ElGamal encryption

- **Public parameters**: $(g, n)$, a group $\langle g \rangle$ of order $n$ generated by some $g$
- **Set up**: generate a random $x \in Z_n$, and compute $y = g^x$
- **Message**: an element $m \in \langle g \rangle$
- **Public key**: $pk = y$
- **Secret key**: $sk = x$
- **Encryption**: pick a random $r \in Z_n$, compute $u = g^r$, and $v = my^r$. The ciphertext is $(u, v)$
- **Decryption**: extract the $u$ and $u$ parts of the ciphertext and compute $m = vu^{-x}$

### complexities

In a subgroup of $Z_p^*$ with $p$ of length $\ell$:

- Domain parameter selection $O(\ell^4)$
- Generation $O(\ell^3)$
- Encryption $O(\ell^3)$
- Decryption $O(\ell^3)$

### EGKR (ElGamal Key Recovery Problem)

1. Setup($1^\lambda$) $\to$ (group, n, g)
2. Gen(group, n, g) $\to$ (y, x) $\qquad$ pick $x \in Z_n$, $y = g^x$
3. x' $\leftarrow \mathcal A$(group, n, g, y)
4. return $1_{x=x'}$

Equivalent to DL

### EGD (ElGamal Decryption Problem)

1. Setup($1^\lambda$) $\to$ (group, n, g)
2. Gen(group, n, g) $\to$ (y, x) $\qquad$ pick $x \in Z_n$, $y = g^x$
3. pick $pt \in \langle g \rangle$
4. Enc(y, pt) $\to$ (u, v)
5. m $\leftarrow \mathcal A$(group, n, g, y, u, v)
6. return $1_{m = pt}$

Equivalent to CDH
