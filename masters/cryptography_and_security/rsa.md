# RSA

## Euler totient function

$\varphi(n)$ is the number of coprimes to $n$.

1. $|Z^*_n| = \varphi(n)$
2. for all $x \in Z_n$ we have $x \in Z_n^* \iff gcd(x, n) = 1$
3. $Z_n$ is a field $\iff Z_n \setminus \{0\} \iff \varphi(n) = n - 1 \iff n$ is prime
4. for all $x \in Z_n^*$ we have $x^{\varphi(n)} \equiv 1 \pmod n$
5. if $e$ such that $gcd(e, \varphi(n)) = 1$ we let $d = e^{-1} \bmod \varphi(n)$. For all $y \in Z_n^*$, $y^d \bmod n$ is the only e'th root of $y$ modulo $n$

- $\varphi(p) = p - 1$ when $p$ is prime
- $\varphi(mn) = \varphi(m)\varphi(n)$ when $m$ and $n$ are coprime
- $\varphi(p^a) = (p - 1)p^{a-1}$ when $p$ is prime
- $\varphi(p_1^{a_1}, \cdots, p_r^{a_r}) = (p_1 - 1)p_1^{a_1-1} \cdot \cdots \cdot (p_r - 1)p_r^{a_r-1}$

## chinese remainder theorem (CRT)

Let $m$ and $n$ be two integers such that $gcd(m, n) = 1$. For any $a, b \in \Z$ there exists $x \in \Z$ such that

$$
x \equiv a \pmod m
$$

$$
x \equiv b \pmod n
$$

For all such solutions, $x \bmod (mn)$ is unique.

$f: Z_{mn} \to Z_m \times Z_n$ is a group isomorphism $f(x) = (x \bmod m, x \bmod n)$. Then $f^{-1}(a, b) = an(n^{-1} \bmod m) + bm(m^{-1} \bmod n) \pmod{mn}$

### equality modulo composite numbers

For any $a, b, m, n \in \Z$ such that $gcd(m, n) = 1$ then

$$
\begin{cases}
	a \equiv b \pmod m \\
	a \equiv b \pmod n \\
\end{cases} \iff a \equiv b \pmod{mn}
$$

### CRT backwards

Let $m, n$ be two integers such that $gcd(m, n) = 1$. Let $u = n(n^{-1} \bmod m)$ and $v = m(m^{-1} \bmod n)$ then $g: (a, b) \mapsto au + bv \bmod{mn}$ is a ring isomorphism.

## trial division

Given an integer we output a list of primes whose product is equal to n.

```
i = 2
x = n
for _ in 2:sqrt(n)
	while i divides x
		output i
		x = x / i
	i = i + 1

if x > 1
	output x
```

## fermat test

Utilizing the little fermat theorem. Might call something a prime that isn't a prime.

```
for _ in 1:k
	b = random(1, n)
	x = b^(n-1) mod n
	if x != 1
		return "not prime"

return "maybe prime"
```

## carmichael numbers

$n$ is a carmichael number iff it is composite and $\forall_{\{a : gcd(a, n) = 1\}} a^{n-1} \equiv 1 \pmod n$

## miller-rabin test

We can write $n - 1$ as $2^st$ for t odd. When $n$ is prime then $b^{n-1} \bmod n = ((b^t)^2\cdots)^2 \bmod n = 1$

```
if n = 2
	return "prime"

if n is even
	return "composite"

n === 2^s * t + 1

for _ in 1:k
	b = random(1, n)
	x = b^t mod n
	i = 0
	if x != 1
		while x != n - 1
			x = x^2 mod n
			i = i + 1
			if i == s or x == 1
				return "composite"

return "maybe prime"
```

An integer is prime iff it passes the miller-rabin test for all $b \in Z_n^*$. If more than a quarter of $b \in Z_n^*$ pass the miller-rabin then all $b \in Z_n^*$ do.

## prime number generation

Let $p(N)$ denote the number of prime numbers up till $N$. Then $p(N) \sim \frac{N}{\ln N}$. So the chance of a $\ell$ bit number to be prime is $\frac{1}{\ell \ln 2}$

![RSA cryptosystem](assets/rsa.png)
