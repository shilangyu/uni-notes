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

### $\text{SAT}$ problem (satisfiability)

Logic formula in CNF = a conjunction of clauses, each clause is a disjunction of literals, a literal is a variable or negated variable.

Example: $F = (x_1 \lor \neg x_2 \lor x_3) \land (\neg x_1 \lor x_2) \land (\neg x_2 \lor x_3 \lor \neg x_4)$

$X = \{x_1, \cdots, x_n\}$ a set of variables, $F$ - a formula in CNF with variables from $X$. An assignment is $v: X \to \{0, 1\}$. There are $2^n$ assignments.

Question: does there exist an assignment $v$ that satisfies $F$? Such assignment is called a satisfying assignment. $v$ satisfies $F$ $\iff$ $v$ satisfies every clause of $F$.

#### Cook theorem

$\text{SAT} \in NPC$.

##### proof

1. $\text{SAT} \in NP$

We construct a NTM with stop property $M$ for solving $\text{SAT}$. FIrst $M$ guesses an assignment ($O(n)$) and then checks if this assignment satisfies every clause (polynomial time).

2. Let $L \in NP$. We will show $L \alpha \text{SAT}$

Let $M$ be a NTM with stop property such that $L(M) = L$. Let $w$ be an input string. We will construct $f(w)$ - an instance of $\text{SAT}$ such that $w \in L \implies f(w)$ is satisfiable. We assume $M$ has one tape. Let $p(n)$ be a polynomial such that $T_M(n) \le p(n)$. We can assume that $p(n) \ge n$. $M = (Q, \Sigma, \Gamma, \delta, B, q_1, \{q_s\}, \{q_{s-q}\})$ with $Q = \{q_1, \cdots, q_s\}$, $\Gamma = \{X_1, \cdots, X_m\}$, $B = X_m$, $s, m$ - const. Let $|w| = n$. We assume that if $M$ finishes the computation before $p(n)$ steps then it stays in the accepting state or the rejecting state and halts in moment $p(n)$, so the computation of $M$ always takes $p(n)$ steps. Variables:

- $C(i, j, t)$: $C(i, j, t) = 1 \iff$ on the tape of $M$ there is symbol $X_j$ in the $i$-th cell in moment $t$. $1 \le i \le p(n)$, $1 \le j \le m$, $0 \le t \le p(n)$. Otherwise the value is 0.
- $S(k, t)$: $S(k, t) = 1 \iff$ $M$ is in state $q_k$ in moment $t$. $1 \le k \le s$, $0 \le t \le p(n)$. Otherwise the value is 0.
- $H(i, t)$: $H(i, t) = 1 \iff$ the head of $M$ observes $i$-th cell in moment $t$. $1 \le i \le p(n)$, $0 \le t \le p(n)$.

There are $p(n) \cdot m \cdot (p(n) + 1) + s \cdot (p(n) + 1) + p(n) \cdot (p(n) + 1) = \Theta(p^2(n))$ variables. By $|F|$ we denote the length of the formula = the number of literals in $F$. Let $U(x_1, \cdots, x_r) = (x_1 \lor x_2 \lor \cdots \lor x_r) \land (\neg x_1 \lor \neg x_2) \land (\neg x_1 \lor \neg x_3) \land \cdots \land (\neg x_{r-1} \lor \neg x_r)$. So $U(x_1, \cdots, x_r) = 1 \iff$ for exactly one $i \in \{1, \cdots, r\}$, $x_i = 1$. $|U| = O(r^2)$. There will be 7 types of clauses in $f(w)$ describing conditions.

