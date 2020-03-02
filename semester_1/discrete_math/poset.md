# POSET (partial ordered sets)

$(X, \sim)$: $\sim$ is a partial order on $X$ iff $\sim$ is:

1. reflexive
2. antisymmetric
3. transitive

$(2^{\{a, b, c\}}, \subseteq)$:

![hasse diagram](https://i.imgur.com/XiWbnqp.png){style="filter: invert(1);"}

### elements

$m \in X$ is said to be a ... element:

- largest: element on top of a Hasse diagram $(\forall a \in X)(a \preccurlyeq m)$[^1]
- maximal: dangling ends of a Hasse diagram $(\forall a \in X)(m \preccurlyeq a \implies m = a)$
- smallest: element on bottom of a Hasse diagram $(\forall a \in X)(m \preccurlyeq a)$
- minimal: dangling starts of a Hasse diagram $(\forall a \in X)(a \preccurlyeq m \implies m = a)$

### total

A poset $(X, \sim)$ is said to be total iff $(\forall x,y \in X)(x \sim y \lor y \sim x)$

### chain

A subset $B$ of $X$ is called a chain iff $B$ is totally ordered by $\sim$

$C(X)$ - the set of all chains in $(X, \sim)$

A chain $D$ in $(X, \sim)$ is called a maximal chain iff $D$ is a maximal element in $(C(X), \subseteq)$

### anti chain

$K \subseteq X$ is called an antichain in $(X, \sim)$ iff $(\forall p,q \in K)(p \sim q \lor q \sim p \implies p = q)$

### well order

$(X, \sim)$, $\sim$ is called a well order iff $\sim$ is a total order on $X$ and every non-empty subset $A$ of $X$ has the smallest element

[^1]: $x \preccurlyeq y$: some kind of order where $x$ comes before $y$. For example: $A \preccurlyeq B \iff |A| \leq |B|$
