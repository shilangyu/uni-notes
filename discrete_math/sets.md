# sets

Expressed with capital letters or list of elements between braces:

$A = \{ a_1, a_2, ..., a_n \}$ where $n$ is the size of the set

Two sets are considered equal when all the elements are the same

We consider subsets of some universal $X$, $A, B, ... \in 2^X =$ the set of all subsets of $X$:

let: $X = \{ a, b, c \}$ then $2^X = \{ \emptyset, \{ a \}, \{ b \}, \{ c \}, \{ b, c \}, \{ a, b \}, \{ a, c \}, \{ a, b, c \} \}$

$|2^X| = 2^{|X|}$

$2^X = p(x)$

#### declarations

- $A \subseteq B$: Every element of A is an element of B

#### operations on sets

Assumption: $x \in X$

- union: $A \cup B = x \in A \lor x \in B$
- intersection: $A \cap B = x \in A \land x \in B$
- difference: $A - B = x \in A \land x \notin B$
- symmetric difference: $A \div B = (A - B) \cup (B - A)$
- complement: $A' = x \notin A$

#### quantifiers

Assumption: $x \in \{ 1, 2, ..., 10 \}$

- for every (all have to be true): $\forall x > 0$
- there exists (one has to be true): $\exists x = 5$

---

1. $x \notin A \equiv \neg(x \in A)$
