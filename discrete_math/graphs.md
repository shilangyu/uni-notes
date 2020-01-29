# graphs

A graph is a pair $G = (V, E)$ where $V$ is a finite set called the set of vertices and $E \subseteq p_2(V)$, $E$ is called the set of edges of $G$.

### trivial and complete

#### trivial

only one vertex $|V| = 1$, $E = \emptyset$

#### complete

all vertices are connected with each other $K_n = (\{v_1, \cdots, v_n\}, p_2(\{v_1, \cdots, v_n\}))$. $K_1$ is therefore a trivial graph.

$|p_2(\{v_1, \cdots, v_n\})| = \binom{n}{2} = \frac{n(n-1)}{2}$

### degree

The degree of a vertex $v$ in $G$ is the number of edges containing $v$. $\deg_G(v) = |\{e \in E(a): v \in e\}|$

### handshaking

$|E| = \frac{1}{2} \sum_{v \in V} \deg_G(v)$

### path

A path in a graph is a sequence of vertices $(v_0, v_1, \cdots, v_k)$ such that:

- $(\forall i = 0, \cdots, k-1)\{v_i, v_{i+1}\} \in E$
- $(\forall 0 \le i, j \lt k) i \ne j \implies \{v_i, v_{i+1}\} \ne \{v_j, v_{j+1}\}$
- If $i \ne j \implies v_i \ne v_j$ the path is called simple

### cycle

A cycle in $G$ is a path $(v_0, \cdots, v_k, v_0)$ such that

- $k \ge 2$
- If $i \ne j \implies v_i \ne v_j$ the cycle is called simple

### connected

A graph is said to be connected iff for every $x, y \in V$ there is a $x-y$ path in $G$, i.e. a path $(v_0, \cdots v_k)$ such that $v_0 = x$, $v_k = y$. Otherwise it is called disconnected.

### partition

Graph is connected iff for every partition $\{V_1, V_2\}$ of $V$ such that $V_1 \ne \emptyset$ and $V_2 \ne \emptyset$ there exists $v_1 \in V_1$ and $v_2 \in V_2$ such that there is a $v_1 - v_2$ path in $G$

### Eulerian

$G$ is called Eulerian iff:

- $G$ is connected, nontrivial
- $(\forall v \in V(G))(2 | \deg(v))$

### subgraphs

$G = (V, E)$, $H = (W, F)$ is called a subgraph of $G$ if $W \subseteq V$ and $F \subseteq E$. Denoted as $H \preccurlyeq G$, it is a [poset](./poset.html).

#### spanning

If $W = V$ then $H$ is called a spanning subgraph of $G$.

#### induced

If $F = E \cap p_2(W)$ then $H$ is called an induced subgraph of $G$.

### component

A component of $G$ is any maximal connected subgraph of $G$.

If $G$ is a disconnected graph, $\bar{G}$ is connected.

### complement

A complement of $G = (V, E)$ (denoted by $\bar{G}$) is $(V, \{u, v \in V : uv \notin E\})$. In other words the edges are flipped: If 2 vertices were adjacent in $G$, they are not adjacent in $\bar{G}$ and the other way around.

### isomorphic

_graphs that have the same structure_. Hard to example mathematically. Please refer to [wikipedia](https://en.wikipedia.org/wiki/Graph_isomorphism).

### self-complementary

If $\bar{G}$ is isomorphic to $G$ then the graph is self-complementary

### bipartite

A graph $G$ is called bipartite if the vertices can be divided into 2 disjoint and independent sets.

### min/max degree

$\delta(G) = \min(\{\deg(v) : v \in V\})$

$\Delta(G) = \max(\{\deg(v) : v \in V\})$

If $\delta(G) \ge 2$ then $G$ has a cycle

### k-regular

$G$ is $k$-regular iff $(\forall v \in V)(\deg(v) = k)$

### trees

$G$ is called a tree iff:

- $G$ is connected
- $G$ has no cycles

Every connected graph has a [spanning](#spanning) tree

The following conditions are equivalent:

1. $G$ is a tree
2. $(\forall u, v \in V)$ $!\exists$[^1] $u-v$ path in $G$ and the path is simple
3. $G$ is connected and $|V| = |E| + 1$
4. $G$ has no cycles and $|V| = |E| + 1$
5. $G$ has no cycles and $(\forall u, v \in V)(\{u, v\} \notin E \implies G^+ = (V, E \cup \{\{u, v\}\})$ $!\exists$ cycle

### weighted/network graphs

For a connected graph $G = (V, E)$

$N = ((V, E), w) w: E \to \mathbf{R}^+$

Find the cheapest spanning tree in $N$. A greedy naive way:

1. take a cheapest edge
2. take a new cheapest edge connected to current edges
3. did this edge create a cycle?
   - yes: go back to step 2 and choose the next cheapest one
   - no: continue
4. do our edges form a connected graph?
   - yes: you are done
   - no: go to step 2

### connectivity

$\kappa(G) = min\{k :$ there exists a k-element set $S \subseteq V$ such that $G - S$ is disconnected or trivial $\}$

For example: A tree has connectivity of $1$, a complete graph $K_n$ has connectivity of $n-1$

We call a graph a **k-connected** one when $\kappa(G) \ge k$

#### 2-connected

$G$ is 2-connected iff for every $x, y \in V(G)$ there exists a simple cycle $C$ in $G$ such that $x, y \in V(C)$

### Hamiltonian

#### cycle

A Hamiltonian cycle in $G$ is a spanning, simple cycle in $G$

#### graph

$G$ is a Hamiltonian graph iff $G$ has a Hamiltonian cycle.

If $G$ is Hamiltonian then:

- $G$ is 2-connected
- $(\forall S \subseteq V(G))(G-S$ has at most $|S|$ components$)$

#### Dirac

If $G$ has $p$ vertices, $p \ge 3$, and $(\forall v \in V)(\deg(v) \ge \frac{p}{2})$ then $G$ is Hamiltonian

##### corollary

$(\forall \{x, y\} \notin E \implies \deg(x) + \deg(y) \ge p) \implies G$ is Hamiltonian

### planar

$G$ is said to be planar iff $G$ can be represented by a drawing in which no two edges intersect.

#### facets

"parts" of a planar graph ($K_4$ has 4 facets)

#### Euler formula for planar graphs

Let $G$ be a connected planar graph with with $n$ vertices and $k$ edges. Then, in every planar representation of $G$ the number of facets, $f$ satisfies the formula $f = k - n + 2$

##### corollary

For every planar graph $G$ with $k$ edges, $n$ vertices, and $f$ facets we have:

- $f \le \frac{2}{3}k$
- $k \le 3n - 6$

[^1]: $!\exists$: there exists exactly one
