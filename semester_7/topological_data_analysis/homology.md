# homology

The n-th homology group of a chain complex $C_*$ is the group

$$
H_n = \ker(\partial_n)/\text{Im}(\partial_{n+1})
$$

For an abstract simplicial complex $\Sigma$, its homology with coefficients in a field $\mathbb k$ is the homology

$$
H_*(\Sigma, k) = H_*(C_*(\Sigma, \mathbb k))
$$

## persistent homology

Given $\varepsilon_1 < \varepsilon_2$ we define persistent homology

$$
	H^{\varepsilon_1 \to \varepsilon_2}_m(Z) = \text{Im}\{i_* : H_m(\text{VR}(Z, \varepsilon_1)) \to H_m(\text{VR}(Z, \varepsilon_2))\}
$$

## chain map

A chain map $f_*: C_* \to D_*$ is graded map of degree 0, $C_n \to D_n$ such that $f_{n-1} \circ \partial_n = \partial_n \circ f_n$

### induced linear transformation

A chain map $f_*$ induces a linear transformation $H_n(f_*) : H_n(C_*) \to H_n(D_*)$ such that

1. $H_n(id_{C_*}) = id_{H_n(C_*)}$
2. $H_n(f \circ g) = H_n(f) \circ H_n(g)$
3. $H_n(f) = f$ on chain complexes $C_*$ is non-zero in only one dimension $i$, and therefore $H_i(C_*) \simeq C_i$

Homology is a functor from chain complexes to graded abelian groups.

## chain homotopy

Let $I_*$ be the chain complex of a unit interval (1-simplex).

A chain homotopy from a chain map $f_*: C_* \to D_*$ to a chain map $g_*: C_* \to D_*$ is a graded map of degree 1 $s_*: C_* \to D_*$ such that $\partial_*s_* + s_*\partial_* = g_* - f_*$

## Brouwer's theorem

Every continuous map $f: D^n \to D^n$ has a fixed point.

Where $D^n = \{x \in \mathbb R^n : ||x|| \le 1\}$

## exact sequence

Given a diagram of linear transformations

$$
U \stackrel{L}{\longrightarrow} V \stackrel{M}{\longrightarrow} W
$$

the sequence of linear transformations is exact if $\text{im}(L) = \ker(M)$ and $M \circ L = 0$.

It is exact iff $\dim(V) = \text{rank}(L) + \text{rank}(M)$.

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

## relative homology

Given a simplicial complex $X$ and its subcomplex $Y$ we have we have chain complexes $C_*(X)$ and $C_*(Y)$ which form a quotient vector spaces $C_i(X)/C_i(Y)$ denoted by $C_i(X, Y)$. This induces boundary maps $\partial: C_i(X, Y) \to C_{i-1}(X, Y)$. With those we can compute homology $H_i(X, Y)$ called the _relative homology_ of $X$ with respect to $Y$. This creates a long exact sequence:

$$
\cdots \longrightarrow H_{i+1}(X, Y) \longrightarrow H_i(Y) \longrightarrow H_i(X) \longrightarrow H_i(X, Y)\longrightarrow H_{i-1}(Y) \longrightarrow \cdots
$$

## natural chain map

Let $Z \subseteq Y \subseteq X$ be inclusions of subcomplexes. The natural chain map induces an isomorphism $H_*(X, Y) \simeq H_*(X - Z, Y - Z)$.