1. in every moment $t$ the head observes exactly one cell. $F_1 = \bigwedge_{0 \le t \le p(n)} A_t$ where $A_t = U(H(1, t), \cdots, H(p(n), t))$. $|A_t| = O(p^2(n))$, $|F_1| = p(n+1) \cdot O(p^2(n)) = O(p^3(n))$.
2. in every moment $t$ there is exactly one symbol in every cell. $F_2 = \bigwedge_{0 \le t \le p(n), 1 \le i \le p(n)} B_{i, t}$ where $B_{i, t} = U(C(i, 1, t), \cdots, C(i, m, t))$. $|B_{i,t}| = O(m^2) =$ const, $|F_2| = (p(n) + 1)p(n) \cdot O(1) = O(p^2(n))$
3. in every moment $t$ $M$ is in exactly one state. $F_3 = \bigwedge_{0 \le t \le p(n)}U(S(1, t), \cdots, S(s, t))$. $|F_3| = (p(n) + 1) \cdot O(s^2) = O(p(n))$
4. in every moment $t$ a symbol changes in at most one cell. $F_4 = \bigwedge_{0 \le t \le p(n), 1 \le i \le p(n), 1 \le j \le m} D_{i, j, t}$. We want $D_{i, j, t} \iff ((C(i, j,t) \implies C(i, j, t+1)) \lor H(i, t))$. $|F_4| = O(p^2(n))$
5. in every moment $t$ the computation of $M$ is described by $\delta$. $F_5 = \bigwedge_{0 \le t \le p(n), 1 \le i \le p(n), 1 \le j \le m, 1 \le k \le s} E_{i, j, k, t}$. Let $\delta(q_k, X_j) = \{(q_{k_1}, X_{j_1}, K_{i_1}), \cdots, (q_{k_{x(k, j)}}, X_{j_{x(k, j)}}, K_{i_{x(k, j)}})\}$. We want $E_{i,j,k,t} = ((C(i, j, t) \land H(i, t) \land S(k, t)) \implies \bigvee_{1 \le l \le x(k, j)}(C(i, j_l, t+1) \land H(i_l, t+1) \land S(k_l, t+1)))$. $|E_{i,j,k,t}| = O(3^{2sm} \cdot 2sm + 3) =$ const. $|F_5| = (p(n) + 1) \cdot p(n) \cdot m \cdot s \cdot O(1) = O(p^2(n))$.
6. in $t=0$ $M$ is in initial state. $F_6 = S(1, 0) \land H(1, 0) \land \bigwedge_{1 \le i \le n} C(i, j_i, 0) \land \bigwedge_{n < i \le p(n)}C(i, m, 0)$ where $w = X_{j_1}X_{j_2}\cdots X_{j_n}$. $|F_6| = O(p(n))$.
7. in moment $p(n)$ $M$ is in accepting state or rejecting state $F_7 = S(s, p(n))$. $|F_7| = O(1)$.

So $f(w) = F_1 \land F_2 \land F_3 \land F_4 \land F_5 \land F_6 \land F_7$. The number of literals in $f(w)$ is $O(p^3(n))$. There are $\Theta(p^2(n))$ variables $\implies$ the length of variable is $O(\beta\log n)$ where $\beta$ depends on $p$. The length of $|f(w)| = O(p^3(n) \beta \log n) = O(p^4(n))$. $f(w) = 1 \iff$ $M$ halts in accepting state $\iff w \in L(M) = L$. $f(w)$ can be constructed in polynomial time. $\square$

### list of NPC problems

1. $\text{SAT}$
2. $3\text{SAT}$ ($\text{SAT}$ where each clause has exactly 3 literals)
3. Vertex Cover (VC), Clique, Independent Set (IS)
4. Hamiltonian Cycle (HC)

#### VC, Clique, IS

1. **VC**: Instance: $G = (V, E), k \in N$. Question: Does there exist a vertex cover $W$ of $G$ such that $|W| \le k$?
2. **Clique**: Instance: $G = (V, E), l \in N$. Question: Does there exist a clique $W$ in $G$ such that $|W| \ge l$?
3. **IS**: Instance: $G = (V, E), j \in N$. Question: Does there exist an independent set $W$ in $G$ such that $|W| \ge j$?

For $W \subseteq V$ the following conditions are equivalent:

- $W$ is a vertex cover of $G$
- $V \setminus W$ is an independent set in $G$
- $V \setminus W$ is a clique in $\bar G = (V, \binom{V}{2} \setminus E)$

So these 3 problems can be seen as different versions of the same problem. Any of these problems can be easily transformed to either of the others. For instance, to transform VC to Clique: let $(G = (V, E), k)$ be an instance of VC. The corresponding instance of Clique is $(\bar G, |V| - k)$ which can be obtained with a transformation in polynomial time. Thus if one of the problems is NPC, then other are too.

#### VC is NPC

1. VC $\in\text{NP}$

A nondeterministic algorithm guesses a subset of vertices and checks in polynomial time whether this subset is a VC and has correct cardinality.

2. $\text{3SAT} \alpha \text{VC}$

Let $X = \{x_1, \cdots, x_n\}$ and let $F = c_1 \land \cdots \land c_m$ be a $\text{3SAT}$ instance. We will construct a graph $G = (V, E)$ and a natural number $k \le |V|$ such that $G$ has a vertex cover of cardinality at most $k \iff F$ is satisfiable.

