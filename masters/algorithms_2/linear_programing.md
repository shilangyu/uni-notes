# linear programming

Find values of $x_1, \cdots, x_n \in \R$ that minimize or maximize a linear objective function

$$
\sum_{i=1}^n c_ix_i = c^Tx
$$

subject to $m$ linear constraints ($=, \le, \ge$ but not $<, >$)

- $a^Tz \le b$
- $a'^Tz' \ge b'$
- $a''^Tz'' = b''$

The constraints create a feasible region which is a convex set. The solutions are extreme points/vertices.

## solvers

### simplex method

Does not guarantee polynomial runtime, but in practice it is very fast.

Pick an extreme point and look at its neighbors. If any is better move to it. Continue until no neighbor is better. Since we are moving in a convex polytope we eventually reach the optimal solution.

### ellipsoid method

Guaranteed polynomial runtime, but in practice it is slow.

## feasible solution

### def 1

Suppose $\bar x \in \R^d$. An extreme point is a feasible solution where $d$ linearly independent inequalities are tight

### def 2

A feasible solution is an extreme point if it cannot be written as a convex combination of other feasible solutions

**convex combination**: of points $x_1, \cdots, x_n$ is a point of the form $\lambda^Tx$ where $\lambda_i \ge 0$ and $\sum \lambda_i = 1$

If feasible region is bounded and nonempty, there always exists an optimum which is an extreme point.

## max-weight perfect matching

For every edge in $e \in E$

$$
x_e \in \begin{cases}
	1 \text{ if }	e \in \text{matching} \\
	0 \text{ otherwise}
\end{cases}
$$

$$
\begin{align*}
	\text{maximize} \quad& \sum_{e \in E} w(e) \cdot x_e \\
	\text{subject to} \quad& \sum_{e \in \delta(v)} x_e = 1 \qquad&\forall_{e \in E}\\
	& x_e \ge 0 \qquad&\forall_{e \in E}
\end{align*}
$$

Where $\delta(v)$ are all edges incident to a vertex $v$.

For a bipartite graph, any extreme point (and thus optimal solution) is integral.

## minimum weight vertex cover

For every vertex in $v \in V$

$$
x_v \in \begin{cases}
	1 \text{ if }	v \in \text{vertex cover} \\
	0 \text{ otherwise}
\end{cases}
$$

$$
\begin{align*}
	\text{minimize} \quad& \sum_{v \in V} w(v) \cdot x_v \\
	\text{subject to} \quad& x_u + x_v \ge 1 \qquad&\forall_{\{u, v\} \in E}\\
	& 0 \le x_v \le 1 \qquad&\forall_{v \in V}
\end{align*}
$$

For a bipartite graph, any extreme point (and thus optimal solution) is integral.

## normal form

Each LP can be represented in a normal form:

$$
\begin{align*}
	\text{minimize} \quad c^Tx& \\
	\text{subject to} \quad Ax &\ge b \\
	\quad x &\ge 0
\end{align*}
$$

## duality

A reformulation of an LP to give a bound on the answer. For a normal form primal LP, the dual gives the lower bound on the cost.

It serves as a certificate that can verify the optimality of a solution of the primal.

Given a normal form LP, the dual is

$$
\begin{align*}
	\text{maximize} \quad b^Ty& \\
	\text{subject to} \quad A^Ty &\le c \\
	\quad y &\ge 0
\end{align*}
$$

### weak duality

For all $x$ which are primal feasible and all $y$ which are dual feasible

$$
c^Tx \ge b^Ty
$$

### strong duality

If $x$ is an optimal solution and $y$ is an optimal dual solution then

$$
c^Tx = b^Ty
$$

If the primal problem is unbounded then the dual problem is infeasible and vice versa.

### complementarity slackness

If $x$ is primal feasible and $y$ is dual feasible then

$$
x \text{ and } y \text{ are both optimal} \iff \begin{cases}
	\forall_i x_i > 0 \implies c_i = \sum_j A_{j,i} y_j \\
	\forall_j y_j > 0 \implies b_j = \sum_i A_{j,i} x_i \\
\end{cases}
$$
