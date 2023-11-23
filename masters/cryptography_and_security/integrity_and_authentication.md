# integrity and authentication

## commitment scheme

When we want to ensure two actors make a decision before seeing the decision of the other actor. Done through commits, where one actor sends a commitment which stores the encrypted decision to the other actor. Then the second actor sends back their decision. Finally, the first actor sends the key for decrypting the commitment to see the decision.

**security:**

1. hiding: no information about the decision can be inferred from the commitment
2. biding: cannot produce a commitment c such that Open(c, k) $\ne$ Open(c, k')

## pseudorandom number generator (PRNG)

**security**: indistinguishable from truly random.

## pseudorandom function (PRF)

**security**: indistinguishable from truly random function (black-box).

PRF is $(q, t, \varepsilon)$-secure if for all bounded $\mathcal A$ $Adv(\mathcal A) = P[b' = 1 | b = 1] - P[b' = 1 | b = 0]$ is negligible. Where $q$ is the amount of queries done with complexity $t$.

## key derivation function (KDF)

**security**: one-way

## hash functions

There is no key that allows to reverse a hash.

- collision resistance
- one-way
- pseudo-randomness

| algorithm | digest             | comment |
| --------- | ------------------ | ------- |
| MD5       | 128                | broken  |
| SHA-1     | 160                | broken  |
| SHA-2     | 224, 265, 384, 512 |         |
| SHA-3     | 224, 265, 384, 512 |         |

### attacks

1. collision attack: find x and x' such that $x \ne x'$ and $h(x) = h(x')$
2. 1st pre-image attack: given y find x such that $y = h(x)$
3. 2nd pre-image attack: given x find x' such that $x \ne x'$ and $h(x) = h(x')$

### encryption to hashing (merkle-damgard scheme)

Treat the message as keys into some encryption function. Encrypt blocks with some seed value. Xor results of individual blocks. Pad the message if needed.

If the encryption function is collision resistant then the resulting hash function is collision resistant.

#### merkle-damgard extension

For padding messages. pad = $|1|0\cdots 0 |\textit{length}|$ where _length_ is a 64-bit number.