Components: truth-setting components + satisfaction testing components + communication edges.

For every variable $x_i$ there is a truth-setting component $T_i = (V_i, E_i)$ where $V_i = \{x_i, \neg x_i\}$ and $E_i = \{\{x_i, \neg x_i\}\}$, so it is a $K_2$. Note that any vertex cover will have to contain at least one of the two vertices of $E_i$ in order to cover this edge.

For every clause $c_j$ in $F$ there is a satisfaction testing component $S_j = (V_j', E_j')$ where $V_j' = \{a_1(j), a_2(j), a_3(j)\}$ and $E_j' = \{\{a_1(j), a_2(j)\},\{a_1(j), a_3(j)\},\{a_2(j), a_3(j)\}\}$ so it is a $K_3$. Note that any vertex cover will have to contain at least two vertices from $V_j'$ to cover the edges of $E_j'$.

For $c_j$ in $F$ let the three literals in $c_j$ be denoted by $y_j, z_j, w_j$. So $c_j = (y_j \lor z_j \lor w_j)$. The communication edges for $S_j$ are $E_j'' = \{\{a_1(j), y_j\}, \{a_2(j), z_j\}, \{a_3(j), w_j\}\}$. Out instance of VC is $G = (V, E)$ where $V = \bigcup_{i=1}^nV_i \cup \bigcup_{j=1}^m V_j'$ and $E = \bigcup_{i=1}^n E_i \cup \bigcup_{j=1}^m E_j' \cup \bigcup_{j=1}^m E_j''$ and $k = n + 2m$.

One can see that $(G, k)$ can be constructed in polynomial time.

$F$ is satisfiable $\iff$ $G$ has a vertex cover of cardinality $\le k$.

$\impliedby$ Suppose that $W \subseteq V$ is a vertex cover of $G$ and $|W| \le k$. By our previous remarks $W$ has to contain at least one vertex from every $T_i$ and at least two vertices from every $S_j$. Since it gives a total of at least $n + 2m = k$ vertices, $|W| = k$ and $W$ must contain exactly one vertex from every $T_i$ and exactly two vertices from every $S_j$. We use the vertices of $W$ contained in $T_i$s to define an assignment $V: X \to \{0, 1\}$. We set $v(x_i) = 1$ if $x_i \in W$ and $v(x_i) = 0$ otherwise. We will show that $v$ satisfies every clause $c_j$ in $F$. Consider three communication edges in $E''_j$. Only two of these edges can be covered by vertices from $V_j' \cap W$, so one of them must be covered by a vertex from $V_i \cap W$ for some $i$. But that implies that the corresponding literal ($x_i$ or $\neg x_i$) is true under assignment $v$, so $c_j$ is satisfied by $v$. Because it holds for every clause $c_j$ in $F$, $v$ is a satisfying assignment for $F$.

$\implies$ Suppose that $v: X \to \{0, 1\}$ is a satisfying assignment for $F$. THe corresponding vertex cover $W$ will contain one vertex from every $T_i$ and two vertices from every $S_j$ ($n + 2m = k \le k$ vertices). The vertex from $T_i$ in $W$ is $x_i$ if $v(x_i) = 1$ and $\neg x_i$ otherwise. This ensures that at least one of the three edges in every $E''_j$ is covered, because $v$ satisfies every clause $c_j$. Therefore we need to include in $W$ the ends in $V'_j$ of the other two edges from $E_j''$ (which may or may not be also covered by vertices from $T_i$s. $\square$

#### HC is NPC

1. HC $\in \text{NP}$

A non-deterministic algorithm guesses a permutation of the vertices and checks in polynomial time whether it is a hamiltonian cycle.

2. VC $\alpha$ HC

Let $G = (V, E)$ and $k \in N$ be an instance of VC. we will construct a graph $G'=(V', E')$ such that $G$ contains a vertex cover of cardinality $\le k$ $\iff$ $G'$ has a hamiltonian cycle.

Components: selector vertices + cover testing components + communication edges

$G'$ will contain $k$ selector vertices $S = \{a_1, \cdots, a_k\}$.

For every edge $e = \{u, v\} \in E$ there is a cover testing component $C_e = (V_e', E_e')$ where $V_e' = \{(u, e, i), (v, e, i) : 1 \le i \le 6\}$ and $E'_e = \{\{(u, e, i), (u, e, i+1)\}, \{(v, e, i), (v, e, i+1)\}: 1 \le i \le 5\} \cup \{\{(u, e, 3), (v, e, 1)\}, \{(v, e, 3), (u, e, 1)\}, \{(u, e, 6), (v, e, 4)\}, \{(v, e, 6), (u, e, 4)\}\}$.

