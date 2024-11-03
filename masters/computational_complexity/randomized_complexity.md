# randomized complexity

A probabilistic TM has the ability to toss a fair coin: a config has two successor configs, each taken with probability $\frac{1}{2}$.

Then $M(x)$ is a random variable, where $Pr[M(x) = 1]$ is a fraction of the accepting leaves.

An NTM is like a PTM where the probability of accepting is non-zero.

## bounded-error probabilistic time class

$L \in \mathsf{BPTIME}(t(n))$ iff there exists a PTM $M$ with runtime $O(t(n))$ such that for all $x$, $Pr[M(x) = L(x)] \ge \frac{2}{3}$

$$
\mathsf{BPP} = \bigcup_{k \in \N} \mathsf{BPTIME}(n^k)
$$

- $\mathsf{P} \subseteq \mathsf{BPP}$ (believed to be equal)
- $\mathsf{BPP} \stackrel{?}{\subseteq} \mathsf{NP}$ (believed to be true)
- $\mathsf{BPP} \subseteq \Sigma_2 \mathsf P \cap \Pi_2 \mathsf P$
- $\mathsf{BPP} \subseteq \mathsf P/poly$

## polynomial identity testing $\mathsf{PIT}$

The input is a polynomial $p(x_1, \cdots, x_n)$ where the question is whether $p(x) \equiv 0$. But $p$ is given implicitly by a poly-size arithmetic circuit which has variables in $\Z$ and has gates for addition and multiplication.

- $\mathsf{PIT} \in \mathsf{BPP}$

### Schwartz-Zippel theorem

Suppose $p(x) \not \equiv 0$ has degree $d$. Then for any $S \subseteq \Z$, $Pr_{(a_1, \cdots, a_n) \in S^n}[p(a) \ne 0] \ge 1 - \frac{d}{|S|}$

## $\mathsf{RP}$

A language $L$ is in $\mathsf{RP}$ if there exists a poly-time PTM $M$ such that

- $x \in L$ then $Pr[M(x) = 1] \ge \frac{1}{2}$
- $x \notin L$ then $Pr[M(x) = 1] = 0$

Properties:

- $\mathsf{RP} \subseteq \mathsf{NP}$
- $\mathsf{PIT} \in \mathsf{coRP}$

## $\mathsf{ZPP}$

A language $L$ is in $\mathsf{ZPP}$ if there exists a PTM $M$ such that

- $Pr[M(x) = L(x)] = 1$
- $\mathbb E[\text{runtime of } M(x)] \le n^{O(1)}$

Properties:

- $\mathsf{ZPP} = \mathsf{RP} \cap \mathsf{coRP}$
