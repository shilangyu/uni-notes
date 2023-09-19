# counting

## binomial expansion

$(x + y)^n = \sum_{k=0}^n \binom{n}{k}x^ky^{n-k}$

## k-permutations of n-element set

$n^{\underline k} = \binom{n}{k}k! = \frac{n!}{(n - k)!}$

## Stirling number

Let $N$ be a set and have partitions denoted by $A_i$ ($i \le k$).

$\Pi(N)$ is the family of all such partitions of $N$

The Stirling number $S_{n,k} = {n \brace k}$ is the number of all k-partitions of an $n$-set

- $|\text{surj}(N, R)| = |R|! \cdot S_{|N|,|R|}$
- $S_{n,k} = S_{n-1,k-1} + k \cdot S_{n-1, k}$

## Bell number

$B_n = \sum_k S_{n,k}$

## number partition

$n = \lambda_1 + \lambda_2 + \cdots + \lambda_k$ where $\lambda_1 \ge \lambda_2 \ge \cdots \ge \lambda_k \ge 1$, $\lambda_i \in \mathbf{N}$

- $P(n, k)$ - set of all solutions of the above conditions
- $p_{n,k} = |P(n, k)| = p_{n-k, \le k} = p_{n-1,k-1} + p_{n-k,k}$
- $P(n) = \bigcup_{k=1}^n P(n, k)$

## ordered number partition

$n = \lambda_1 + \lambda_2 + \cdots + \lambda_k$ where $\lambda_1 \ge 1, \cdots, \lambda_k \ge 1$, $\lambda_i \in \mathbf{N}$

- $p_{n, k} = \binom{n-1}{k-1}$