In the completed construction only vertices of this component that will be incident with communication edges are $(u, e, 1), (u, e, 6), (v, e, 1), (v, e, 6)$. Any Hamiltonian cycle in $G'$ will have to traverse this cover testing component in exactly one of three configuration. For every vertex $v \in V$ let the edges incident with $v$ be ordered (arbitrarily) as $e_{v(1)}, e_{v(2)}, \cdots, e_{v(d(v))}$ where $d(v) =$ degree of $v$. All the cover testing components corresponding to these edges are joined with the following communication edges $E_v' = \{\{(v, e_{v(i)}, 6), (v, e_{v(i+1)}, 1)\}: 1 \le i < d(v)\}$. The final communication edges join the ends of these paths to every one of the selector vertices. These are the following edges $E'' = \{\{a_i, (v, e_{v(1)}, 1)\}, \{a_i, (v, e_{d(v)}, 6)\}: 1 \le i \le k, v \in V\}$. Our instance of HC is $G'=(V', E')$ where $V' = S \cup \bigcup_{e \in E} V_e'$ and $E' = \bigcup_{e \in E} E_e' \cup \bigcup_{v \in V} E_v' \cup E''$. One can see that we can construct $G'$ from $G$ and $k$ in polynomial time.

$G$ has a vertex cover of cardinality $\le k$ $\iff$ $G'$ has a Hamiltonian cycle.

$\impliedby$ Suppose $v_1, v_2, \cdots, v_n, v_1$ where $n = |V'|$ is a Hamiltonian cycle in $G'$. Consider any minimal subpath of the cycle that begins and ends in a vertex from $S$. Because of the previously described restrictions on the way in which the Hamiltonian cycle can pass through a cover testing component, this fragment of our cycle must pass through a set of cover testing components corresponding to exactly these edges from $E$ which are incident with some one particular vertex $v \in V$. Each of the cover testing components is traversed in one of the three ways and no vertex from any other cover testing component is visited. Thus the $k$ selector vertices divide our Hamiltonian cycle into $k$ paths, each path corresponding to a different vertex $v \in V$. Since the Hamiltonian cycle must visit all vertices from all cover testing components and since vertices from the cover testing component corresponding to and edge $e \in E$ can be traversed only by a path corresponding to one of the ends of $e$, every edge $e \in E$ must have at least one end among those selected vertices from $V$. Therefore this set of $k$ vertices forms a vertex cover of $G$.

## random access machine (RAM)

$\Sigma = \{a_1, \cdots, a_k\}$ - a language. RAM has an infinite set of registers $R1, R2, \cdots$. Each register stores a string from $\Sigma^*$. There is an infinite set of line names $N1, N2, \cdots$. There are 7 types of instructions: $N1$ - a line name or nothing, $RX, RY$ - registers. $N2' \in \{N2a, N2b\}$ (a - above, b - below).

1. $N1$ addj $RX$ -- adds aj to the right end of the string in $RX$ ($1 \le j \le k$)
2. $N1$ del $RX$ -- deletes the first from left symbol of the string stored in $RX$
3. $N1$ clr $RX$ -- changes the string in $RX$ into $\varepsilon$
4. $N1$ $RX \leftarrow RY$ -- copies the string in $RY$ into $RX$
5. $N1$ jmp $N2'$ -- jumps to the closest instruction with line name $N2$ above if $N2' = N2a$ or below if $N2' = N2b$
6. $N1$ $RX$ jmpj $N2'$ -- jumps if the first symbol of the string in $RX$ is aj ($1 \le j \le k$)
7. $N1$ continue -- does nothing

Instructions are executed in order in which they are written except jumps.

A RAM program is a finite sequence of instructions such that each jump is executable and the last instruction is continue. A RAM program halts when it reaches the final continue instruction.

A partial function $f: N^n \to N$ is computable on RAM if there exists a RAM program $P$ such that if it starts in the following configuration: for $i = 1, \cdots, n$ $x_i$ is in $R_i$ and all the other registers are empty ($\varepsilon$) and:

- $P$ halts $\iff f(x_1, \cdots, x_n)$ is defined
- if $P$ halts then there is $f(x_1, \cdots, x_n)$ in R1 and the other registers are empty

Lemma: Instructions 3,4,5 can be eliminated from the set of instructions.
