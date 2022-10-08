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
