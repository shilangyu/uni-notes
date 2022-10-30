# point-set topology in $\mathbb R^n$

Working in real euclidean space:

- $\mathbb R^n = \{(x_1, \cdots, x_n) : x_1 \in \mathbb R\}$
- $||x - y|| = \sqrt{(x_1 - y_1)^2 + \cdots + (x_n - y_n)^2}$
- $D^n(x, r) = \{y \in \mathbb R^n : ||x - y|| < r\}$

## point classification

Let $A \subseteq \mathbb R^n$

1. $x$ is an interior point of $A$ if there is an open ball $B$ such that $x \in B \subseteq A$
2. $x$ is an exterior point of $A$ if there is an open ball $B$ such that $x \in B \subseteq (\mathbb R^n \setminus A)$
3. $x$ is a limit point of $A$ if every ball $B$ around $x$ contains point of $A$: $\forall_{r > 0} B^n(x, r) \cap A \neq \emptyset$
4. $x$ is a frontier point of $A$ if every ball $B$ around $x$ contains both points of $A$ and points of $\mathbb R^n \setminus A$: $\forall_{r > 0} (B^n(x, r) \cap A \neq \emptyset \land B^n(x, r) \cap (\mathbb R^n \setminus A) \neq \emptyset)$

A point is always one of the 1., 2., or 3., and always only one of them.

## set properties

Let $A \subseteq \mathbb R^n$

- a set $A$ is open if every $x \in A$ is an interior point
- a set $A$ is closed if every $x \notin A$ is an exterior point
- a set $A$ is bounded if $A \subseteq D^n(0, r)$ for some $r$

### set functions

- interior of a set $A$ denoted by $Int(A)$ is the set of all interior points of $A$
- frontier of a set $A$ denoted by $Fr(A)$ is the set of all frontier points of $A$
- closure of a set $A$ denoted by $Cl(A)$ is the set $A \cup Fr(A)$

## limit points of sequences

A point $p \in \mathbb R^n$ is a limit point of a sequence $\{x_i\}_{i=1}^\infty$ if every neighborhood of $p$ contains an infinite number of $x_i$.

If $p$ is a limit point of a set $A \subseteq \mathbb R^n$ then there exists a sequence of points $\{x_i\}_{i=1}^\infty$ where $x_i \in A$ such that $p$ is a limit point of the sequence.

If $\{x_i\}_{i=1}^\infty$ is a sequence with each $x_i \in A$ and $p$ is a limit point of the sequence then $p$ is a limit point of $A$.

## relative neighborhoods

A neighborhood of a point $x \in A$ relative to $A$ is a set of the form $D^n(x, r) \cap A$.

Let $B \subseteq A$. The set $B$ is open relative to $A$ if every $x \in B$ is an interior point relative to $A$.

Let $B \subseteq A \subseteq \mathbb R^n$:

- $B$ is open relative to $A$ iff $B = A \cap U$ for some open set $U \subseteq \mathbb R^n$
- $B$ is closed relative to $A$ iff $B = A \cap C$ for some closed set $C \subseteq \mathbb R^n$

## continuity

Let $D \subseteq \mathbb R^n$ and $R \subseteq \mathbb R^m$.

- A function $f: D \to R$ is continuous if whenever $U$ is open in $R$, the set $f^{-1}(U)$ is an open set in $D$
- A function $f: D \to R$ is continuous iff $x$ is a limit point of a set $B \subseteq D$ then $f(x)$ is a limit point of $f(B)$ in $R$
- A function $f: D \to R$ is continuous iff for every $x \in D$ and every $\varepsilon > 0$ there exists a $\delta > 0$ such that if $y \in D$ and $||y - x|| < \delta$ then $||f(y) - f(x)|| < \varepsilon$

A function $f: X \to Y$ is a homeomorphism if $f$ is continuous and $f^{-1}$ is continuous. The spaces $X$ and $Y$ are called topologically equivalent (homeomorphic).

## topological property

$P$ is a topological property if whenever set $A$ has property $P$ and set $B$ is topologically equivalent to $A$, then $B$ has property $P$.

## compactness

A subset $A$ of $\mathbb R^n$ is compact if every sequence of points in $A$ has a convergent subsequence to a point in $A$.

Let $A \subseteq \mathbb R^n$ be a compact subset, and let $f: A \to \mathbb R^m$ be a continuous map. Then $f(A)$ is a compact set.

### Heine-Borel theorem

A subset $A$ of $\mathbb R^n$ is compact iff it is closed and bounded.

## connectedness

A set $S$ is connected if whenever $S$ is divided into two nonempty disjoint sets, one contains a limit point of the other.

The set $S$ is connected iff $S$ cannot be written as a union of two nonempty disjoint sets which are open relative to $S$.

If $f: D \to R$ is a continuous function from a connected set $D$ onto a set $R$, then $R$ is connected.
