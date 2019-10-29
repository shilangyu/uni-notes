# relations

A relation $R$ on a set $X$ is a subset of $X \times X$ ( $R \subseteq X \times X$)

$(a,b) \in R \equiv aRb \equiv a \sim b$

Defining the equality symbol as a set: $EQ = \{(x, x): x \in X\}$

$\leq LTE$

$\lt LT$

$= EQ$

$LTE = LT \cup EQ$

#### properties of relations

1. Reflexivity: $(\forall x \in X)(x \sim x)$
2. Symmetricity: $(\forall x,y \in X)(x \sim y \implies y \sim x)$
3. Transitivity: $(\forall x,y,z \in X)(x \sim y \land y \sim z \implies x \sim z)$
4. Antisymmetricity: $(\forall x,y \in X)(x \sim y \land y \sim x \implies x=y)$

#### equivalence relations

$R \subseteq X \times X$ is said to be an equivalence relation iff $R$ is reflexive, symmetric and transitive.

The equivalance class of an element $x \in X$ is the set $[x]_R = \{ y \in X: x \sim y\}$

1. Every $x \in X$ belongs to the equivalence class of some element $a$
2. $[x] \cap [y] \neq \emptyset \iff [x] = [y]$
