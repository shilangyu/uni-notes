# turing machines

Turing machines are computational models, most universal and powerful. It is used to accept languages, compute functions, and solve problems.

$M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)$

- $Q$ - set of states
- $\Sigma \subset \Gamma$ - input alphabet
- $\Gamma$ - tape alphabet
- $\delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$ - transition function
- $q_0 \in Q$ - initial state
- $B \in \Gamma$, $B \notin \Sigma$ - blank symbol
- $F \subset Q$ - accepting/final states
- stop condition

|$a_1$|$a_2$|$\cdots$|$a_n$|$B$|$B$|$\cdots$

$\delta(q, X) = (p, Y, D)$ produces the next state where $q$ is the current state, $X$ is the current symbol read by the head, $p$ is the new state, $Y$ is the printed symbol, $D$ is the direction ($D \in \{L, R\}$).

## example

Design a turing machine which computes the following function, $f : \mathbb N \to \mathbb N$, $f(n) = \lceil\frac{n}{3}\rceil$

We can use unary system, that is, $n$ is represented as the digit repeated $n$ times ($5_{10} \equiv 00000_1$). Walk along the tape, turn the first leading zero into a new symbol, ie $A$, go to the end of the tape, remove 2 trailing zeros. Repeat. Print all $A$ as a number.

Transition function as a table:

| $\delta$ |      $0$      |      $A$      |      $X$      |      $B$      |
| -------- | :-----------: | :-----------: | :-----------: | :-----------: |
| $q_0$    | $(q_2, X, R)$ |               |               | $(q_6, B, R)$ |
| $q_1$    | $(q_2, A, R)$ |               |               | $(q_6, B, L)$ |
| $q_2$    | $(q_2, 0, R)$ |               |               | $(q_3, B, L)$ |
| $q_3$    | $(q_4, B, L)$ | $(q_6, 0, L)$ | $(q_6, 0, R)$ |               |
| $q_4$    | $(q_L, B, L)$ | $(q_6, 0, L)$ | $(q_6, 0, R)$ |               |
| $q_L$    | $(q_L, 0, L)$ | $(q_1, A, R)$ | $(q_1, X, R)$ |               |
| $q_6$    | $(q_A, 0, L)$ | $(q_6, 0, L)$ | $(q_6, 0, R)$ | $(q_A, B, L)$ |

Empty spaces indicated states that will never happen.

Thus, $M = (\{q_0, q_1, 1_2, q_3, q_4, q_L, q_6, q_A\}, \{0\}, \{0, A, X, B\}, \delta, q_0, B, \{q_A\})$

## configuration

- tape content
- state of control unit
- head position

- $\alpha$, left of the head
- $\beta$, from head to the right to the last non-blank symbol
- $q$

### computation

Sequence of configurations in which,

1. the beginning configuration is the beginning configuration of the machine
2. each next configuration of this sequence is obtained by applying the transition function on the previous configuration
3. last configuration is such that the stop condition is satisfied.

Example from above:

$$
\begin{aligned}
	&q_0 0000000 \vdash X q_2 000000 \vdash X0 q_2 00000 \vdash X00 q_2 0000 \stackrel{3}{\vdash} X00000 q_2 0 \vdash \\
	&\vdash X000000 q_2 \vdash X00000 q_3 0 \vdash X0000 q_4 0 \vdash X000 q_L 0 \vdash X00 q_L 00 \vdash X0 q_L 0000 \vdash \\
	&\vdash q_L X 0000 \vdash X q_1 0000 \vdash XA q_2 000 \stackrel{3}{\vdash} XA000 q_2 \vdash XA00 q_3 0 \vdash XA0 q_4 0 \vdash \\
	&\vdash XA q_L 0 \vdash X q_L A0 \vdash XA q_1 0 \vdash XAA q_2 \vdash XA q_3 A \vdash X q_6 A 0 \vdash q_6 X00 \vdash 0 q_6 00 \vdash q_A 000
\end{aligned}
$$

## guard

First cell of the tape is a guard symbol $\#$. This symbol can only be stored there.

$\delta(q, \#) = (p, \#, R)$

Turing machines in basic model are equivalent to Turing machines with guard.

## accepting state

$M = (Q, \Sigma, \Gamma, \delta, q_0, B, \{ACC\})$, where $ACC$ is the accepting state with stop condition.

## rejecting state

$M = (Q, \Sigma, \Gamma, \delta, q_0, B, \{ACC\}, \{REJ\})$, where $REJ$ is the rejecting state with stop condition. Computation is finished iff the machine switches to $ACC$.

## multitrack turing machines

The tape has several tracks. $M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)$. Input configuration: input data are stored on the first track. All other tracks are filled in with the blank symbol. $\delta: Q \times \Gamma^k \to Q \times \Gamma^k \times \{L, R\}$ where $k$ is the amount of tracks. Again, multitrack turing machines are equivalent to basic models.

1. Turing machine in basic model is a multitrack Turing machine
2. Change alphabet such that each vector of symbols has a new symbol representation: $M = (Q, \Sigma \times \{B\}^{k-1}, \Gamma^k, \delta, q_0, \{B\}^k, F)$

## two way infinite tape

