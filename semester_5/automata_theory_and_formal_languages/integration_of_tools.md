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

1. $L \in \sum^*$ is accepted by some DFA
2. $L$ is union of some equivalence classes of some equivalence relation $\rho$ of finite index which is right-invariant[^1]
3. $R_L$ has finite index

### Proof

#### $1. \implies 2.$

Assume that $A=(Q, \sum, \delta, q_0, F)$ is DFA and accepts $L$. Let $x, y \in \sum^*$, $x \rho y \equiv \text{ computation for both ends in the same state }$. It is an equivalence relation, has finite index, and is right-invariant.

#### $2. \implies 3.$

$x \rho y \implies x R_L y$. Each equivalence class of $\rho$ is included in some equivalence class of $R_L$. If two languages are related then they are in the same equivalence class and thus are both inside or both outside of $L$.

#### $3. \implies 1.$

Assume that $A=(Q, \sum, \delta, q_0, F)$ is DFA and accepts $L$.

- $q_0 \equiv q_{[\epsilon]}$
- $F$ states labeled by classes included in the language
- $\delta(q_{[\epsilon]}, a) = q_{[wa]}$ where $w \in \sum^*$ and $a \in \sum$

<!--
HOMEWORK:
  - prove {a^m b^m c^m d^m : m > 0} is not context free and prove it is context sensitive
  - prove { uu : u \in {a,b}^* } is not context free and prove it is context sensitive
  - prove $1. \implies 2.$ rho is an equivalence relation
  - repeat Myhill-Nerode proof
 -->

[^1]: $u \rho v \implies uw \rho vw$
