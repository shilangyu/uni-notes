# random graphs

## Erdos-Renyi (ER) random graph

$G(n, p)$ - $n$ number of vertices, $p$ probability of there being an edge between two vertices

- #edges ~ Binom($\binom{n}{2}, p$)
- degree ~ Binom($n-1, p$), not independent, expected number $p(n-1)$
- $P[G = G(n, p)] = p^3(1 - p)^{\binom{n}{2} - 3}$

**Thm**: almost all $G(n, p)$ are connected for a fixed $p$. $P[G(n, p) \text{ connected}] \stackrel{n\to\infty}{\longrightarrow} 1$

**Proof**:

Let $V = S \cup \bar S$ be a vertex partition such that $s = |S| \le \frac{n}{2}$ and $n-s = |\bar S| > \frac{n}{2}$.

$$
\begin{aligned}
	P[\text{no edge }S \leftrightarrow \bar S] &= (1 - p)^{s(n-s)} \\
	P[G(n, p) \text{ disconnected}] &\le \sum_{\text{all possible } (s, \bar s)} P[\text{no edge } s \leftrightarrow \bar s] \\
		&= \sum_{s=1}^{\frac{n}{2}} \binom{n}{s} (1-p)^{s(n-s)} \\
		&< \sum_{s=1}^{\frac{n}{2}} (n(1-p)^{\frac{n}{2}})^s \\
		&< \sum_{s=1}^{\infty} x^s = \frac{x}{1-x} \to 0~\square\\
\end{aligned}
$$

Note that $\binom{n}{s} < n^s$ and $(1 - p)^{n-s} \le (1 - p)^{\frac{n}{2}}$

### first moment method

$E[X_n] \to 0 \implies P[X_n = 0] \to 1$

### second moment method

$E[X_n] > 0 \land \frac{Var[X_n]}{E[X_n]^2} \to 0 \implies X_n > 0$

**Thm**: Almost every $G(n, p)$ has diameter 2

**Proof**:

let $X =$ #pairs(u, v) without common neighbors, $X_{u, v} = 1_{u, v \text{ have no common neighbor}}$

$P[X_{u,v}] = (1 - p^2)^{n-2}$

$E[X] = E[\sum_{u,v}X_{u,v}] = \sum_{u,v}E[X_{u,v}] = \binom{n}{2}(1 - p^2)^{n-2} \to 0$

---

No more notes will appear. I dropped the course due to lack of interest in the covered topics.
