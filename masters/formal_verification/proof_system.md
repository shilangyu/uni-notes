# proof system

A set of logical formulas $\mathcal F$ then a proof system is $(\mathcal F, \text{Infer})$ where $\text{Infer} \subseteq \mathcal F^* \times \mathcal F$ a decidable set of inference steps

- a set is decidable iff there is a program to check if an element belongs to it
- given a set $S$ notation $S^*$ denotes all finite sequences with elements from $S$

Inference step $((P_1, \cdots, P_n), C) \in \text{Infer}$ by $\frac{P_1 \cdots P_n}{C}$ where $P_i$ are called premises and $C$ the conclusion. An inference step is called an axiom instance when $n = 0$ (it has no premise). Given a proof system $(\mathcal F, \text{Infer})$ a proof is finite sequence of inference steps such that, for every inference step, each premise is a conclusion of a previous step.

## provable

We say $F \in \mathcal F$ is provable from assumptions (axioms) $A$ iff there exists a derivation from $A$ in $\text{Infer}$ that contains an inference step whose conclusion is $F$. Denoted by $A \vdash_{\text{Infer}} F$

## semantic consequence

For $A \subseteq \mathcal F$ and $C \in \mathcal F$ we say $C$ is a semantic consequence of $A$ iff for every environment $e$ if $e \mid= P$ for all $P \in A$ then $e \mid= C$. We denote it by $A \mid= C$.

## soundness

A step $((P_1, \cdots, P_n), C) \in \text{Infer}$ is sound iff $\{P_1, \cdots, P_n\} \mid= C$. A proof system $\text{Infer}$ is sound if every inference rule is sound.

If $\text{Infer}$ is sound then $A \vdash_{\text{Infer}}F \implies A \mid= F$

## completeness

A proof system is complete if it derives all formulas we want it to derive.

## decision and simplification (resolution)

Consider propositional formulas with $\lor$, $\land$, $\neg$

- "case analysis" proof rule $\frac{F \quad G}{F[x := 0] \lor G[x := 1]}$
- simplification rules where the inference is $\{((F), F') : F' \text{ is simplified } F\}$
  - $0 \land F \leadsto 0$
  - $1 \land F \leadsto F$
  - $0 \lor F \leadsto F$
  - $1 \lor F \leadsto 1$
  - $\neg 0 \leadsto 1$
  - $\neg 1 \leadsto 0$

We call it $\text{Infer}_D$

## satisfiability

A set $A$ of formulas is satisfiable if there exists $e$ such that for every $F \in A$, $e \mid= F$.

### soundness consequence

If $A \vdash_{\text{Infer}_D} 0$ then $A$ is unsatisfiable.

### refutation completeness

If a finite set $A$ is unsatisfiable then $A \vdash_{\text{Infer}_D} 0$.

## conjunction form

A propositional _literal_ is either a variable ($x$) or its negation ($\neg x$). A _clause_ is a disjunction of literals. We can represent a clause as a finite set of literals. For example $a \lor \neg b \lor c$ is represented as $\{a, \neg b, c\}$. Zero is represented as an empty clause. A formula is a finite set of clauses interpreted as a conjunction. This is a conjunctive normal form. For example $a \land b \land (\neg a \lor \neg b)$ is represented as $A = \{\{a\}, \{b\}, \{\neg a, \neg b\}\}$.

If $C$ is a clause then $\llbracket C \rrbracket_e = 1$ iff there exists a literal $L \in C$ such that $\llbracket L \rrbracket_e = 1$.

### clausal resolution rule

We can represent the case analysis rule from resolution as $\frac{C_1 \cup \{x\} \quad C_2 \cup \{\neg x\}}{C_1 \cup C_2}$. This is called the clausal resolution rule.

A finite set of clauses $A$ is unsatisfiable iff there exists a derivation of the empty clause from $A$ using clausal resolution.

### unit resolution

A unit clause is a clause with exactly one literal. Given a literal $L$ its complement is $\bar L$ defined by $\overline x = \neg x$, $\overline{\neg x} = x$. Unit resolution is $\frac{C \quad \{L\}}{C \setminus \{\bar L\}}$.

## equivalence and equisatisfiability

- $F_1$ and $F_2$ are equivalent when $\forall_e \llbracket F_1 \rrbracket_e = \llbracket F_2 \rrbracket_e$
- $F_1$ and $F_2$ are equisatisfiable when $F_1$ is satisfiable whenever $F_2$ is satisfiable

## flattening

Let $F$ and $G$ be formulas and let $x \notin FV(F)$. Then $F$ is equisatisfiable with $(x \iff G) \land F[G := x]$

## SAT solvers

Takes as input a set of clauses and determines whether it is satisfiable.

## first-order logic

FOL has predicates and functions. Their meaning is constrained through axioms,

To prove whether a property holds, we can proceed with:

- describe the property using a formula $F$
- describe the functions and relations in $F$ using a sequence of axioms $S$
- check if the sequence $(\neg F; S)$ is contradictory. If yes, then $F$ follows from $S$

Example FOL formula:

$$
(\forall_x\exists_y R(x, y)) \land \\
(\forall_x\forall_y(R(x, y) \implies \forall_z R(x, f(y, z)))) \land \\
(\forall_x (P(x) \lor P(f(x, a)))) \implies \\
\forall_x\exists_y (R(x, y) \land P(y))
$$

A signature (language) of FOL system is $\mathcal Z$ a countable set of function symbols (constants are functions with arity 0 ($ar(c) = 0$)) and predicate symbols,

### interpretation

A first order interpretation is $I = (D, e)$ where $D \ne \emptyset$ and $e$ maps constants, function and predicate symbols as follows:

- each predicate symbol $p$ with $ar(p) = n$ into $e(p) : D^n \to \{0, 1\}$
- each function symbol $f$ with $ar(f) = n$ into a total function of $n$ arguments, $e(f) : D^n \to D$
- maps each variable $x$ to element of $D$, ie $e(x) \in D$

We define $\llbracket F \rrbracket_I \in \{0, 1\}$ to denote whether $F$ is true or false.

- $F$ is **valid** if for all interpretations $I$, $\llbracket F \rrbracket_I = 1$
- $F$ is **satisfiable** if there exists an interpretation $I$, $\llbracket F \rrbracket_I = 1$

### Skolem function

In a formula that is in negation normal form, replace a subformula $\exists_y F(x_1, \cdots, x_n, y)$ with $F(x_1, \cdots, x_n, g(x_1, \cdots, x_n))$ where $g$ is the Skolem function.
