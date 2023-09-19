# computability

See [formal languages and automata theory](../../semester_5/automata_theory_and_formal_languages/) for prerequisite material.

## language

Let $L_1, L_2 \subseteq \Sigma^*$ be two languages.

### concatenation

$L_1 \circ L_2 = \{uv: u \in L_1, v \in L_2\}$

### power

- $L^0 = \{\varepsilon\}$
- $L_n = L^{n-1} \circ L$
- $L^* = \bigcup_{n=0}^\infty L^n$
- $L^+ = \bigcup_{n=1}^\infty L^n$

## grammar

Let $G = (V, T, P, S)$ be a grammar.

let $\eta, \xi \in (V \cup T)^*$

### relation $\implies$ (direct derivation)

$\eta \implies \xi \iff \exists_{\alpha, \beta, \gamma, \delta \in (V \cup T)^*} \eta = \gamma\alpha\delta, \xi = \gamma\beta\delta \land \alpha \to \beta \in P$

### relation $\implies{}^*$ (derivation)

$\eta \implies{}^* \xi \iff \exists_{n\in\mathbb N} \exists_{\eta_1, \eta_2, \cdots, \eta_n} \eta = \eta_1 \implies \eta_2 \implies \cdots \implies \eta_n = \xi$

## turing machine

$M = (Q, \Sigma, \Gamma, \delta, q_o, B, F)$

We can imagine a TM as a machine consisting of a couple of:

1. **a tape** which is bounded from the left side and unbounded from the right side, it is divided into cells
2. **a head** which can read from and write to the tape
3. **a finite control** (state register) which is in some state and can change during the computation

Suppose that the control is in a state $p$, the head reads a symbol $X$ and $\delta(p, X) = (q, Y, ?)$ where $? \in \{L, R\}$ (left/right). Then the control changes its state to $q$, the head write $Y$ on the tape in the observed cell and moves one cell to the lef if $? = L$ or to the right if $? = R$

A **configuration** of a TM M is a sequence $\alpha_1 q \alpha_2$ where

- $q \in Q$ is the current state of the control
- $\alpha_1$ is the sequence of symbols on the tape starting from the first cell ending in the cell preceding the cell observed by the head
- $\alpha_2$ is the sequence of symbols on the tape starting from the cell observed by the head ending in the last cell to the right that does not contain the blank symbol

Basic model of TM "$\iff$" TM halts after reading an accepting state "$\iff$" TM with multitrack tape "$\iff$" multi-tape TM "$\iff$" nondeterministic turing machines

Here, "$\iff$" refers to equivalence in the sense that they recognize the same set of languages.

### TM with stop property

$M = (Q, \Sigma, \Gamma, \delta, q_0, B, q_{acc}, q_{rej})$ + the assumption that M halts on any input string and after finishing the computation $M$ is either in $q_{acc}$ or $q_{rej}$.

TM with stop property is not equivalent with basic model TM. TM with stop property is also simply called "an algorithm". Set of languages accepted by TMs with stop property $\subsetneq$ set of languages accepted by TMs.

A language $L$ is called recursive if there exists a TM with stop property $M$ such that $L(M) = L$. Class R.

| grammars          | languages              | machines                  | class |
| ----------------- | ---------------------- | ------------------------- | ----- |
| regular           | regular                | finite state automatons   | Rg    |
| context-free      | context-free           | push-down automatons      | Cf    |
| context-sensitive | context-sensitive      | linear-bounded automatons | Cs    |
| ?                 | recursive              | TMs with stop property    | R     |
| unrestricted      | recursively enumerable | TMs                       | Re    |

All - all languages

### binary encoding

Encoding of a TM into a binary sequence

$M = (\{q_1, \cdots, q_n\}, \{0, 1\}, \{0, 1, B\}, \delta, q_1, B, \{q_2\})$. For convenience we set $X_1 = 0$ $X_2 = 1$, $X_3 = B$ $K_1 = L$, $K_2 = R$.

We will encode the moves of $M$ $\iff$ we will encode $\delta$.

$\delta(q_i, X_j) = (q_k, X_m, K_l) \mapsto 0^i10^j10^k10^m10^l$. The code of $M$ is $111\text{code}_111\text{code}_211\cdots 11\text{code}_r111$ where $\text{code}_1, \cdots, \text{code}_r$ are the codes of all moves of $M$.

Encoding is not a bijection. One $TM$ can produce many codes. One code can produce one or more TM.

- $\left\langle M \right\rangle$ - any code of $M$
- $\left\langle M, w \right\rangle = \left\langle M \right\rangle w$

We assume that if $\left\langle M \right\rangle$ is not a correct code of a TM then $L(M) = \emptyset$
