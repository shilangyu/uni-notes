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
