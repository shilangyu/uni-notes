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
- $A \subsetneq B$: Every element of A is an element of B but not equal to each other
- $a \in B$: a is an element of B

#### De Morgan's law

$\bigcup\limits_{t \in T}(\mathbb{R} - A_t) = \mathbb{R} - \bigcap\limits_{t \in T} A_t$

#### operations on sets

Assumption: $x \in X$

- union: $A \cup B = x \in A \lor x \in B$
- intersection: $A \cap B = x \in A \land x \in B$
- difference: $A - B = x \in A \land x \notin B$
- symmetric difference: $A \div B = (A - B) \cup (B - A)$
- complement: $A' = x \notin A$
- cartesian product: $\{1, 2\} \times \{3, 4, 5\} = \{(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)\}$
- union of sets: $\bigcup\limits_{i=1}^{n} S_i$
- intersection of sets: $\bigcap\limits_{i=1}^{n} S_i$

### relations

A relation $R$ on a set $X$ is a subset of $X \times X$ ( $R \subseteq X \times X$)

$(a,b) \in R \equiv aRb$

Defining the equality symbol as a set: $EQ = \{(x, x): x \in X\}$

$\leq LTE$

$\lt LT$

$= EQ$

$LTE = LT \cup EQ$

#### properties of relations

1. Reflexivity: $(\forall x \in X)xRx$
2. Symmetricity: $(\forall x,y \in X)(xRy \implies yRx)$
3. Transitivity: $(\forall x,y,z \in X)(xRy \land yRz \implies xRz)$
4. Antisymmetricity: $(\forall x,y \in X)(xRy \land yRx \implies x=y)$

#### equivalence relations

$R \subseteq X \times X$ is said to be an equivalence relation iff $R$ is reflexive, symmetric and transitive.

The equivalance class of an element $x \in X$ is the set $[x]_R = \{ y \in X: xRy\}$

1. Every $x \in X$ belongs to the equivalence class of some element $a$
2. $[x] \cap [y] \neq \emptyset \iff [x] = [y]$

---

1. $x \notin A \equiv \neg(x \in A)$
