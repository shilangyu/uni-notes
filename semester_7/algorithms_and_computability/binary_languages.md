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
