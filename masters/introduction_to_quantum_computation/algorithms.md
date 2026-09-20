# algorithms

\newcommand{\Z}[0]{\mathbf{N}}

## Deutsch-Jozsa

Given $f: \{0, 1\}^{n} \to \{0, 1\}$ distinguish between

1. $f$ is constant
2. $f$ is balanced: $|\{x: f(x) = 0\}| = |\{x: f(x) = 1\}|$

We return 1 if it is constant and 0 if it is balanced

Deterministically we can solve it with $\frac{2^n}{2} + 1$ calls into $f$.

Probabilitistically we can solve it with $t$ calls into $f$ with $P(error | constant) = 0$ and $P(error | balanced) = \frac{1}{2^{t-1}}$

## Shor's algorithm

### order finding

Let $N$ be a large integer. Let $a \in \Z_N$. Let $f: x \in \Z \mapsto a^x \pmod{N}$.

When $N$ and $a$ are coprime, $a$ is cyclic. The goal is to given such coprimes, find the order of $a$.

Choose a large integer $M$ s.t. $M = 2^m$ for some $m \ge 1$ and $M >> N^2$. Set $n = \lceil\log_2N\rceil$. All integers are represented as $n$-bit strings.
