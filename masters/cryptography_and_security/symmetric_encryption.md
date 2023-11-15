# symmetric encryption

## cryptographic primitive

1. components (alice, bob, key generator, encrypt, decrypt)
2. functionality (correctness)
3. security (confidentiality is preserved, perfect secrecy)

### security notions

Adversary objective: learn confidential information. Typically it is key recovery.

- **ciphertext only attack**: using ciphertexts in transit only.
- **known plaintext attack**: same + known (or guess) the corresponding plaintexts
- **chosen plaintext attack**: force the sender to encrypt some messages selected by the adversary
- **chosen ciphertext attack**: force the receiver to decrypt some messages selected by the adversary

## block ciphers

### data encryption standard (DES)

Encrypts blocks of 64 bits. Key of length 64 bits, but 8 bits are parity bits. We use key schedule to get 16 rounds of 48 bit keys from the main key. We split the plaintext block into two 32 bit parts. We apply the Feistel scheme.

Susceptible to exhaustive search due to small key. There exist keys which produce very weak ciphers.

#### Feistel scheme

$\Psi(F^{K_1}, \cdots, F^{K_k}) = \Psi^{-1}(F^{K_k}, \cdots, F^{K_1})$

- uses a function over $\{0, 1\}^{\frac{n}{2}}$ to be a function transforming into permutations over $\{0, 1\}^n$
- inverse permutations have same structure
- alternate round functions and halve swaps
- final halve swap omitted

![Feistel scheme](./assets/feistel_scheme.png)

### advanced encryption standard (AES)

Encrypts blocks of 128 bits. Uses key of length 128, 192, or 256.

- transform the block to a $4 \times 4$ matrix of bytes
- number of rounds 10, 12, or 14 depending on key length
- non-terminal round:
  - **SubBytes**: map each byte in matrix through a table
  - **ShiftRows**: shift rows by 0, 1, 2, 3 cells to the left (wrapping)
  - **MixColumns**: each column $c$ we replace with $Mc$ ($M$ defined below)
  - **AddRoundKey**: cell-wise XOR between round key
- last round skips **MixColumns**

$$
M = \begin{pmatrix}
	0x02 & 0x03 & 0x01 & 0x01 \\
	0x01 & 0x02 & 0x03 & 0x01 \\
	0x01 & 0x01 & 0x02 & 0x03 \\
	0x03 & 0x01 & 0x01 & 0x02 \\
\end{pmatrix}
$$

All operations are invertible. We however also need the inverse of $M$:

$$
M^{-1} = \begin{pmatrix}
	0x0e & 0x0b & 0x0d & 0x09 \\
	0x09 & 0x0e & 0x0b & 0x0d \\
	0x0d & 0x09 & 0x0e & 0x0b \\
	0x0b & 0x0d & 0x09 & 0x0e \\
\end{pmatrix}
$$

Arithmetics happens in $GF(2^8)$. We reduce everything modulo 2 and modulo $x^8 + x^4 + x^3 + x + 1$.

#### ECB mode

Encrypt each block of a larger plaintext independently with the same key. Can leak information on repeating blocks.

#### CBC mode

Start with an initialization vector (IV). We XOR it with first block and cipher it. Then, the result is XORed with the next block and then encrypted, this continues. So instead of just encrypting the block, we first mix the block with the cipher text from the previous block.

Three ways to handle IV:

1. use a non-secret constant IV (bad idea)
2. use secret IV which is part of the key (ok if not reused)
3. random IV that is sent in clear together with ciphertext

If a block of ciphertext is corrupted only this and the next block of plaintext is corrupted.

#### OFB mode

We encrypt IV and XOR with a block. The result of IV encryption is passed to next encryption for the next block. We must have a new IV for every plaintext. IV is a **nonce** (**n**umber used **once**).

#### CTR mode

Have a counter $t_i$ and increment for each block. We encrypt the counter and XOR with the block. $t_i$ must be a nonce but also across every block across every message. This means each block can be independently computed.

#### XTS mode

Used for hard disk encryption.

##### ciphertext stealing

Method for encrypting messages that cannot be evenly divided into blocks.

Let $x$ and $x'$ be the last two blocks where $x'$ is shorter than block length.

1. let $Enc(x) = y' || u$ where $y'$ has same length as $x'$
2. $y = Enc'(x'||u)$
3. return $y$ and $y'$

## stream ciphers

Use a PRNG to generate a key stream. We seed the PRN with a fixed secret key and a nonce. Optimized for hardware, efficient.

We can:

1. synchronize participants to a nonce (requires being stateful)
2. send the nonce in clear with ciphertext (requires nonce being visible by an adversary)

### RC4

Key length from 40 to 256 bits.

Weaknesses:

- there are some correlations between some output bytes and key bytes when the nonce is known
- output bytes are not uniformly distributed

## bruteforce inversion

### opening a safe

Asking the safe if a key is correct. By bruteforce we can find the correct key.

#### uniform distribution

Exhaustive search for all keys. Expected value of iterations is $\frac{N + 1}{2}$ for $N$ keys.

#### known distribution

Start search with the most probable keys (ordered by a permutation $\sigma$). Expected value of iterations is $\min_\sigma(\sum_{i=1}^N P[K = k_{\sigma(i)}]i)$ for a permutation (order of tested keys) $\sigma$. This expected value is called the **guesswork entropy** of the distribution.

#### unknown distribution

We choose a random permutation and start testing. Expected value of iterations is $\frac{N + 1}{2}$ for $N$ keys.

#### key recovery game (online attack)

Online because we need to directly ask an oracle if a key is correct.

Game:

1. pick $K \in_D \mathcal K$
2. $\mathcal A^{\mathcal O} \to k$
3. return $1_{K = k}$

##### with a clue

Game:

1. pick $K \in_D \mathcal K$
2. $W \leftarrow$ clue about $K$
3. $\mathcal A^{\mathcal O}(W) \to k$
4. return $1_{K = k}$

### access control

- enrolment: enter user id and password. Register user id and a clue about password.
- access control: enter user id and password. Verify using the clue.

Example clue: the hash of a password.

### offline attack

We use a stop test function to test whether the key candidate is consistent with the witness.

Offline key recovery:

1. pick $K \in_D \mathcal K$
2. $W \leftarrow F(K)$
3. $\mathcal A(W) \to k$
4. return $1_{K = k}$

Inversion:

1. pick $K \in_D \mathcal K$
2. $W \leftarrow F(K)$
3. $\mathcal A(W) \to k$
4. return $1_{F(k) = W}$

#### inversion by exhaustive search

For $F : K \to Y$ let $N = |K|$ and $M = |Y|$. Finds the pre-image (key) of some clue $w \in_U Y$. Try keys until $F(k) = w$.

$E_F(P[\text{iterations} > i]) = (1 - \frac{1}{M})^i$. Expected number of iterations is $M(1 - e^{-\frac{N}{M}})$ or just $M$ when $N \gg M$.

### metrics of attacks

- pre-computation time
- memory complexity
- time complexity
- number of online queries
- probability of success
