# circuits

\newcommand{\bra}[1]{\langle #1 |}
\newcommand{\ket}[1]{| #1 \rangle}
\newcommand{\C}[0]{\mathbf{C}}

## classical

A collection of gates and wires.

- `NOT`: $x \mapsto 1 - x$
- `AND` $(x, y) \mapsto x \cdot y$
- `COPY`: $x \mapsto (x, x)$
- `OR`: $(x, y) \mapsto x + y - xy$
- `CNOT`: $(x, y) \mapsto (x, x \oplus y)$ where $\oplus$ is XOR
- `CCNOT` (`TOFFELI`): $(x, y, z) \mapsto (x, y, z \oplus xy)$

$circuit: \{0, 1\}^{n_{\text{IN}}} \to \{0, 1\}^{n_{\text{OUT}}}$

_Theorem_: any function $f: \{0, 1\}^n \to \{0, 1\}^m$ has a circuit and vice versa

### reversible gates

A gate `G` where `G` is its inverse. Or actually, a gate for which we can use itself to restore $\bar x$ from $G(\bar x)$

_Theorem_: any function $f: \{0, 1\}^n \to \{0, 1\}^m$ has a circuit made of reversible gates {`CNOT`, `CCNOT`, `COPY`, `NOT`}

## axioms of quantum mechanics

### 1. state of a quantum system

The quantum state is a unit vector in a Hilbert space. The state of $n$ qubits is $\ket{\psi} \in \C^{2^n}$ with $||\ket{\psi}||^2 = 1$

### 2. time evolution

1. norm-preservation: $||f(\ket{\psi})|| = ||\ket{\psi}||$
2. linearity: $f(\alpha\ket{\psi_1} + \beta\ket{\psi_2}) = \alpha f(\ket{\psi_1}) + \beta f(\ket{\psi_2})$

Equivalently, we can say that an operation is a unitary matrix $U \in \C^{2 \times 2}$: $f(\ket{\psi}) = U\ket{\psi}$

### 3. measurement

We observe $x \in \{0, 1\}^n$ with probability $|\alpha_x|^2$

### 4. composition

If quantum system 1 is in state $\ket{\psi_1} \in \C^{2^{n_1}}$ and quantum system 2 is in state$\ket{\psi_2} \in \C^{2^{n_2}}$ then the join state is $\ket{\psi_{12}} = \ket{\psi_1} \otimes \ket{\psi_2}$

An entangled state is such that cannot be decomposed into a product of two other ones. There is no simple way to know if a state is entangled or not.