$\cdots$|$B$|$B$|$a_1$|$a_2$|$\cdots$|$a_n$|$B$|$B$|$\cdots$

$M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)$

## non-deterministic TM

For some configurations there may be more than one possible move. Machine picks the move which leads to the acceptation of input.

In general empty entry in transition table means beginning of infinite computation. For sake of simplicity in some cases we might interpret empty entries as rejecting the input. In fact in each empty entry we should start the cleaning procedure and rejecting the input.

Our interpretation of non-determinism relies on interpreting computation as a tree. A non-deterministic machine accepts iff at least one leaf accepts.

### degree of non-determinism

Maximal amount of options is called the degree of non-determinism.

The number of children in the computation tree cannot be bigger than the degree of non-determinism.

### equivalence

The class of non-deterministic TM is equivalent to the class of deterministic TM (in terms of problems they solve).

Given is a non-deterministic TM and some input date. Consider the computation tree for this input. This is a $k$-tree. $k$-degree of non-determinism. At each level we have a finite number of nodes. Let's visit this tree with BFS, if there is an accepting leaf we will come to this leaf after final number of steps. Based on this observation we will construct a deterministic machine which is equivalent to this non-deterministic one.

1. This is a three-tape TM
   1. the first tape is used to keep input data
   2. the second tape stores sequences of numbers of lengths $1, 2, 3, \cdots$ of elements $\{1, 2, \cdots, k\}$
2. for each generated sequence we:
   1. copy input from the first tape to the third tape
   2. simulate computation of non-deterministic turing machine defined by the sequence on the second tape.
   3. if simulation comes to accepting node, then we accept input
   4. otherwise we continue to next sequence

### linear bounded automaton

A TM with a input tape guarded from both sides of the input. Used to accept CSL.

### push down automata

It has a stack and input tape. $A = (Q, \Sigma, \Gamma, \delta, q_0, \vdash, F)$

- $\Gamma$ - stack alphabet
- $\vdash$ - end-of-stack symbol
- $\Sigma \cap \Gamma = \emptyset$
- $\delta: Q \times (\Sigma \cup \{\varepsilon\}) \times \Gamma \to \bigcup_{k=0}^\infty (Q \times \Gamma)^k$
- other symbols mean the same as in TM

Configuration $\gamma q w$:

- $\gamma$ - content of the stack
- $q$ - state
- $w$ - content of input

Computation of push down automata is always finite. It is used only for acceptation of languages, not for computing functions.

A move of a push down automaton is done as follows:

1. Control unit switches to state described by value of transition function.
2. The input head reads the input symbol or does not check input ($\varepsilon$). Drop the read symbol.
3. Stack head reads top symbol from the stack and removes it.
4. Push the string of stack symbols to the stack.
5. If value of transition function includes several pairs then the one is chosen which leads to acceptation of input.

Push down automata is deterministic iff:

1. for each configuration (entry in transition tables) we have at most one possible move
2. if for a given state and stack symbol we have not rejecting move then for the same state and stack symbol and for each input symbol we must have only rejecting moves

For a given push down automaton we can construct a TM which will be equivalent. The opposite is not always true.

#### equivalence of classes of push-down automata and context-free grammars

1. for a given push-down automaton we may design a context-free grammar which is equivalent
1. for a given context-free grammar we may design a push-down automaton which is equivalent

## finite automata

Reads input word letter by letter switching between states. State at the end of the input is the final output. Used to accept/reject regular languages and only those. Transition function is $\delta: Q \times \Gamma \to Q$

### $\varepsilon$ nondeterministic finite automata

The transition function can read empty words, ie change states without consuming letter: $\delta: Q \times (\Sigma \cup \{\varepsilon\}) \to 2^Q$. $\varepsilon$-NFA is equivalent to DFA.

#### $\varepsilon$-closure

All states that can be reached only with $\varepsilon$: $\varepsilon\text{-}Cl(q) = \{p : p \in \delta(q, \varepsilon)\}$

### minimization

Generated DFA from the following methods is minimal (with respect to states ie has the smallest amount of states).

#### through $R_L$

Each state is represented as an equivalence class of the $R_L$ relation. Transition between states is reflected by transitions between equivalence classes when concatenating a letter. Accepting states are those whose equivalence classes contain words in the language.

#### through regular expressions

1. Divide using left quotient language generated by regular expression by all letters of the alphabet
2. Recursively divide results until no new results are obtained (creates loops)
3. States in our automaton are all languages we got from quotients
4. Initial state is the original language
5. Accepting states are states generating empty word
6. Transition between states is obtained from the letter by which we divided

##### left quotient

Of languages: $L_1 \backslash L_2 = \{y \in \Sigma^* : (\exist_{x\in L_2})xy \in L_1\}$

<!--
HOMEWORK:
	design a turing machine whether a given binary word (non empty):
	A) is divisible by 2
	B) is divisible by 4
	C) is divisible by 8

	design a basic model turing machine:
	A) shifts its content one cell right, prints guard at the first place, returns head to the beginning
	B) shifts its content one cell left, dropping symbol from the first cell and puts head over the first cell

	design a push down automaton accepting the following language L = {w in {a, b}^* : w = w^R}
-->
