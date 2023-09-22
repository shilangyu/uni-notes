# introduction

## probabilities

### combinatorics

- permutations $P^k_n = \frac{n!}{(n - k)!}$
- combinations $C^k_n = \binom{n}{k} = \frac{n!}{(n - k)!k!}$
- combinations with repetitions $\binom{n + k - 1}{k}$

### random variables (rv)

$S$ is the appropriate support of an rv

- independence of $X$ and $Y$, $P[X = x, Y = y] = P[X = x]P[Y = y]$
- conditional probability $P[X = x | Y = y] = \frac{P[X = x, Y = y]}{P[Y = y]}$
- total probability $P[X = x | Y = y] = \frac{P[Y = y | X = x]P[X = x]}{P[Y = y]}$
  - $P[X = x] = \sum_{y \in S} P[X = x | Y = y]P[Y = y]$
- inclusion exclusion principle $P[X = x \lor Y = y] = P[X = x] + P[Y = y] - P[X = x, Y = y]$
- expected value $E(X) = \sum_{x \in S} x P[X = x]$
  - linearity $E(c \cdot X + Y) = c \cdot E(X) + E(Y)$
  - when $X$, $Y$ independent, $E(X \cdot Y) = E(X)E(Y)$
  - $E(f(X)) = \sum_{x \in S} f(x)P[X = x]$
- variance $Var(X) = E((X - E(X))^2) = E(X^2) - E(X)^2$
  - $Var(a \cdot X + b) = a^2Var(X)$
  - when $X$, $Y$ independent, $Var(X + Y) = Var(X) + Var(Y)$

### common distributions

- Bernoulli: $S = \{0, 1\}$ for $0 \le p \le 1$ $Ber(p)$ where $P[X = 1] = p$ and $P[X = 0] = 1 - p$. $E(X) = p$, $Var(X) = p(1 - p)$
- Binomial: $S = \{0, \cdots, n\}$ for $0 \le p \le 1$ $Bin(n, p)$ where $P[X = k] = \binom{n}{k}p^k(1 - p)^{n-k}$. $E(X) = np$, $Var(X) = np(1 - p)$
- Geometric: $S = \mathbb N$ for $0 \le p \le 1$ $Geo(p)$ where $P[X = k] = (1 - p)^{k-1}p$. $E(X) = \frac{1}{p}$, $Var(X) = \frac{1 - p}{p^2}$

### indicator function

$$
1_{p(X)} = \begin{cases}
  1 & \text{if } p(X) = \text{true} \\
  0 & \text{otherwise} \\
\end{cases}
$$

$E(1_{p(X)}) = P[p(x) = \text{true}]$

## Algebra

### greatest common denominator (gcd)

For $a, b \in \mathbb Z$ and wlog assume $b \ne 0$. $d = gcd(a, b)$ is the greatest common divisor of $a$ and $b$ iff for any $c \in \mathbb Z$ that divides both $a$ and $b$ it also divides $d$.

In other words, $gcd(a, b) = \max\{k \in \mathbb Z : k \mid a \land k \mid b\}$

Properties ($a, b, c \ne 0$)

- $gcd(a, 0) = a$
- $gcd(a, 1) = 1$
- $gcd(ca, cb) = c \cdot gcd(a, b)$
- $a \mid b \iff gcd(a, b) = a$
- $gcd(a, b) \mid gcd(a, cb)$
- $gcd(a, b) = gcd(a, b + ca)$

```c
int gcd(int m, int n) {
  if (n == 0) return m;
  return gcd(n, m % n);
}
```

### congruent modulo

$a \in \mathbb Z$ is congruent to $b \in \mathbb Z$ modulo $n \in \mathbb N_+$ when $a \equiv b \pmod n \implies \exists_{k \in \mathbb Z} a = b + k \cdot n$

Linear congruence: given $a, b, n \in \mathbb Z$, $a \cdot x \equiv b \pmod n$. There isn't always a solution:

- if $gcd(a, n) = 1$ then there is exactly one solution in the set $\{0, \cdots, n-1\}:$ $x = b \cdot a^{-1} \bmod n$
- if $gcd(a, n) > 1$ and $d \nmid b$ then there is no solution
- if $gcd(a, n) > 1$ and $d \mid b$ then there are $d$ solutions in the set $\{0, \cdots, n-1\}:$ we solve the congruence $\frac{a}{d} \cdot x' \equiv \frac{b}{d} \pmod{\frac{n}{d}}$ as in the first case, and find solutions modulo $n$ as $x = x' + k \cdot \frac{n}{d}$ for $k \in \{0, \cdots, d-1\}$.

