# concrete complexity

## decision trees

- internal nodes labelled with input vars
- leaves are labelled with output value

They compute functions $f: \{0, 1\}^n \to \{0, 1\}$

$$
D(f) = \text{least height of a DT computing } f
$$

### certificates

Partial assignment $\rho \in \{0, 1, *\}$ is a certificate for $x \in \{0, 1\}^n$ if

- $\rho$ is consistent with $x$: $\forall i \rho_i \ne * \implies \rho_i = x_i$
- $\rho$ is consistent with $x' \implies f(x) = f(x')$

$$
C(f, x) = \text{least size of certificate for } x
$$

then

$$
C_b(f) = \max_{x: f(x) = b} C(f, x)
$$

$$
C(f) = \max_x C(f, x) = \max\{C_0(f), C_1(f)\}
$$

$$
C(f) \le D(f)
$$

$$
C_1(f) = \text{least } k \text{ such that } f \text{ can be written as } k\text{-DNF}
$$

$$
C_0(f) = \text{least } k \text{ such that } f \text{ can be written as } k\text{-CNF}
$$

$$
D(f) \le C_1(f)C_0(f) \le C^2(f)
$$

### sensitivity

Let $x^{(i)}$ be $x$ but with $x_i$ flipped. Then

$$
s(f, x) = |\{i : f(x) \ne f(x^{(i)})\}|
$$

$$
s(f) = \max_x s(f, x)
$$

$$
s(f) \le C(f)
$$

$$
D(f) \le s^k(f) \text{ for some } k
$$

#### block sensitivity

$bs(f, x) =$ max $k$ of disjoint $B_1, \cdots, B_k \subseteq [n]$ such that $f(x) \ne f(x^{B_i})$

$$
C(f) \le s(f) \cdot bs(f)
$$

## proof complexity

### proof system

For any language $L$ the proof system is a TM $P$ that on input $\langle x, \pi \rangle$ runs in time $(|x| + |\pi|)^{O(1)}$ such that

$$
x \in L \iff \exists_\pi P(x, \pi) = 1
$$

### propositional proof system

When $L \in \mathsf{UNSAT}$

$$
P \text{ is poly bounded} \iff \forall_{x\in\mathsf{UNSAT}} \exists_\pi |\pi| \le |x|^{O(1)} P(x, \pi) = 1
$$

$$
\mathsf{NP} = \mathsf{coNP} \iff \exists \text{poly-bounded proof system}
$$

### resolution proof system

A resolution refutation proof of $\phi$ is $(C_1, \cdots, C_s)$ where $C_s = \emptyset$ and for all $i$ either $C_i$ is a clause of $\phi$ or $C_i = A \lor B$ is obtained from $C_j=A\lor x$, $C_{j'} = B \lor \neg x$ $j, j' < i$ resolution rule:

$$
\frac{A \lor x \quad B \lor \neg x}{A \lor B}
$$

Resolution is not poly-bounded.

### tree-like

A proof is tree like if the underlying DAG is a tree. Then $\phi \in \mathsf{UNSAT}$ defines Search($\phi$), where $\phi$ has n variables. Given $x \in \{0, 1\}^n$ return the clause $C$ of $\phi$ where $C(x) = 0$.

Tree-like refutation is the same as a decision tree solving Search.

### tree-vs-adversary game

In each round:

- Tree queries $x_i$
- Adversary either chooses value of $x_i$ or lets Tree choose it (that gives a point to the Adversary)

Game ends when Tree solves Search.

If there exists an adversary that can score $\le r$ points then the decision tree's size is $\ge 2^r$

## communication complexity

Given two players we want to know the cost (number of exchanged bits) needed to compute the function $f: \{0, 1\}^n \times \{0, 1\}^n \to \{0, 1\}$ where each player has one half of the input.

### cost

$D^{cc}(f) =$ least cost of protocol for $f$. For all $f$ we have $D^{cc}(f) \le D^{dt}(f)$

### communication matrix

$M_f \in \{0, 1\}^{2^n \times 2^n}$ where $(M_f)_{x, y} = f(x, y)$

Protocols of cost $c$ partition $M_f$ into $2^c$ monochromatic (meaning every output is the same for a rectangle) rectangles (where a rectangle is just a product $A \times B$ of inputs $A$, $B$ of player one and two)

### partition number

$part(f) =$ least number of rectangles in any monochromatic rectangle partition of $M_f$

$$
D^{cc}(f) \ge \log part(f)
$$

$$
D^{cc}(f) \le (\log part(f))^2
$$

### nondeterminism

The protocol on input $(x, y)$:

1. Guess certificate string $w \in \{0, 1\}^s$ where $s$ is the cost
2. Verify: accept iff player 1 accepts $(x, w)$ and player 2 accepts $(y, w)$

Where $s$ is the cost.

$N_b^{cc}(f) =$ least cost of nondeterministic protocol accepting $f^{-1}(b) = \{(x, y) : f(x, y) = b\}$

$$
D^{cc}(f) \le N_0(f) \cdot N_1(f)
$$
