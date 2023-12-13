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
