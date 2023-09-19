# integration of tools

## context free languages (CFL) - properties

- CFL is closed under _union_, _concatenation_, and _Kleene closure_
- CFL is not closed under _intersection_ and _complement_

## CFL $\subset$ CSL

CSL's normal form where $\delta_1 = \delta_2 = \epsilon$ is a context free grammar.

## Equivalence of classes

Equivalent are classes of finite automata, regular expressions, regular grammars

## Myhill-Nerode Theorem

The following conditions are equivalent:

1. $L \in \Sigma^*$ is accepted by some DFA
2. $L$ is union of some equivalence classes of some equivalence relation $\rho$ of finite index which is right-invariant[^1]
3. $R_L$ has finite index

### Proof

#### $1. \implies 2.$

Assume that $A=(Q, \Sigma, \delta, q_0, F)$ is DFA and accepts $L$. Let $x, y \in \Sigma^*$, $x \rho y \equiv \text{ computation for both ends in the same state }$. It is an equivalence relation, has finite index, and is right-invariant.

#### $2. \implies 3.$

$x \rho y \implies x R_L y$. Each equivalence class of $\rho$ is included in some equivalence class of $R_L$. If two languages are related then they are in the same equivalence class and thus are both inside or both outside of $L$.

#### $3. \implies 1.$

Assume that $A=(Q, \Sigma, \delta, q_0, F)$ is DFA and accepts $L$.

- $q_0 \equiv q_{[\epsilon]}$
- $F$ states labeled by classes included in the language
- $\delta(q_{[\epsilon]}, a) = q_{[wa]}$ where $w \in \Sigma^*$ and $a \in \Sigma$

## inner operations in regular languages

- union, concatenation, Kleene closure
  - $+$, $\circ$, $^*$ - operations on regular expressions are the corresponding operations on languages
- complement, intersection

Let $L_1$ and $L_2$ be regular languages. Let $A_k = (Q_k, \Sigma, \delta_k, q_0^k, F_k)$ be their automaton.

- $\bar A_k = (Q_k, \Sigma, \delta_k, q_0^k, Q_k \backslash F_k)$ accepts $\bar L_k$.
- $A_1 \times A_2 = (Q_1 \times Q_2, \Sigma, (\delta_1, \delta_2), (q_0^1, q_0^2), F_1 \times F_2)$ accepts $L_1 \cap L_2$

### preposition

- The class of finite automata is equivalent to the class of regular expressions
- The class of finite automata is equivalent to the class of regular grammars

## RgL $\subsetneq$ CFL

- Finite automata are special cases of push down automata.
- Regular grammars are special cases of context free grammars.
- $L = \text{same amount of 'a' as 'b'}$ - it is context free but not regular

## CSL $\subsetneq$ RkL

Let $G = (V, T, P, S)$. Let $V = \{v_1, \cdots, v_m\}$, $T = \{t_1, \cdots, t_n\}$.

<!--
HOMEWORK:
  - prove {a^m b^m c^m d^m : m > 0} is not context free and prove it is context sensitive
  - prove { uu : u \in {a,b}^* } is not context free and prove it is context sensitive
  - prove $1. \implies 2.$ rho is an equivalence relation
  - repeat Myhill-Nerode proof
 -->

[^1]: $u \rho v \implies uw \rho vw$
