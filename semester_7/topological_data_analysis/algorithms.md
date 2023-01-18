# algorithms

## exact sequence

Given a diagram of linear transformations

$$
U \stackrel{L}{\longrightarrow} V \stackrel{M}{\longrightarrow} W
$$

the sequence of linear transformations is exact if $\text{im}(L) = \ker(M)$ (which means $M \circ L = 0$)

### Mayer–Vietoris long exact sequence

Given a simplicial complex $X$ which is the union of two subcomplexes $Y$ and $Z$ (note that $Y \cap Z$ is also a subcomplex of $X$). The long exact sequence is

$$
\cdots \longrightarrow H_i(Y \cap Z) \stackrel{\alpha_i}{\longrightarrow} H_i(Y) \oplus H_i(Z) \longrightarrow H_i(X) \stackrel{\delta}{\longrightarrow} H_{i-1}(Y \cap Z) \stackrel{\alpha_{i_1}}{\longrightarrow} \cdots
$$

With $\alpha_i(\xi) = (H_i(i_0)(\xi), -H_i(i_1)(\xi))$ where $i_0 : Y \cap Z \hookrightarrow Y$ and $i_1 : Y \cap Z \hookrightarrow Z$.

The dimension of $H_i(X)$ is

$$
\dim(H_i(Y)) + \dim(H_i(Z)) + \dim(H_{i-1}(Y \cap Z)) - \text{rank}(\alpha_i) - \text{rank}(\alpha_{i-1})
$$

## covering

A covering $U$ of $X$ is a collection of nonempty subsets of $X$ such that $X$ is the union of the sets in $U$.

The covering of $X$ is given by the sets $X = \bigcup_{i=1}^n U_i$

## nerve

The nerve of $U$ is an abstract simplicial complex $(V_U, \Sigma_U)$ where $V_U = \{1, \cdots, n\}$ and $\Sigma_U$ consists of all nonempty collections $\{i_0, \cdots, i_s\}$ in $V_U$ such that

$$
U_{i_0} \cap \cdots \cap U_{i_s} \ne \emptyset
$$

We denote the nerve construction by $N(U)$

### nerve lemma

Suppose we are given an open covering of a topological space $X$ in Euclidean space

$$
X = \bigcup_{i=1}^n U_i
$$

if each of the intersections $U_{i_0} \cap \cdots \cap U_{i_s}$ is either empty or contractible[^1] then $X$ is homotopy equivalent to $N(U)$.

## Mapper construction

Given a point cloud $X$ and a covering $U$ of $X$ we can use the nerve asa model of the data. By using a low dimensional skeleton we can embed the result in $\mathbb R^2$ or $\mathbb R^3$.

The Mapper is a way of encoding the above idea.

Let $f: X \to \mathbb R$ be a continuous map where $X$ is a topological space. Given $x, x' \in X$ we let $x \simeq x'$ if

1. $f(x) = f(x')$
2. $x$ and $x'$ belong to the same connected component of $f^{-1}(f(x))$

### Reeb graph

The Reeb graph $R(f)$ is the quotient of $X$ by this equivalence relation.

Let $f: X \to B$ be a continuous map and $U = \{U_1, \cdots, U_n\}$ be a finite open covering of $B$. For each $\alpha \in \{1, \cdots, b\}$ we may consider the collection of connected components of $f^{-1}(U_\alpha)$ given the subspace topology. They are open sets in $X$ and we will denote the covering consisting of all of them by $U^{Reeb}(f)$.

The nerve of $U^{Reeb}(f)$ is equipped with a natural map of chain complexes:

$$
N(U^{Reeb}(f)) \to N(U)
$$

To apply the above to a point cloud, we replace _connected components_ by some clustering algorithm.

[^1]: contractible - homotopy equivalent to a single point
