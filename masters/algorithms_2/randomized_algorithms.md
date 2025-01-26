# randomized algorithms

And algorithm with access to coin-flips

## min-cut

Given a graph $G = (V, E)$ find a non-trivial $S \subseteq V$ such that $|E(S, \bar S)|$ is minimized. Where $E(S, \bar S)$ is the set of edges between $S$ and $\bar S$.

### Karger's min-cut

If the graph has two vertices, output the only possibility. Otherwise,

1. select an edge $e$ uniformly at random
2. contract the vertices $\{u, v\} = e$ to construct a graph $G'$ with $|V| - 1$ vertices
3. recurse on $G'$

This returns a chosen min-cut with probability at least $\frac{1}{\binom{n}{2}}$.
It's runtime is $O(n^4 \cdot \ln n)$.

If we run the algorithm $T = c \cdot n^2 \cdot \ln n$ times and choose the best result we get a fail probability of $\frac{1}{n^c}$.

### Karger-Stain min-cut

If the graph has two vertices, output the only possibility. Otherwise,

1. for $i = n \to n - \frac{n}{\sqrt{2}}$
   1. select an edge $e$ uniformly at random and contract it
2. Let $G'$ be the new graph with contracted edges
3. recurse on $G'$ twice, and choose the better result

This returns a min-cut with probability at least $\frac{1}{2\log n}$. It's runtime is $O(n^2 \cdot \log n)$.

## polynomial identity testing (PIT)

Given polynomials $p(x)$ and $q(x)$ we want to know whether they are equal for any $x$. In other words whether $p(x) - q(x) \equiv 0$. We do not know how $p$ or $q$ looks like, we can only evaluate their values.

### Schwartz-Zippel lemma

Let $p(x_1, \cdots, x_n)$ be a non-zero polynomial of degree $d$. Let $S$ be a finite subset of $\R$ with at least $d$ elements. If $x_i \sim U(S)$ then

$$
P[p(x_1, \cdots, x_n) = 0] \le \frac{d}{|S|}
$$

## sampling

Distribution $D$, want to estimate mean of $D$. Draw independent samples from $D$ and return the empirical average. How close should we expect this average to be the real mean and how often?

### markov's inequality

Given a random variable $X \ge 0$, for all $k > 0$

$$
Pr[X \ge k] \le \frac{\mathbb E[X]}{k}
$$

or

$$
Pr[X \ge k \cdot \mathbb E[X]] \le \frac{1}{k}
$$

### chebyshev's inequality

$$
Pr[|X - \mathbb E[X]| > \epsilon] \le \frac{Var[X]}{\epsilon^2}
$$

or

$$
Pr[|X - \mathbb E[X]| > k \cdot \sigma] \le \frac{1}{k^2}
$$

where $\sigma = \sqrt{Var[X]}$

### chernoff bounds

#### bernoulli

Let $X = \sum_{i=1}^n X_i$ where $X_i$ are independent and $X_i = 1$ with probability $p_i$ and $X_i = 0$ otherwise. Let $\mu = \mathbb E[X]$ and $\delta > 0$

$$
P[X \ge (1 + \delta) \mu] \le e^{-\frac{\delta^2}{2 + \delta}\mu}
$$

$$
P[X \le (1 - \delta) \mu] \le e^{-\frac{\delta^2}{2}\mu}
$$

#### bounded

Let $X = \sum_{i=1}^n X_i$ where $X_i$ are independent such that $a \le X_i \le b$. Let $\mu = \mathbb E[X]$ and $\delta > 0$

$$
P[X \ge (1 + \delta) \mu] \le e^{-\frac{2\delta^2\mu^2}{n(b-a)^2}}
$$

$$
P[X \le (1 - \delta) \mu] \le e^{-\frac{\delta^2\mu^2}{n(b-a)^2}}
$$
