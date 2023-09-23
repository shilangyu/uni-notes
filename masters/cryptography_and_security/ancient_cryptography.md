# ancient cryptography

Used for privacy of communication (confidentiality).

## Cryptography vs

**vs security**

- cryptography: a toolbox for settings up security infra
- security experts assume cryptography does a good job
- cryptography tools are pretty good, but not for everything some can easily be misused
- proper usage of cryptography still requires to master it

**vs coding theory**

- no notion of confidentiality in coding theory
- coding theory is about sending information in a reliable and efficient way (dummy adversary)
- cryptography is the science of secret codes (malicious adversary)

**vs cryptanalysis**

- cryptographic analysis, theory of security analysis of cryptographic systems
- to cryptanalyze a cryptosystem is to prove or to disprove the security provided by a cryptosystem
- to break a cryptosystem is to prove its insecurity

## main problem

For a message X

- confidentiality (C) - only the legitimate receiver can get X
- authentication + integrity (A + I) - only the legitimate sender can insert X and the received message must be equal to X

## symmetric encryption

Key is the same for the sender and receiver. The keys have to be confidentially shared. A message authentication code is used to ensure authentication and integrity.

**Problem:** we must establish a symmetric key. Key agreement protocol.

## public key crypto system

Public key is shared with A + I from receiver to sender. Only receiver can decrypt.

**Problem:** we must authenticate the public key.

## simple substitutions

### caesar cipher

Offset the alphabet by some amount

### random substitution

Rather than offsetting the alphabet by a fixed amount, permute the whole alphabet. This gives $|\Sigma|!$ permutations. This is still susceptible to statistical attacks (for example in english some letters are more common than others).

### Viginère cipher

Establish a key. Slide it over the text to encode and "add" letters. This is essentially addition modulo $|\Sigma|$. Group $\mathbb Z_{|\Sigma|}$. Now both the key length and key content has to be found to decipher.

Example: $\text{f} + \text{c} = \text{h}$ or $\text{x} + \text{d} = \text{a}$

#### Kasiski test

Explore repeated n-grams and check likeliness of them occurring.

Say in a string ($x_1x_2 \cdots x_{313}$) of 313 characters where $|\Sigma| = 26$ the same trigram appears 5 times. The string has $n = 311$ trigrams. Let $t_i = x_ix_{i+1}x_{i+2}$. The number of occurrences of some trigram $n_{abc} = \sum_{i = 1}^n 1_{t_i = abc}$.

Let $t_i$ be independent and uniformly distributed. There are $\frac{1}{p} = 26^3 = 17576$ possibilities. $P[n_{abc} = t] = \binom{n}{t} p^t (1 - p)^{n-t}$. By approximation with Poisson distribution we get $P[n_{abc} \ge 5] \approx 2.42 \cdot 10^{-7}$. Which is very unlikely for a random string. This can be used to conclude that the string isn't exactly random.

The position of appearance of repeating n-grams can tell us about the length of the key. The $gcd$ of positions is a good indicator.

#### index of coincidence

$$
\begin{aligned}
	\text{Index}(x_1, \cdots, x_n) &= P_{I, J}[x_I = x_J | I \ne J] \\
																 &= \frac{1}{n(n - 1)} \sum_{1 \le i, j \le n, i \ne j} 1_{x_i = x_j} \\
																 &= \sum_{c \in Z} \frac{n_c(n_c - 1)}{n(n - 1)} \\
\end{aligned}
$$

where $I, J \in \{1, \cdots, n\}$ are independent and uniformly distributed.

The index of coincidence is invariant over substitution and transposition

$$
\text{Index}(x_1, \cdots, x_n) = \text{Index}(\sigma(x_1), \cdots, \sigma(x_n)) = \text{Index}(x_{\rho(1)}, \cdots, x_{\rho(n)})
$$

For some permutation $\sigma$ over $Z$ and permutation $\rho$ of $\{1, \cdots, n\}$

##### expected value

$$
\begin{aligned}
	E(\text{Index}(x_1, \cdots, x_n)) &= \frac{1}{n(n - 1)} \sum_{1 \le i, j \le n, i \ne j} P[x_i = x_j]
	&= \sum_{c \in Z} f_c^2
\end{aligned}
$$

if all $x_i$ have iid distribution with frequency table $f_c$. For a random string over a 26 letter alphabet the value tends to $0.038$, while for english it tends to $0.065$. This fact can be used to detect the correctness of our chosen key length.

## enigma

Electro-mechanical encryption device. The description of the machine was public. First computers where constructed to break the enigma machine.

Given a permutation $\sigma$ over $Z = \{A, B, \cdots, Z\}$

- a fixed point is an element $x \in Z$ such that $\sigma(x) = x$.
- an involution is a permutation $\sigma$ such that $\sigma(\sigma(x)) = x$ for all $x$
- a rotor $\sigma$ defines a set of permutations $\sigma_0, \cdots, \sigma_{25}$ over $Z$ the rotor in position $i$ implements permutation $\sigma_i$ such that $\sigma_i = \rho^i \circ \sigma \circ \rho^{-i}$ where $\rho(A) = B, \rho(B) = C, \cdots \rho(Z) = A$

### mathematic definition of cipher

The secret key consists of:

- $\sigma$ (involution made of 6 pairs)
- an ordered choice $\alpha, \beta, \gamma \in S$ of pairwise different permutations (from a box of 5 rotors)
- a number $a$ (initial position of rotors)

The encryption of a character is then as follows:

$$
y_i = \sigma^{-1} \circ \alpha^{-1}_{i_1} \circ \beta^{-1}_{i_2} \circ \gamma^{-1}_{i_3} \circ \pi \circ \gamma_{i_3} \circ \beta_{i_2} \circ \alpha_{i_1} \circ \sigma(x_i)
$$

where $i_3i_2i_1$ are the last three digits of the basis 26 numeration of $i + a$.

The entropy of enigma is 57 bits.

## modern cryptography laws

1. (Kerckhoffs principle) security should not rely on the secrecy of the cryptosystem itself _or_ security should rely on the secrecy of the key only. Does **not** mean that the cryptosystem has to be public.
2. (scalability - $n^2$ problem) in a network of $n$ users, there is a number of potential pairs of users within the order of magnitude of $n^2$. We cannot assume that every pair of users share a secret key. We must find a way for any pair of users to establish a shared secret key.
3. (Moore law) the speed of CPUs doubles every 2 years. We need to assess how long a system can remain secure, estimate the CPU time to break our system against brute force attacks.

## information theory

### Vernam cipher

- we use a uniformly distributed random key $K$ (a bitstring)
- every message $X$ requires a new $K$ of the same size as the message (one-time pad)
- to encrypt: $Y = X \oplus K$
- to decrypt: $X = Y \oplus K$
