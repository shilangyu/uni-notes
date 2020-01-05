# Boolean algebra

#### Logical statement

- `true` | `false`
- no variables

`p`, `q`, `r` - propositional variables

`a`, `b`, `c` - values

#### Logical connectives

- IF...THEN... (implication): $p \implies q \equiv \neg p \lor q$[^2]
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

NOT (negation)

$\neg0 \equiv 1$

#### Contraposition law

$(p \implies q) \equiv (\neg q \implies \neg p)$

#### De Morgan's law

$\neg(p \land q) \equiv \neg p \lor \neg q$

$\neg(p \lor q) \equiv \neg p \land \neg q$

$\neg(\forall x \in \mathbb{R}\ \phi(x)) \equiv (\exists x \in \mathbb{R}\ \neg\phi(x))$

#### Tautology

$\phi(p_1, \cdots,p_n)$ is called a tautology iff[^1] $\phi(p_1, \cdots,p_n) \equiv 1$

#### quantifiers

Assumption: $x \in \{ 1, 2, \cdots, 10 \}$

- for every (all have to be true): $\forall x\ \phi(x)$
  - same as $\{x \in \mathbb{R}: \phi(x)\} = \mathbb{R}$
- there exists (one has to be true): $\exists x\ \phi(x)$
  - same as $\{x \in \mathbb{R}: \phi(x)\} \ne \emptyset$

**Order matters**: $(\forall x)(\exists y)\ x > y \equiv 1$ while $(\exists x)(\forall y)\ x > y \equiv 0$

[^1]: iff $\equiv$ if and only if $\equiv \iff$
[^2]: $\neg \equiv\ \sim$
