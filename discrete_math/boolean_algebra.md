# Boolean algebra

#### Logical statement

- `true` | `false`
- no variables

`p`, `q`, `r` - propositional variables

`a`, `b`, `c` - values

#### Logical connectives

- IF...THEN... (implication): $p \implies q \equiv \neg p \lor q$
- AND (conjunction): $p \land q$
- OR (disjunction): $p \lor q$
- XOR (exclusive disjunction): $p \oplus q \equiv (p \lor q) \land \neg (p \land q)$
- NOR (not or): $p \downarrow q \equiv \neg (p \lor q)$
- NAND (not and): $p | q \equiv \neg (p \land q)$
- IF AND ONLY IF (both are the same): $p \iff q \equiv (p \implies q) \land (q \implies p)$

#### Commutative operation

$a + b = b + a$ ✔

$a - b = b - a$ ✖

#### Unary

NOT (negation): $\neg0 \equiv 1$

#### Contraposition law

$(p \implies q) \equiv (\neg q \implies \neg p)$

#### De Morgan's law

$$
	\begin{array}{cc}

	\neg(p \land q) \equiv \neg p \lor \neg q

\\

	\neg(p \lor q) \equiv \neg p \land \neg q
	\end{array}
$$

#### Tautology

$\phi(p_1, ...,p_n)$ is called a tautology iff $\phi(p_1, ...,p_n) \equiv 1$

---

1. iff $\equiv$ if and only if
2. $\neg$ = $\text{\textasciitilde}$
