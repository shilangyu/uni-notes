# approximation algorithms

Algorithms which relax the requirement of finding the optimal solution while preserving reliability and efficiency.

An $\alpha$-approximation algorithm is such that outputs $S$ in poly time where

- $\frac{\text{cost(S)}}{\text{cost(OPT)}} \le \alpha$ for minimization problems
- $\frac{\text{profit(S)}}{\text{profit(OPT)}} \ge \alpha$ for maximization problems

The goal is to tend towards $\alpha = 1$

## min-weight vertex cover

The LP relaxation gives some result $x^*$. We perform approximation by picking the vertex cover to be $C = \{v \in V : x_v^* \ge \frac{1}{2}\}$.

$C$ is a feasible solution and its weight is at most twice of the optimal one.

## integrality gap

The ratio describing the LP relaxation. Let $\mathcal I$ be the set of all instances of a problem. The for a minimization problem the integrality gap is

$$
g = \max_{I \in \mathcal I}\frac{\text{OPT}(I)}{\text{OPT}_{LP}(I)}
$$

## set cover

Given universe $U = \{e_1, \cdots, e_n\}$ and a family of subset $T = \{S_1, \cdots, S_m\}$ and a cost function $c : T \to \R^+$ find a collection $C \subseteq T$ such that $\bigcup C = U$ and minimizes the cost

### deterministic

Suppose each element belongs to at most $f$ sets. Then the LP solution where we pick the solution to be $C = \{S_i : x_i^* \ge \frac{1}{f}\}$ is an $f$-approximation.

### randomized

We repeat $d \cdot \ln(n)$ times the following: for each $i \in [m]$ add set $S_i$ to the solution $C$ with probability $x^*_i$.

The expected cost after $d \cdot \ln(n)$ repetitions is at most $d \cdot \ln(n) \cdot OPT$.

The output is a feasible solution with probability at least $1 - \frac{1}{n^{d - 1}}$

## prediction with experts advice

Given $N$ experts which individually advise either $0$ or $1$, we predict an answer. Then, the adversary with the knowledge of the advices and our answer, answers. The goal is to minimize the amount of mistakes relative to the best expert. We consider $T$ trials.

### majority vote

If a perfect expert exists, we can always take the majority vote of those experts that have not made a mistake. So we make at most $\log N$ mistakes.

Without a perfect expert we can use the same strategy but restarting whenever we are out of experts. If the best expert has made $M$ mistakes by time $T$, we make at most $(M+1) \log N$ mistakes.

### weighted majority

We take the weighted majority vote of all experts. Weights are initialized to 1, and a mistake is penalized by halving that weight for the given expert. The amount of mistakes we make is

$$
M \le \frac{1}{\log{4 \over 3}}(M_i + \log N)
$$

Where $M_i$ is the amount of mistakes done by expert $i$.

### Hedge

The game is changed to produce a distribution $p$ over the experts while the adversary produces a cost vector $m \in [-1, 1]^N$

Let $\Phi(t) = \sum_{i \in [N]} w_i^{(t)}$ be the sum of all weights at time $t$. Then $p_i^{(t)} = \frac{w_i^{(t)}}{\Phi(t)}$. We update the weights according to $w_i^{(t+1)} = w_i^{(t)} \cdot e^{-\epsilon \cdot m_i^{(t)}}$

For $\epsilon \le 1$ Hedge produces

$$
\sum_{t = 1}^T p^{(t)} \cdot m^{(t)} \le \sum_{t=1}^T m_i^{(t)} + \frac{\ln N}{\epsilon} + \epsilon T
$$

for any expert $i$.

## covering LPs

A covering linear program is such that $A \in \R^{m \times n}_+$, $b \in \R^m_+$, $c \in \R^n_+$.

$$
\begin{align*}
	\text{minimize} \quad c^Tx& \\
	\text{subject to} \quad Ax &\ge b \\
	\quad 1 &\ge x \ge 0
\end{align*}
$$

### Hedge

The number of experts equals to $m$

1. Initialize weights to 1
2. Pick the distribution to be $p_i^{(t)} = \frac{w_i^{(t)}}{\Phi(t)}$
3. Let $x^{(t)}$ be the solution to the reduced LP
4. Let $m_i^{(t)} = A_ix - b_i$
5. Update weights per Hedge
6. Output the solution as $\frac{1}{T}\sum_{t=1}^T x^{(t)}$

The reduced LP being

$$
\begin{align*}
	\text{minimize} \quad c^Tx& \\
	\text{subject to} \quad (\sum_{i=1}^m p_i A_i) \cdot x &\ge \sum_{i=1}^m p_i b_i \\
	\quad 1 &\ge x \ge 0
\end{align*}
$$

The solution is almost feasible while having a cost at most that of the optimal one
