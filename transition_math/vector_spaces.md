# vector spaces

$V$ - vector space over some field $\mathbb{K}$ if:

- for every $u, v, w \in V$ we have $u + v = v + u$ and $u + (v + w) = (u + v) + w$
- there is $\mathbf{0} \in V$ called the _zero vector_ such that for any $v \in V$ we have $v + 0 = 0 + v = v$
- for ever $v \in V$ there is $-v \in V$ such that $v + -v = -v + v = 0$

1. $(\forall v \in V) 0 \cdot v = \mathbf{0}$
2. $(\forall a \in F) a \cdot \mathbf{0} = \mathbf{0}$
3. $(\forall a \in F)(\forall v \in V) (-a)v = a(-v) = -(av)$
4. $(\forall a \in F)(\forall v \in V) av = \mathbf{0} \implies a = 0 \lor v \in \mathbf{0}$

### subspaces

A subset $W \subseteq V$ is called a subspace of $V$ if $W$ is a vector space over $\mathbf{K}$ under the same operations of vector addition and scalar multiplication.

### linear combination

Let $a_1, \cdots, a_n \in \mathbf{K}$ and $v_1, \cdots, v_n \in V$. The vector $a_1v_1 + \cdots + a_nv_n \in V$ is called a linear combination.

### span

A span of $S \subseteq V$ is a set of all linear combinations of S. Let $S \subseteq V$ then $span(S) \subseteq V$ or $span(S) = \{a_1v_1 + \cdots + a_nv_n : a_i \in \mathbf{K}$ and $v_i \in S\}$.

### linear independence

$\{a_1v_1 + \cdots + a_nv_n\} = \mathbf{0} \implies a_1 = \cdots = a_n = 0$
