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
