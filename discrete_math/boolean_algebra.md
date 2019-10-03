# Boolean algebra

#### Logical statement

- `true` | `false`
- no variables

`p`, `q`, `r` - propositional variables

`a`, `b`, `c` - values

#### Logical connectives

- IF...THEN... (implication): $p \implies q$
- AND (conjunction): $p \land q$
- OR (disjunction): $p \lor q$
- XOR (exclusive disjunction): $(p \lor q) \land \text{\textasciitilde} (p \land q) \equiv p \oplus q$
- NOR (not or): $\text{\textasciitilde} (p \lor q) \equiv p \downarrow q$
- NAND (not and): $\text{\textasciitilde} (p \land q) \equiv p | q$

#### Commutative operation

$a + b = b + a$ ✔

$a - b = b - a$ ✖

#### Unary

NOT (negation): `~`

#### Contraposition law

$(p \implies q) \equiv (\text{\textasciitilde}q \implies \text{\textasciitilde}p)$

#### De Morgan's law

$$
	\begin{array}{cc}

	\text{\textasciitilde}(p \land q) \equiv \text{\textasciitilde}p \lor \text{\textasciitilde}q

\\

	\text{\textasciitilde}(p \lor q) \equiv \text{\textasciitilde}p \land \text{\textasciitilde}q
	\end{array}
$$
