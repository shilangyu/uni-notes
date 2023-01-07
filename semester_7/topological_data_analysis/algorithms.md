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
