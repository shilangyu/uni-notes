# abstract interpretation

Abstract domains which approximate concrete domains of programs. Abstract interpretation is used for constructing induction invariants. Programs are seen as control flow graphs (CFG) where possible values are represented as ranges.

Transfer function $T(S, c) = sp(S, \rho(c))$. We denote $T(S, skip) = S$ for an edge with no label.

- $[a, b] \sqcup [c, d] = [\min(a, c), \max(b, d)]$

Interpreting the CFG and updating edges with the approximating transfer function we get a program annotated in a fashion where all Hoare triples hold.

## lattices

A lattice is a poset where every pair of elements have a unique supremum and infimum. Total order sets are lattices.

### least upper bound (supremum)

For a poset $(A, \le)$ the supremum of $S \subseteq A$ is an element $M \in A$ that is the least element of the set $\{x | x \text{ is upper bound on } S\}$. We denote a binary operation by $a_1 \sqcup a_2 = \inf\{a_1, a_2\}$. It is associative, commutative, and idempotent.

Similarly $a_1 \sqcap a_2 = \sup\{a_1, a_2\}$ is the greatest lower bound (infimum).

### partial orders using maps

Let $A$ be a set of propositional formulas containing only variables $p$ and $q$. For $F \in A$ we define

$$
[F] = \{(u, v) \in \{0, 1\}^2: F[p := u, q := v]\}
$$

so it is the set of assignments that makes $F$ true. Then we can say $F \le G \iff [F] \subseteq [G]$ to form a poset.

Let $(C, \le)$ be a lattice. Let $\gamma: A \to C$ be the injective concretization function. Let $a \sqsubseteq b$ on A be defined as $\gamma(a) \le \gamma(b)$. Then $(A, \sqsubseteq)$ is a partial order.

### complete lattice

A complete lattice is a lattice where every set (including empty and infinite sets) has supremum and infimum.

## monotonic function

A function $\alpha : C \to A$ is monotonic when $x \le y \implies \alpha(x) \sqsubseteq \alpha(y)$ for $x, y \in C$.

## fixed point

A fixed point of $f : A \to A$ is a point $x$ such that $f(x) = x$. Also called fixpoint.

For a poset $(A, \le)$ and a monotonic function $f : A \to A$, we define the set of fixpoints $S = \{x : f(x) = x\}$. If $S$ has a least element then it is called the least fixpoint. If $S$ has a greatest element then it is called the greatest fixpoint.

- $Post = \{x : f(x) \le x\}$ set of postfix points of $f$
- $Pre = \{x : x \le f(x)\}$ set of prefix points of $f$
- $Fix = \{x : f(x) = x\}$ set of fix points of $f$

### Tarski fixed point theorem

$\sqcap Post$ is the least element of $Fix$. $\sqcup Pre$ is the greatest element of $Fix$. So complete lattices have fixpoints.

$$
\begin{aligned}
	a_0 &= \bot \\
	a_{n+1} &= f(a_n) \\
\end{aligned}
$$

then $a_* = \bigsqcup_{n \le 0} a_n$. $a_*$ is a prefix point.

## $\omega$-continuity

A function $G$ is $\omega$-continuous if for every chain $x_0 \sqsubseteq x_1 \sqsubseteq \cdots \sqsubseteq x_n \sqsubseteq \cdots$

$$
G(\bigsqcup_{i \ge 0} x_i) = \bigsqcup_{i \ge 0} G(x_i)
$$

For an $\omega$-continuous function $G$, $a_*$ is the least fixpoint of $G$.

## galois connection

$\alpha : C \to A$ and $\gamma : A \to C$ between partial orders are a Galois connection such that

$$
\forall_{c,a} \alpha(c) \sqsubseteq a \iff c \le \gamma(a)
$$

Equivalently it is a Galois connection iff $c \le \gamma(\alpha(c))$ and $\alpha(\gamma(a)) \sqsubseteq a$
