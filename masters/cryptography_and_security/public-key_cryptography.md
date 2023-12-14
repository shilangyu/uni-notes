# public-key cryptography

Gen $\to (sk, pk)$, $\text{Dec}_{\text{sk}}(\text{Enc}_{\text{pk}}(X)) = X$

- key exchange/key agreement: exchange of data used to derive a common key with no prior secrets
- key transfer: one participant chooses a key and sends it to the other participant

## ephemeral Diffie-Hellman

Erase $x$ and $y$ after $K$ is derived. Erase $K$ after the communication is over. This provides **forward secrecy**.

## problems with plain RSA

- messages are not elements of $\Z_N$
- encryption has homomorphic properties (Enc(ab) = Enc(a)Enc(b))
- susceptible to side channel attacks

## signatures

Similar to MAC where we want to authenticate a message. However, instead we use a public key for verification rather than a private symmetric one like in MAC.

### DSA

- public parameters (p, q, g): pick random prime of 160 bits q, a prime $p = aq + 1$, $h$ of $\Z_p^*$ raised to the power of $a$, $g = h^a \bmod p$ such that $g \ne 1$.
- pick secret $x \in \Z_q$ and compute public $y = g^x \bmod p$
- to sign, pick $k \in \Z_q^*$ and compute $r = (g^k \bmod p) \bmod q$ and $s = \frac{H(M) + xr}{k} \bmod q$. The signature is $\sigma = (r, s)$
- verification: $r \stackrel{?}{=} (g^{\frac{H(M)}{s} \bmod q}y^{\frac{r}{s} \bmod q}\bmod p) \bmod q$

### ECDSA

Like DSA, but over elliptic curves.

## IND-CPA security

A PKC (public key cryptosystem) is secure under chosen plaintext attacks and indistinguishability with advantage $Adv = P[\Gamma_1 \text{ returns } 1] - P[\Gamma_0 \text{ returns } 1]$

Game $\Gamma_b$:

1. Gen $\stackrel{\$}{\to} (pk, sk)$
2. $\mathcal A_1(pk) \to (pt_0, pt_1, st)$
3. if $|pt_0| \ne |pt_1|$ then return 0
4. Enc($pt_b$) $\stackrel{\$}{\to} ct$
5. $\mathcal A_2(st, ct) \to z$
6. return z

## IND-CCA security

$Adv = P[\Gamma_1 \text{ returns } 1] - P[\Gamma_0 \text{ returns } 1]$

Game $\Gamma_b$:

1. Gen $\stackrel{\$}{\to} (pk, sk)$
2. $\mathcal A_1^{ODec_1}(pk) \to (pt_0, pt_1, st)$
3. if $|pt_0| \ne |pt_1|$ then return 0
4. Enc($pt_b$) $\stackrel{\$}{\to} ct^*$
5. $\mathcal A_2^{ODec_2}(st, ct^*) \to z$
6. return z

ODec$_1$(ct):

1. return Dec(sk, st)

ODec$_2$(ct):

1. if $ct = ct^*$ then return $\bot$
2. return Dec(sk, st)

## EF-CMA security

Adv = P[Game returns 1]

Game:

1. Gen $\stackrel{\$}{\to} (pk, sk)$
2. Queries $\leftarrow \emptyset$
3. $\mathcal A^{OSig}(pk) \to (X, \sigma)$
4. if $X \in$ Queries then return 0
5. return $1_{Ver(pk, X, \sigma)}$

OSig(X):

1. $\sigma \leftarrow$ Sig(sk, X)
2. Queries $\leftarrow$ Queries $\cup$ {X}
3. return $\sigma$