#### multiplicative inverse

$a^{-1} \bmod n$ is an integer called the multiplicative inverse of $a$ modulo $n$. It is defined as $a \cdot a^{-1} \equiv 1 \pmod n$.

#### Extended Euclidean Algorithm (EEA)

For two integers $a$ and $b$ it computes $gcd(a, b)$ and integers $u$ and $v$ such that $a \cdot u + b \cdot v = gcd(a, b)$

## algebraic structures

### groups

A group is a set $G$ together with a mapping $\odot: G \times G \to G$ such that

1. (closure) $\forall_{a, b \in G} a \odot b \in G$
2. (associativity) $\forall_{a, b, c \in G} (a \odot b) \odot c = a \odot (b \odot c)$
3. (neutral element) $\exists_{e \in G}\forall_{a \in G} a \odot e = e \odot a = a$
4. (invertibility) $\forall_{a \in G}\exists_{b \in G} a \odot b = b \odot a = e$

Example: $(\mathbb Z, +)$, $(\mathbb Q \setminus\{0\}, \times)$

Order of a group is $|G|$.

Order of an element $a \in G$ in a finite group is the smallest positive integer $d$ such that $a^d = 1$. In other words, $ord(a) = \min\{d : a^d = 1 \land d \ge 1\}$.

#### abelian groups

A group where $\odot$ is commutative, $\forall_{a, b \in G} a \odot b = b \odot a$

#### Lagrange theorem

Let $G$ be a finite group. Then $\forall_{g \in G} ord(g) \mid |G|$.

This implies $g^{|G|} = 1$ and $g^n = g^{n \bmod |G|}$ for $n \in \mathbb Z$.

#### cyclic groups and generators

If there exists an element $g$ in a finite group $G$ such that for all $h \in G$ we can write $h = g^i$ for some $i \in \mathbb Z$ then we call $G$ a cyclic group and $g$ a generator of $G$. Then $ord(g) = |G|$. All cyclic groups are Abelian.

### rings

A ring is an Abelian group $(R, +)$ together with a second mapping $\cdot: R \times R \to R$ such that $\cdot$ is a closure, associative, has a neutral element and is distributive.

A commutative ring is a ring where $\cdot$ is commutative. For instance, $(\mathbb Z, +, \times)$ is a commutative ring.

#### ideal

Given a commutative ring $(R, +, \cdot)$ we call $I \subseteq R$ and ideal of $R$ if $I$ itself is a ring with respect to the original operations and if additionally $a \cdot i \in I$ for every $a \in R$ and $i \in I$.

### fields

A field is a commutative ring $(K, +, \times)$ such that

- (commutativity of $\times$) $\forall_{a, b \in K} ab = ba$
- (invertibility of $\times$) $\forall_{a \in K \setminus \{0\}} \exists_{b = a^{-1}} ab = ba = 1$ where $0$ is the neutral element of addition

Example: $(\mathbb R, +, \times)$

### homomorphism

Given two groups $(G, \odot)$ and $(H, \boxdot)$, $f: G \to H$ is a group homomorphism if for all $g, g' \in G$ we have $f(g \odot g') = f(g) \boxdot f(g')$. If $f$ is also a bijection then $f$ is a group isomorphism.

- Example of homomorphism: the sign function for $(\mathbb Q \setminus \{0\}, \times)$ and $(\{-1, 1\}, \times)$
- Example of isomorphism: $\ln$ (natural logarithm)

## little fermat theorem

For a prime $p$ and an $a \in \mathbb Z$ such that $gcd(a, p) = 1$ we have $a^{p-1} \equiv 1 \pmod p$

### Euler theorem (generalization)

For $n \in \mathbb N_+$ and an $a \in \mathbb Z$ such that $gcd(a, n) = 1$ we have $a^{\varphi(n)} \equiv 1 \pmod n$

Where $\varphi(n)$ returns the amount of coprimes to $n$ smaller than $n$.

$$
  \varphi(n) = \begin{cases}
    p^{\alpha - 1}(p - 1) & \text{ if } n = p^\alpha \text{ with p prime and }\alpha \ge 1 \\
    \prod_{i = 1}^r \varphi(p_i^{\alpha_i}) & \text{ for } n = \prod_{i = 1}^r p_i^{\alpha_i} \text{ with } p_1, \cdots, p_r \text{ pairwise different primes} \\
  \end{cases}
$$
