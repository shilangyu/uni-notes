# first-order logic

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

## interpretation

A first order interpretation is $I = (D, e)$ where $D \ne \emptyset$ and $e$ maps constants, function and predicate symbols as follows:

- each predicate symbol $p$ with $ar(p) = n$ into $e(p) : D^n \to \{0, 1\}$
- each function symbol $f$ with $ar(f) = n$ into a total function of $n$ arguments, $e(f) : D^n \to D$
- maps each variable $x$ to element of $D$, ie $e(x) \in D$

We define $\llbracket F \rrbracket_I \in \{0, 1\}$ to denote whether $F$ is true or false.

- $F$ is **valid** if for all interpretations $I$, $\llbracket F \rrbracket_I = 1$
- $F$ is **satisfiable** if there exists an interpretation $I$, $\llbracket F \rrbracket_I = 1$

## negation normal form

An equivalent representation of a formula where only $\lor$ and $\land$ are used as propositional connectives and all negations can appear only in front of literals/predicates. We replace $\iff$, $\implies$ etc with $\lor$ and $\land$. Then we push all $\neg$ down to literals/predicates using DeMorgan's.

## Skolem function

In a formula that is in negation normal form, replace a subformula $\exists_y F(x_1, \cdots, x_n, y)$ with $F(x_1, \cdots, x_n, g(x_1, \cdots, x_n))$ where $g$ is the Skolem function which takes as arguments all FV of the subformula.

## prenex normal form

We can transform a formula by putting all quantifiers in order on the outside of a formula.

## resolution on FOL clauses

Simple

$$
\frac{C_1 \lor L \quad \neg L \lor C_2}{C_1 \lor C_2}
$$

With instantiation

$$
 \frac{\frac{C_1' \lor L'}{C_1 \lor L} \quad \frac{\neg L'' \lor C_2''}{\neg L \lor C_2}}{C_1 \lor C_2}
$$

To check if we can find a substitution to make $L'$ and $L''$ identical we can use **unification** which has a linear time algorithm.

## term models

A model of a formula is its interpretation that makes a formula true.

We denote the domain as $D$ and n-ary relations as $r \subseteq D^n$.

### smaller model

We look for substructures (sub-interpretations) $(D', \alpha')$ of $(D, \alpha)$ such that

- $D' \subseteq D$
- $\alpha'$
  - $\alpha'(R) = \alpha(R) \cap (D')^{ar(R)}$
  - $\alpha'(f)(x_1, \cdots, x_{ar(f)}) = \alpha(f)(x_1, \cdots, x_{ar(f)})$

$D'$ defines a substructure iff it is closed under the interpretations of all function symbols. If a set of universal FOL formulas is true in a structure, it is true in all substructures.

### smallest substructure

Let $\mathcal L$ be the language and $\mathcal L_F \subseteq \mathcal L$ be the function symbols

$$
\begin{aligned}
	D_0 &= \emptyset \\
	D_{i+1} &= \bigcup_{f \in \mathcal L_F} \{\alpha(f)(x_1, \cdots, x_n) : x_1, \cdots, x_n \in D_i\} \\
	D^* &= \bigcup_{i \ge 0} D_i \\
\end{aligned}
$$

$D^*$ is the domain of the smallest substructure of $(D, \alpha)$. It is countable.

### ground term

A formula containing no variables. $GT_{\mathcal L}$ is the set of all ground terms in language $\mathcal L$

### Herbrand model

$D^* = \{\llbracket t \rrbracket^\alpha : t \in GT_{\mathcal L}\}$

$GT^{i+1} = \{f(t_1, \cdots, t_n) : f \in \mathcal L \land t_1, \cdots, t_n \in GT^i\}$ with $GT^0 = \emptyset$.

Given a language $\mathcal L$ we define an interpretation $(GT_{\mathcal L}, \alpha_H)$, if there are no constants we add a new one to $\mathcal L$. $\alpha_H(f)(t_1, \cdots, t_n) = f(t_1, \cdots, t_n)$. $\alpha_H(R) = \{(t_1, \cdots, t_n) : (\llbracket t_1 \rrbracket^\alpha, \cdots, \llbracket t_n \rrbracket^\alpha) \in \alpha(R)\}$

A set of FOL formulas is unsatisfiable iff for its skolemization there is a finite subset of ground instances which resolution derives empty clause.

## verification-condition generation

Given a program and a specification how to express program correctness as a verification condition (a formula implying that program satisfies the specification)? Programs are formulas. Specifications are formulas.

- program: $x = x + 2$; $y = x + 10$
- relation: $\{((x, y), (x', y')) : x' = x + 2 \land y' = x + 12\}$
- formula: $x' = x + 2 \land y' = x + 12$

An example specification is $x > 0 \implies (x' > 2 \land y' > 12)$. We express that the program satisfies the specification as relation subset:

$$
\{((x, y), (x', y')) : x' = x + 2 \land y' = x + 12\} \subseteq \{((x, y), (x', y')) : x > 0 \implies (x' > 2 \land y' > 12)\}
$$

Which reduces to

$$
x' = x + 2 \land y' = x + 12 \implies (x > 0 \implies (x' > 2 \land y' > 12))
$$

### simple imperative programs

- $F$ - formulas
- $t$ - terms (pure mathematical operations)
- $V = \{x_1, \cdots, x_n\}$ - mutable variables

#### construction

- $c$ - imperative command
- $R(c)$ - formula describing relation between initial and final states of execution $c$
- $\rho(c) = \{(\bar x, \bar x') : R(c)\}$

1. $R(x = t)$: $x' = t \land \bigwedge_{v \in V \setminus \{x\}} v' = v$
2. $R(\text{if}(b)\ c_1\ \text{else}\ c_2)$: $(b \land R(c_1)) \lor (\neg b \land R(c_2))$
3. $R(c_1;c_2)$: $\exists_{\bar x''} R(c_1)[\bar x' := \bar x''] \land R(c_2)[\bar x := \bar x'']$
4. $R(havoc(x))$: $\bigwedge_{v \in V \setminus \{x\}} v' = v$
5. $R(\text{if}(*)\ c_1\ \text{else}\ c_2)$: $R(c_1) \lor R(c_2)$
6. $R(assume(F))$: $F \land \bigwedge_{v \in V} v' = v$

Transforms:

- $\text{if}(b)\ c_1\ \text{else}\ c_2 \equiv \text{if}(*)\ (assume(b); c_1)\ \text{else}\ (assume(\neg b); c_2)$
- $x = e \equiv (havoc(x); assume(x == e))$ given that $x \notin FV(e)$

Alternative syntax:

- $\text{if}(*)\ c_1\ \text{else}\ c_2 \equiv c_1 [] c_2$
- $assume(F) \equiv [F]$

### loop-free programs as relations

| command c                             | $\rho(c)$                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------ |
| $x = t$                               | $\{((x_1, \cdots, x_i, \cdots, x_n), (x_1, \cdots, x_i', \cdots, x_n)) : x_i' = t\}$ |
| $c_1;c_2$                             | $\rho(c_1) \circ \rho(c_2)$                                                          |
| $\text{if}(*)\ c_1\ \text{else}\ c_2$ | $\rho(c_1) \cup \rho(c_2)$                                                           |
| $assume(F)$                           | $\Delta_{\{\bar x : F\}}$                                                            |
