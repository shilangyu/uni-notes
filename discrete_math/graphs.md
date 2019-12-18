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

A graph is said to be connected iff for every $x, y \in V$ there is a $x-y$ path in $G$, i.e. a path $(v_0, \cdots v_k)$ such that $v_0 = x$, $v_k = y$

### partition

Graph is connected iff for every partition $\{V_1, V_2\}$ of $V$ such that $V_1 \ne \emptyset$ and $V_2 \ne \emptyset$ there exists $v_1 \in V_1$ and $v_2 \in V_2$ such that there is a $v_1 - v_2$ path in $G$
