# algorithms

## decision problem

A decision problem is a problem for which the answer is YES or NO. It can be defined as a finite set of parameters.

- $\Pi$ - a decision problem
- $D_\Pi$ - set of instances of $\Pi$
- $Y_\Pi \subseteq D_\Pi$ - the set of YES instances
- $\bar \Pi$ - the complementary problem to $\Pi$ ($D_{\bar\Pi} = D_\Pi$, $Y_{\bar\Pi} = D_{\Pi} \setminus Y_\Pi$)

### instance of the problem

If we fix the values of the parameters we get an instance of the problem.

### encoding

Encoding of a decision problem $\Pi$ is a function $e: D_\Pi \to \Sigma^*$ where $\Sigma$ is an alphabet. For a decision problem $\Pi$ and an encoding $e$ fo $\Pi$ there is a corresponding language

$$
L(\Pi,e) = L_\Pi = \{e(I) \in \Sigma^* : I \in Y_\Pi\}
$$

$\Pi$ is called decidable if $L_\Pi \in R$ otherwise $\Pi$ is called undecidable.

#### reasonable encodings

Example: encoding of natural number $n$ on the tape of a TM:

- $\Sigma = \{0, 1\}$ - reasonable encoding (length of $\log n$)
- $\Sigma = \{0, 1, \cdots, 9\}$ - reasonable encoding (length of $\log_{10} n$)
- $\Sigma = \{1\}$ - not reasonable encoding (length of $n$)

subjective

### post correspondence problem (PCP)

Instance: two lists $A = w_1, w_2, \cdots, w_k$ and $B = x_1, x_2, \cdots, x_k$ of strings over $\Sigma$. A solution is a finite sequence of indices $i_1, i_2, \cdots, i_m$ $m \ge 1$ such that $w_{i_1} \circ w_{i_2} \circ \cdots \circ w_{i_m} = x_{i_1} \circ x_{i_2} \circ \cdots \circ x_{i_m}$

### modified post correspondence problem (MPCP)

It is the standard PCP but with the condition that $i_1 = 1$

**lemma**: if PCP is decidable then MPCP is decidable.

If there exists an algorithm for solving PCP then there exists an algorithm for solving MPCP.

**theorem**: PCP is undecidable. By lemma it suffices to show that if MPCP is decidable then $L_u \in R$.

## optimization problem

A problem of finding a minimum/maximum of a objective function.

### decision problem <-> optimization problem

$G$ - graph,

| optimization problem | decision problem                                            |
| -------------------- | ----------------------------------------------------------- |
| $\chi(G) =\ ?$       | does exist a proper vertex coloring of $G$ with $k$ colors? |

## encoding

- $\Pi$ - a decision problem
- $|\cdot|: D_\Pi \to N$ instance size function, should be independent of reasonable encodings

For $I \in D_\Pi$ $|I| =$ size of $I$.

For every reasonable encoding $e$ there exist polynomials $p, p'$ such that $|I| \le p(|e(I)|)$ and $|e(I)| \le p'(|I|)$ for every $I \in D_\Pi$.

Example of standard encoding scheme:

$\Sigma = \{0, 1, -, [, ], (, ), ,\}$

We recursively define structured strings

1. $k\in \mathbb Z$ is represented as a binary string (preceded with $-$ if $k < 0$)
2. if $x$ is a structured string then $[x]$ is a structured string that can be used as a name of some object
3. if $x_1, \cdots, x_n$ are structured string representing objects $X_1, \cdots, X_n$ then $(x_1, \cdots, x_n)$ is a structured string

## complexity

$A$ - algorithm, $I \in D_\Pi$, $|I| = $ input size = the number of cells of $A$ used to input $I$ ($|e(I)|$)

The time complexity of $A$ is a function $T_A: N \to N$

$$
T_A(n) = \max_{I \in D_\Pi, |I| = n}\{\text{the number of steps performed by A during the computation on input I}\}
$$

### non-deterministic algorithm

NTM with stop property. The tree of computation is finite. Halts for every sequence of choices.

Let $A$ be a non-deterministic algorithm for solving $\Pi$.

The time complexity of $A$ is a function $T_A: N \to N$

