# networks

A network is denoted by $S = (G, c, s, t)$ where:

- $G = (V, E)$ - directed graph
- $c: E \to [0, \infty)$ - capacity function. $c(uv)$ denotes the capacity of the $uv \in E$ edge
- $s, t \in V$, $s \ne t$
  - $s$ - source
  - $t$ - sink

## flow

A flow in $S$ from the source $s$ to the sink $t$ is any function $f: E \to [0, \infty)$ such that:

1. $0 \le f(uv) \le c(uv)$
2. Kirchhoff's law

### value

Value of a flow $f$ is $W(f) = \sum f(su) - \sum f(us)$

### maximal flow

A flow from $s$ to $t$ is called maximal if it's value is the largest possible.

$f(A, V-A) = \sum_{e \in P(A)} f(e)$

## cut

let $A \subseteq V$

A cut $P(A)$ is a set of edges (from $E$) from $A$ to $V - A$

### capacity

A capacity of a cut is the sum of all capacities in a cut $P(A)$. Denoted by $c(A, V-A)$

### minimal

A $P(A)$ cut is called minimal if the capacity of this cut is the least possible.

## lemma

If $s \in A$ and $t \in V-A$ then $W(f) = f(A, V-A) - f(V-A, V)$

## Ford-Fulkerson Theorem

The value of a maximal flow from $s$ to $t$ is equal to the capacity of minimal cut between $s$ and $t$

### algorithm

$FF(S)$:

1. for each edge $uv \in E$
   1. do $f(uv) \leftarrow 0$
2. while there exists an augmenting path $P$ in $S$ from $s$ to $t$ for the flow $f$
   1. do modify the flow $f$ by increasing by the value of $f$ along the path $P$

### proposition

$W(f) \le c(A, V-A)$

## augmenting paths

An augmenting path from $s$ to $t$ for a flow $f$ is a sequence of vertices and edges $v_0, e_1, v_1, \cdots, v_{l-1}, e_l, v_l$ where $v_0 = s$ and $v_l = t$ and $e_i$ is useful from $v_{i-1}$ to $v_i$

An edge is useful from $u$ to $v$ with respect to a flow $f$ if:

- $e = uv$ and $f(e) < c(e)$ ($e$ - useful forward edge)
- $e = vu$ and $f(e) > 0$ ($e$ - useful reverse edge)

$f'$ - flow on the augmented path

$$
\Delta(e_i) = \begin{cases}
c(e_i) - f(e_i) & \text{if} & e_i\ \text{is a useful forward edge} \\
f(e_i) & \text{if} & e_i\ \text{is a useful reverse edge} \\
\end{cases}
$$

$\delta = \min\{\Delta(e_i)\}$

$$
f'(e_i) = \begin{cases}
f(e_i) + \delta & \text{if} & e_i\ \text{is a useful forward edge} \\
f(e_i) - \delta & \text{if} & e_i\ \text{is a useful reverse edge} \\
\end{cases}
$$

$f'(e) = f(e)$ for all edges not belonging to our augmented path

## theorem

These are equivalent:

- a flow $f$ from $s$ to $t$ is maximal
- there is not augmenting path in the network for the flow $f$
- $W(f) = c(A, V - A)$ for some $A \subseteq V$ such that $s \in A$ and $t \in V-A$

## multiple sources/sinks

Let $s_1, s_2, \cdots s_p$ be the sinks and let $t_1, t_2, \cdots t_q$ be sources
