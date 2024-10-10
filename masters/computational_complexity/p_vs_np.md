# P vs NP

## TIME complexity

$\mathsf{TIME}(t(n))$ = the set of languages that can be decided by a TM in time $O(t(n))$

$$
\mathsf P = \bigcup_{k = 1}^\infty \mathsf{TIME}(n^k)
$$

## decider

A **decider** for a language $L$ is a TM M such that given $x \in \Sigma^*$

- if $x \in L$ then M accepts $x$
- if $x \notin L$ then M rejects $x$

## verifier

A **verifier** for a language $L$ is a TM M such that given $x \in \Sigma^*$

- if $x \in L$ then there exists C such that M accepts $\langle x, C \rangle$
- if $x \notin L$ then for every C, M rejects $\langle x, C \rangle$

## $\mathsf{NP}$

The class of languages that has verifiers that work in polynomial time. Or equivalently, the class of languages that has nondeterministic deciders that work in polynomial time.

$$
\mathsf{NP} = \bigcup_{k = 1}^\infty \mathsf{NTIME}(n^k)
$$

### reductions

Showing that to solve a problem A it is sufficient to solve the problem B.

#### poly-time reducible

$A \le_P B$: language A is poly-time reducible to B

### $\mathsf{NP}$-completeness

A language $L$ is $\mathsf{NP}$-complete when

1. $L$ is in$\mathsf{NP}$
2. $\forall_{L' \in \mathsf{NP}} L' \le_P L$

## undecidable language

Let $M_i$ be the i-th turing machine. Let $\langle M_i \rangle$ be its encoding. There is a countable number of TMs, so we can enumerate all of them. Consider the language $D = \{\langle M \rangle : M(\langle M \rangle) = 0\}$, ie the language of all encodings of turing machines that do not accept their own encoding as input.

Assume $M_i$ to be the TM recognizing $D$.

- if $M_i(\langle M_i \rangle) = 1$ then $\langle M_i \rangle \in D$ but that means that $M_i(\langle M_i \rangle) = 0$, contradiction
- if $M_i(\langle M_i \rangle) = 0$ then $\langle M_i \rangle \notin D$ but that means that $M_i(\langle M_i \rangle) = 1$, contradiction

So there is no $M_i$ that recognizes $D$.

## time hierarchy theorem

$$
	\mathsf{TIME}(o(f(n))) \subsetneq \mathsf{TIME}(f(n) \log f(n))
$$

## universal turing machine

There exists a TM $U$ such that $U(\langle M, x \rangle) = M(x)$ which runs in $c_M \cdot t^2_M(|x|)$

## oracle TMs

Denoted by OTM. Let $A \subseteq \{0, 1\}^*$ be an arbitrary language. Then $M^A$ is an OTM is a TM which additionally is able to answer the query of $x \stackrel{?}{\in} A$ in a single step.

### complexity classes

- $\mathsf P^A$ is the set of languages decidable by some poly-time OTM $M^A$
- $\mathsf{NP}^A$ is the set of languages decidable by some poly-time N-OTM $M^A$

## space complexity

Space complexity of a TM is the maximal number of work cells accessed by the TM. A work cell is separate from the input.

$$
	\mathsf{SPACE}(s(n)) = \{L : \exists \text{TM deciding } L \text{ in space } O(s(n))\}
$$

- $\mathsf{SPACE}(O(1)) =$ regular languages
- $\mathsf L = \mathsf{SPACE}(\log n)$
- $\mathsf{NL} = \mathsf{NSPACE}(\log n)$
- $\mathsf{PSPACE} = \bigcup_{k = 1}^\infty \mathsf{SPACE}(n^k)$
- $\mathsf{SAT} \in \mathsf{SPACE}(n)$
- $\mathsf{NP} \subseteq \mathsf{PSPACE}$

### STCONN

Given a directed graph, does there exist a path between two vertices?

- $\mathsf{STCONN} \in \mathsf{NL}$
- $\mathsf{STCONN} \stackrel{?}{\in} \mathsf{L}$ if yes, then $\mathsf{NL} = \mathsf{L}$
- $\mathsf{UndirectedSTCONN} \in \mathsf{L}$ (Reingold '05)

#### $\mathsf{STCONN} \in \mathsf{SPACE}(\log^2 n)$ (Savitch '70)

Let $G = ([n], E)$. Then the following routine solves the problem, invoked with Path(s, t, n):

Path(u, v, k)

- if $k \le 1$ return ($u = v$) $\lor$ $(u, v) \in E$
- else for each $w \in [n]$
  - if Path(u, w, k/2) $\land$ Path(w, v, k/2) return TRUE
- return FALSE

### space vs time

- $\mathsf{TIME}(t(n)) \subseteq \mathsf{SPACE}(t(n))$
- $\mathsf{SPACE}(s(n)) \subseteq \mathsf{TIME}(2^{O(s(n))})$

$$
\mathsf{L} \subseteq \mathsf{NL} \subseteq \mathsf{P} \subseteq \mathsf{PSPACE} \subseteq \mathsf{EXP}
$$

### $\mathsf{PSPACE}$-completeness

$\mathsf{TQBF}$ is SAT, but with leading quantifiers. Let $Q_i \in \{\forall, \exists\}$. Let $\varphi$ be in CNF.

$$
Q_1x_1Q_2x_2 \cdots Q_nx_n \varphi(x)
$$

$\mathsf{TQBF}$ is $\mathsf{PSPACE}$-complete
