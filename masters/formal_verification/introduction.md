# introduction

Formal verification is about rigorously proving that a computer system satisfies a specification.

1. define a mathematically rigorous notion of a system satisfying a specification
2. use combination of automated tools and human effort to construct the proof

Theorem provers:

- decision procedures: algorithms upper bounds on time by which they terminate with yes/no answer
- semi-decision procedures: no upper bound, but for every theorem there exists a time by which they discover it is true
- heuristics: even if formula is valid, they may run forever, or say "do not know"

## transition system

A transition system $M = (S, I, r, A)$:

- $S$ - the set containing all states of the system
- $I \subseteq S$ is the set of possible initial states
- $r \subseteq S \times A \times S$ - transition relation. $(s, a, s') \in r$ means: with the environment signal $a$, system can move in one step from state $s$ to $s'$
  - we mostly assume that $a$ is the input to the system
  - in the special case that $r : S \times A \to S$ we say the system is deterministic
- $A$ - a set of signals with which the system communicates with the environment

$\bar r = \{(s, s') : \exists_a \in A (s, a, s') \in r\}$

- composition of relations $r_1 \circ r_2 = \{(x, z) : \exists_y (x, y) \in r_1 \land (y, z) \in r_2\}$
- iterations $r_1^0 = \Delta = \{(x, x) : x \in A\}$, $r_1^{n+1} = r_1 \circ r_1^n$
- transitive closure $r_1^* = \bigcup_{n \ge 0} r_1^n$. Relates endpoints of all finite paths in graph given by $r_1$
- image of a set under relation $r_1[X] = \{y : \exists_{x \in X} (x, y) \in r_1\}$

### traces

$Traces(M)$ is the set of all traces of $M$. A trace is a sequence from the initial state to any intermediate state.

$Reach(M) = \{s_n : \exists_{n} \exists(s_0, a_0, s_1, a_1, \cdots, s_n\} \in Traces(M)\}$ are reachable states of $M$.

$Reach(M) = \bar r^*[I]$

### post

If $X \subseteq S$, $post(X) = \bar r[X]$

- $post^0(X) = X$
- $post^{n+1}(X) = post(post^n(X))$

$\bigcup_{n \ge 0} post^n(I) = Reach(M)$

### invariant and inductive invariant

- invariant $P$ of the system $M$ is any superset of reachable states $Reach(M) \subseteq P$
- inductive invariant $Ind$ is a set $Ind \subseteq S$ that satisfies the following:
  - $I \subseteq Ind$
  - if $s \in Ind$ and $(s, a, s') \in r$ then $s' \in Ind$
- for invariant $P$, $Ind$ is an inductive strengthening of $P$ if $Ind$ is an inductive invariant and $Ind \subseteq P$ ($Ind$ is an inductive hypothesis that proves $Reach(M) \subseteq Ind \subseteq P$)

## sequential circuits

Encoding finite transition systems using bits with sequential circuits. If we pick $n \ge \log_2|S|$ and $m \ge \log_2|A|$:

- each element of $S$ can be $\bar s \in \{0, 1\}^n$, $S = \{0, 1\}^n$
- each element of $A$ can be $\bar a \in \{0, 1\}^m$, $A = \{0, 1\}^m$
- initial state defined by characteristic function $S \to \{0, 1\}$
- deterministic transition relation as function $(S \times A) \to S$

### boolean function representation

Since $r \subseteq \{0, 1\}^n \times \{0, 1\}^m \times \{0, 1\}^n$, then $((s_1, \cdots, s_n), (a_1, \cdots, a_m), (s'_1, \cdots, s'_n)) \in r$ can be represented as a propositional formula with variables above that is true when the tuple belongs to $r$.

Let $p^1 = p$ and $p^0 = \neg p$ for some propositional formula $p$. We represent $r$ in the disjunctive normal form:

$$
\bigvee_{((v_1, \cdots, v_n), (u_1, \cdots, u_m), (v'_1, \cdots, v'_n)) \in r} (\bigwedge_{1 \le i \le n}s_i^{v_i} \land \bigwedge_{1 \le i \le m}a_i^{u_i} \land \bigwedge_{1 \le i \le n}(s'_i)^{v'_i})
$$

### environment

An environment $e$ is a partial map from propositional variables to $\{0, 1\}$. For $\bar p = (p_1, \cdots, p_n)$ and $\bar v = (v_1, \cdots, v_n)$ we denote $[\bar p \to \bar v]$ the environment given by $e(p_i) = v_i$.

$\llbracket F \rrbracket_e = 1 \iff e \mid= F$ meaning $F$ is true under the environment $e$.

### satisfiability

Formula $F$ is satisfiable iff there exists $e$ such that $e \mid= F$. Otherwise $F$ is unsatisfiable. SAT determines satisfiability given a formula.

### free variables

Free variables are propositional variables in a formula except the quantified ones. Free variables of a formula are denoted by $FV(F)$. We denote quantification by $F[c := G]$ where every occurrence of $c$ in $F$ is replaced with $G$.

### validity and equivalence

A formula is valid iff for all $e$, $e \mid= F$. $F$ is valid iff $\neg F$ is unsatisfiable.

Formulas $F$ and $G$ are equivalent iff for every $e$, $e \mid= F \iff e \mid= G$. $F$ and $G$ are equivalent iff $F = G$ is valid.

### representation

So a sequential circuit is $C = (\bar S, Init, R, \bar x, \bar a)$ where

- $\bar s = (s_1, \cdots, s_n)$ is the vector of state variables
- $Init$ is boolean formula with $FV(Init) \subseteq \{s_1, \cdots, s_n\}$
- $\bar a = (a_1, \cdots, a_m)$ is the vector of input variables
- $\bar x = (x_1, \cdots, x_k)$ is the vector of auxiliary variables for $R$
- $R$ is a boolean formula called the transition formula, where $FV(R) \subseteq \{s_1, \cdots, s_n, a_1, \cdots, a_m, x_1, \cdots, x_k, s'_1, \cdots, s'_n\}$

The transition system for $C$ is $(S = \{0, 1\}^n, I, r, A = \{0, 1\}^m)$

- $I = \{\bar v \in S : [\bar s \to \bar v] \mid=Init\}$
- $r = \{(\bar v, \bar u, \bar v') \in S \times A \times S : [(\bar s, \bar a, \bar s') \to (\bar v, \bar u, \bar v')] \mid= \exists_{\bar x}R\}$

### checking invariants

To check whether $Inv$ is an inductive invariant we check the negation of conditions.

1. $Init \land \neg Inv$
2. $Inv \land R \land \neg Inv[\bar s := \bar s']$

If these SAT queries return unsat, we know $Inv$ is an inductive invariant.
