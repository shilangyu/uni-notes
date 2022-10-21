# binary languages

Assume all languages are over the alphabet $\{0, 1\}$.

coRe = $\{L \in All : \bar L \in Re\}$

## canonical order of $L = \{0, 1\}$

$\varepsilon, 0, 1, 00, 01, 10, 11, 000, 001, 010, \cdots$

Each TM is represented by a finite string from $\{0, 1\}^*$. Since $|\{0, 1\}^*| = \alef_0$ then the set of TM is countable.

## diagonal language

Let $w_i$ be strings from $\{0, 1\}^*$ in canonical order (input). Let $\langle M_i \rangle$ be strings from $\{0, 1\}^*$ in canonical order (codes of TM).

$$
a_{ij} = \begin{cases}
	1 & \text{if } w_i \in L(M_j) \\
	0 & \text{if } w_i \notin L(M_j) \\
\end{cases}
$$

Then the diagonal language is $L_d = \{w_i : a_{ij} = 0\} = \{w_i : w_i \notin L(M_i)\}$

## universal language

$L_u = \{\langle M, w\rangle : w \in L(M)\}$

## nonempty language

- $L_{ne} = \{\langle M \rangle : L(M) \ne \emptyset\}$
- $L_e = \{\langle M \rangle : L(M) = \emptyset\}$

$L_e = \bar L_{ne}$

## recursive language

- $L_r = \{\langle M \rangle : L(M) \in R\}$
- $L_{nr} = \{\langle M \rangle : L(M) \notin R\}$

$L_r = \bar L_{nr}$

## theorems

- $L \in R \implies \bar L \in R$
- $L \in Re \land \bar L \in Re \implies L \in R$
- $L_d \notin Re$
- $L_u \in Re$
- $L_u \notin R$
- $\bar L_d \in Re$
- $L_{ne} \in Re$
- $L_e \notin R$
- $L_{ne} \notin R$
- $L_e \notin Re$
- $L_r \notin Re$
- $L_{nr} \notin Re$

### equivalence theorem

One of the following conditions holds

1. Both $L$ and $\bar L$ are recursive
2. One of $L$ and $\bar L$ is recursively enumerable but not recursive, the other one is not recursively enumerable
3. None of $L$ and $\bar L$ is recursively enumerable

## property

A property of recursively enumerable languages is any set $S \subseteq Re$

- A property is called trivial if $S = \emptyset$ or $S = Re$
- Otherwise $S$ is called non-trivial

Let $S$ be a property of recursively enumerable languages, then $L_s =\{\left\langle M \right\rangle : L(M) \in S\}$

# Rice theorem

For any non-trivial property of recursively enumerable languages $S$. $L_s \notin R$.

## proof of Rice theorem

Let $S$ be a non-trivial property of recursively enumerable languages. There exists $L \in S$ (since $S$ is non-empty). Let $M_L$ be a TM such that $L(M_L) = L$. Suppose $L_S \in R$ then $\bar L_S = L_{\bar S} \in R$. We can assume that $\emptyset \notin S$ without loss of generality (otherwise we consider $\bar S$). There exists a TM with stop property $M_S$ such that $L(M_S) = L_S$. There exists an algorithm A that for a given input string $\langle M, w \rangle$ constructs a code of a TM $\langle M' \rangle$ such that

$$
L(M') = \begin{cases}
	\emptyset & \text{if } w \notin L(M) \\
	L & \text{if } w \in L(M) \\
\end{cases}
$$

We can construct algorithm $B$ such that $L(B) = L_u$.

$$
\langle M, w \rangle \in L(B) \iff \langle M' \rangle \in L(M_S) \iff \langle M' \rangle \in L_S \iff L(M') \in S \iff L(M') = L \iff w \in L(M) \iff \langle M, w \rangle \in L_u
$$

## decision problem

A decision problem is a problem for which the answer is YES or NO. It can be defined as a finite set of parameters.

- $\Pi$ - a decision problem
- $D_\Pi$ - set of instances of $\Pi$
- $Y_\Pi \subseteq D_\Pi$ - the set of YES instances

### instance of the problem

If we fix the values of the parameters we get an instance of the problem.

### encoding

Encoding of a decision problem $\Pi$ is a function $e: D_\Pi \to \Sigma^*$ where $\Sigma$ is an alphabet. For a decision problem $\Pi$ and an encoding $e$ fo $\Pi$ there is a corresponding language

$$
L(\Pi,e) = L_\Pi = \{e(I) \in \Sigma^* : I \in Y_\Pi\}
$$

$\Pi$ is called decidable if $L_\Pi \in R$ otherwise $\Pi$ is called undecidable.

### post correspondence problem (PCP)

Instance: two lists $A = w_1, w_2, \cdots, w_k$ and $B = x_1, x_2, \cdots, x_k$ of strings over $\Sigma$. A solution is a finite sequence of indices $i_1, i_2, \cdots, i_m$ $m \ge 1$ such that $w_{i_1} \circ w_{i_2} \circ \cdots \circ w_{i_m} = x_{i_1} \circ x_{i_2} \circ \cdots \circ x_{i_m}$

### modified post correspondence problem (MPCP)

It is the standard PCP but with the condition that $i_1 = 1$

**lemma**: if PCP is decidable then MPCP is decidable.

If there exists an algorithm for solving PCP then there exists an algorithm for solving MPCP.

**theorem**: PCP is undecidable. By lemma it suffices to show that if MPCP is decidable then $L_u \in R$.
