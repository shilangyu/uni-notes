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