$$
T_A(n) = \max_{I \in D_\Pi, |I| = n}\{\sup(\text{number of moves in every path from root to a leaf in the computation tree of A on input I})\}
$$

### asymptotic notation

#### big O

$f, g: N \to \mathbb R$ (increasing functions)

$f(n) = O(g(n))$ if $\exists_{C > 0} \exists_{n_0 \in N} \forall_{n \ge n_0} f(n) \le C \cdot g(n)$

$A$ is called a polynomial time algorithm if there exists a polynomial $p$ such that $T_A(n) = O(p(n))$. Otherwise $A$ is called an exponential time algorithm.

## polynomial time transformation

### of languages

$L_1 \subseteq \Sigma_1^*$, $L_2 \subseteq \Sigma_2^*$ - languages

A polynomial time transformation from $L_1$ to $L_2$ is a function $f: \Sigma_1^* \to \Sigma_2^*$ such that

1. there exists a deterministic polynomial time algorithm computing $f$
2. $\forall_{x \in \Sigma_1^*} x\in L_1 \iff f(x) \in L_2$

denoted by $l_1 \alpha L_2$

### of decision problems

$\Pi_1, \Pi_2$ - decision problems

A polynomial time transformation from $\Pi_1$ to $\Pi_2$ is a function $f: D_{\Pi_1} \to D_{\Pi_2}$ such that

1. there exists a deterministic polynomial time algorithm computing $f$
2. $\forall_{I \in D_{\Pi_1}} I \in Y_{\Pi_1} \iff f(I) \in Y_{D_{\Pi_2}}$

denoted by $\Pi_1 \alpha \Pi_2$

This relation is reflexive and transitive.

## polynomial equivalence

- $L_1, L_2$ are polynomial equivalent if $L_1 \alpha L_2$ and $L_2 \alpha L_1$
- $\Pi_1, \Pi_2$ are polynomial equivalent if $\Pi_1 \alpha \Pi_2$ and $\Pi_2 \alpha \Pi_1$

## classes

- $P$ - the class of problems that can be solved by a deterministic polynomial time algorithms
- $NP$ - the class of problems that can be solved by a non-deterministic polynomial time algorithm
- $coNP = \{\bar\Pi: \Pi \in NP\}$
- $NPC = \{\Pi \in NP : \forall_{\Pi' \in NP} \Pi' \alpha \Pi\}$ (NP-complete)

---

- polynomial time - fast
- exponential time - slow
- problems from P - easy
- problems not from P - hard
- problems from NP - solve by non-deterministic algorithm in polynomial time $\lor$ check the solution by deterministic algorithm in polynomial time

Theorem: $L \in NP \iff$ there exists a language $L_{\text{check}} \in P$ and a polynomial $p$ such that $L = \{x : \exists_{y} (x, y) \in L_{\text{check}} \land |y| \le p(|x|)\}$. $y$ is called a certificate for $x$.

Proof:

$\impliedby$

Let $M$ be a deterministic algorithm such that $L(M) = L_{\text{check}}$. We construct a non-deterministic algorithm $M'$ such that $L(M') = L$. First $M'$ guesses $y$ (the number of candidates is bounded because $|y| \le p(|x|)$). Then $M'$ runs $M$ on $(x, y)$ and checks the answer.

$\implies$

Let $M$ be a nondeterministic algorithm such that $L(M) = L$. Computation of $M$ on input string $x$. Any path from the root in the tree of computation of $M$ on input $x$ has length $\le p(|x|)$ for some polynomial $p$. We define $L_{\text{check}}$. $(x, y) \in L_{\text{check}} \iff y$ is a code of computation path of $M$ on input $x$ which ends in accepting state. Now we show that $L_{\text{check}} \in P$. We construct a deterministic algorithm $M'$ such that $L(M') = L_{\text{check}}$. $M'$ check if $y$ is a correct code of computation path of $M$ on input $x$ and checks if it ends in accepting state.

## NPC

If $\Pi_1, \Pi_2 \in NP$, $\Pi_1 \in NPC$ and $\Pi_1 \alpha \Pi_2$ then $\Pi_2 \in NPC$.

If $\Pi \in NP$ then $\Pi$ can be solved on DTM in exponential time. Question: if $\Pi \in NP$ then can $\Pi$ be solved on DTM in polynomial time?
