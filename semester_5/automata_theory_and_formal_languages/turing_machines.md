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

\newcommand{\vertchar}[1]{\ooalign{#1\cr\hidewidth$|$\hidewidth}}

First cell of the tape is a guard symbol $\vertchar{C}$. This symbol can only be stored there.

$\delta(q, \vertchar{C}) = (p, \vertchar{C}, R)$

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

<!--
HOMEWORK:
	design a turing machine whether a given binary word (non empty):
	A) is divisible by 2
	B) is divisible by 4
	C) is divisible by 8

	design a basic model turing machine:
	A) shifts its content one cell right, prints guard at the first place, returns head to the beginning
	B) shifts its content one cell left, dropping symbol from the first cell and puts head over the first cell
-->
