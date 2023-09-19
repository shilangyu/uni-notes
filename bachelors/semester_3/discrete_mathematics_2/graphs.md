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
- a graph is bipartite iff it does not contain odd cycles (cycle with odd number of edges)

### matching

A graph is called matching when every component is isomorphic to $K_2$

## edge coloring

Each edge is colored by a color $c \in C$. A k-coloring of a graph is when $|C| = k$

### good

We say a k-coloring of edges is called **good** when no two edges with a common vertex share a color

### chromatic index

$\chi'(G)$ the smallest $k$ needed for a good edge coloring of a graph

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

## vertex coloring

Each vertex is colored by a color $c \in C$. A k-coloring of a graph is when $|C| = k$

### good

We say a k-coloring of vertices is called **good** when no two vertices with a common edge share a color

### independent

A set of vertices $S \in V(G)$ is called independent if no two vertices from $S$ share an edge

### chromatic number

$\chi(G)$ the smallest $k$ needed for a good vertex coloring of a graph

$\chi(G) \le \Delta(G) + 1$

### Brooks theorem

If $G$ is a connected graph and is not complete nor an odd cycle then $\chi(G) \le \Delta(G)$

### clique

A clique is a subgraph such that every two distinct vertices in the clique are adjacent (complete subgraphs)

$w(G)$ is the cardinality of the largest clique in $G$

$\chi(G) \ge w(G)$

### Dezartes

For all $k > 2$ there exists a graph $G$ such that $\chi(G) = k$ and $w(G)=2$

## Planar graphs

A multigraph is planar on a plane iff it is planar on a sphere

The planar representation is denoted by $\tilde{G}$

### faces

Regions in $\tilde{G}$

$F(\tilde{G}) = \{f_1, f_2, \cdots, f_n\}$ - set of faces of $\tilde{G}$

$\phi (\tilde{G}) = |F(\tilde{G})|$ - number of faces of $\tilde{G}$

### incident

A face $f$ is incident with an edge $e$ if $e$ belongs to the border of $f$

### degree

A degree of a face is the amount of edges incident to it $deg(f)$ (bridges are counted twice)

### dual multigraph $G^*$

$V(G^*) = \{f^* : f \text{ is a face in } G\} = \{f^*:f \in F(G)\}$

For every edge which is incident with faces $f$ and $g$ we define an edge in $G^*$: $e^* = f^*g^* \in E(G)$

#### properties

1. $|G^*| = \phi(\tilde{G})$
2. $|E(G^*)| = |E(\tilde{G})|$
3. $\deg_{G^*} f^* = \deg_{\tilde{G}} f$
4. $\sum_{f \in F(G)} \deg_{\tilde{G}} = 2|E(\tilde G)|$
5. Dual multigraphs of different planar representations of a graph can be non-isomorphic
6. $G^*$ is planar
7. If $\tilde G$ is connected, $G^{**}$ is isomorphic to $\tilde G$

### Euler formula

$|\tilde G| - |E(\tilde G)| + \phi(\tilde G) = 2$

#### corollary

- Every planar representation of $G$ has the same amount of faces
- If $G$ is a simple planar graph and $|G| \ge 3$ then $|E(G)| \le 3|G| - 6$
- If $G$ is a simple planar graph then $\delta(G) \le 5$

## subdivision

### of an edge

A subdivision of an edge $uv \in E(G)$ is an operation of replacing this edge with any $uv$ path whose internal vertices are not in $G$

### of a graph

If $H$ was obtained from subdivision of some edges of $G$ then $H$ is a subdivision of $G$.

$H$ is planar iff $G$ is planar

### Kuratowski

A graph is planar iff it does not contain a subdivision of $K_5$ or $K_{3,3}$

## Mobius

Any political map can be colored with 4 colors (coloring of states)

If a graph is planar then $\chi(G) \le 4$

## perfect matching

A matching that contains all vertices of $G$ is called a perfect matching

## covered vertex

A matching $M$ covers a vertex from $G$ if the vertex is in $M$

## neighbor set

$N_G(X)$ denotes the set of all neighbors of all vertices in $X$

## Hall theorem

$G=(X,Y,E)$

There exists a matching in $G$ covering the set $X$ iff $\forall_{S \subseteq X} |N_G(S)| \ge |S|$

## Systems of distinct representatives

Let $A_i \subseteq X$ where $i \in \{1, 2, \cdots, n\}$. Then $(a_1, a_2, \cdots, a_n)$ is called a system of distinct representatives if

1. $a_i \in A_i$
2. $a_i \ne a_j$ for all $i \ne j$

### Hall theorem restated

$(A_1, A_2, \cdots, A_n)$ as a system of distinct representatives iff

$$
\forall_{I \subseteq \{1, 2, \cdots, n\}}\ \big|\bigcup_{i \in I} A_i \big| \ge |I|
$$

## vertex cover

A set of vertices such that every edge in the graph contains a vertex from this set.

## Konig theorem

Let $G$ be a bipartite graph

The number of edges in a largest matching in $G$ is equal to the cardinality of a smallest vertex cover.

## Dilworth theorem

$(P, \preccurlyeq)$ - finite poset

The minimum number of chains covering $P$ is equal to the maximum cardinality of an antichain of $P$

## Ramsey theorem

$R(m, k)$

$\forall m, k \in \mathbf{Z}\ \exists n_0$ such that for every integer $n \ge n_0$ and every coloring of edges of the complete graph $K_n$ with two colors (red and blue) there is a clique (complete subgraph) $K_m$ whose all edges are colored with blue or a clique $K_k$ whose all edges are colored red.

### known Ramsey numbers

| $m \backslash k$ |  3  |  4  |  5  |  6  |  7  |  8  |  9  |
| :--------------: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|        3         |  6  |  9  | 14  | 18  | 23  | 28  | 36  |
|        4         |     | 18  | 25  |  ?  |  ?  |  ?  |  ?  |
|        5         |     |     |  ?  |  ?  |  ?  |  ?  |  ?  |

- $43 \le R(5, 5) \le 45$
- $102 \le R(6, 6) \le 165$
- $798 \le R(10, 10) \le 23556$
- $R(m, k) \le \binom{m + k -2}{m-1}$
- $R(m, m) > \frac{m}{2\sqrt{2}} \cdot 2^{\frac{m}{2}}$

### application in posets

In any poset with at least $rs + 1$ elements there is either a chain of length $r + 1$ or an antichain of length $s + 1$

### Erdos, Szeberes theorem

In any sequence of $n \ge rs + 1$ different real numbers there is an increasing subsequence of length $r + 1$ or a decreasing subsequence of length $s + 1$
