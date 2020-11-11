# graphs

for more, see [semester 1](../../semester_1/discrete_math/graphs.html)

## notation

$G = (V, E)$

- $V(G)$, $E(G)$: vertex/edge set of $G$
- $|G| = |V|$: order of $G$ (number of vertices)
- $e(G) = |E|$: size of $G$ (number of edges)
- $G[V']$, $G[E']$: induced subgraph by set of vertices/edges

## connectivity

$k \le \kappa(G) \le \kappa'(G) \le \delta(G)$

### trail

A sequence of vertices and edges that are connected in a graph $G$. ($v_o, e_1, v_1, e_2, \cdots, e_n, v_n$).

1. If all vertices in a trail are different, then it is called a **path**
2. If $v_0 = v_n$ in a trail, then it is called a **closed trail**
3. If $v_0 = v_n$ in a path, then it is called a **cycle**

### cut vertex

In a connected graph $G$, $G - v$ would result in a disconnected graph.

A set of vertices $V' \subseteq V(G)$ is a **cut set** if the graph $G - V'$ is disconnected.

A set of edges $E' \subseteq V(G)$ is a **edge cut set** if the graph $G - E'$ is disconnected.

### edge connectivity $\kappa'(G)$

1. the cardinality of a smallest edge cut set if $G \ne K_1$
2. 0 if $G=K_1$

### independent path

When a set of paths do not share an inner vertex.

### $|G| \ge 3$

Then these conditions are equivalent:

- $G$ is 2-connected
- $G$ has no cut vertex
- each two vertices lie on common cycle
- each vertex and edge lie on a common cycle
- each two edges lie on a common cycle

## Euler tours and trails

- an Euler trail is a trail which contains each edge of a graph
- an Euler tour is a closed Euler trail
- a graph which has an Euler tour is called an Eulerian graph

A connected graph $G$ is Eulerian iff the degree of every vertex in $G$ is even

### algorithm for constructing euler tours

1. choose any vertex
2. choose an new edge that is not a bridge (if no choice, then the bridge edge)
3. move to the new vertex
4. repeat step 2 and 3 until done

## traveling salesman

> Finding an Hamiltonian path of minimal distance in a weighted graph

To find the optimal solution brute force has to be used. There is, however, an algorithm that finds in the worst case a twice longer solution than the optimal one but in a much faster time:

1. Find minimum spanning tree $T$ of $G$
2. Duplicate each edge in $T$ to create a multigraph $T'$
3. Find any Euler tour $S$ in $T'$
4. Return a Hamiltonian cycle $C$ whose consecutive vertices are vertices of $G$ written in order of first appearance in the tour $S$

## bipartite

$G=(X,Y,E)$

- all trees are bipartite
- $K_{m,n}$ denotes a complete bipartite graph where $|X| = m$, $|Y| = n$
- a graph is bipartite iff it does not contain odd cycles (cycle with off number of edges)

### matching

A graph is called matching when every component is isomorphic to $K_2$

## edge coloring

Each edge is colored by a color $c \in C$. A k-coloring of a graph is when $|C| = k$

### good

We say a k-coloring is called **good** when no two edges with a common vertex share a color

### chromatic index

$\chi'(G)$ the smallest $k$ needed for a good coloring of a graph

$\chi'(G) \ge \Delta(G)$

$$
\chi'(C_n) =
\begin{cases}
2 &\text{ if } n \text{ is even} \\
3 &\text{ if } n \text{ is odd} \\
\end{cases}
$$

$$
\chi'(K_n) =
\begin{cases}
n &\text{ if } n \text{ is odd} \\
n-1 &\text{ if } n \text{ is even} \\
\end{cases}
$$

$$
\chi'(\text{bipartite graph}) = \Delta(\text{bipartite graph})
$$

## multigraph

When multiple edges between $v$ and $u$ are allowed.

### multiplicity

$\mu(G)$ is the maximum number of edges joining two vertices in $G$

### Vizing theorem

$\Delta(G) \le \chi'(G) \le \Delta(G) + \mu(G)$

### Shannon theorem

$\Delta(G) \le \chi'(G) \le \frac{3}{2} \Delta(G)$
