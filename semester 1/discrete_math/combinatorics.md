# combinatorics

### rule of addition

If $A, B \subseteq \mathbb{X}$ and $|A|, |B| \in \mathbb{N}$ and $A \cap B = \emptyset$ then $|A \cup B| = |A| + |B|$

also

If $(\forall i,j \in \{1, \cdots, n\})(i \ne j \implies A_i \cap A_j = \emptyset)$ then $|\bigcup_{i=1}^n A_i| = \sum_{i=1}^n |A_i|$

### rule of multiplication

If $A, B \subseteq \mathbb{X}$ and $|A|, |B| \in \mathbb{N}$ then $|A \times B| = |A| \cdot |B|$

### permutations

Rearrangement of elements in all of its possible states. The number of permutation of $\{1, \cdots, n\}$ is $n!$[^1]

#### repetitions

Consider an example: You are in a $4 \times 4 \times 4$ grid labeled $(x, y, z)$. A command is defined as such: $(z, x, x, y, \cdots)$ move one on $z$ axis, move two on $x$ axis etc. How many commands can we construct to navigate from $(0,0,0)$ to $(4, 4, 4)$? We need to move $4$ spaces on each axis so command will be of length $3 \cdot 4 = 12$ so amount of possible commands is $12!$. However $(x, y, z)$ in our commands are not unique so a command like $(z_1, z_2) \equiv (z_2, z_1)$. Therefore we need to divide by the permutations of the repetitions: $\frac{12!}{4!4!4!}$.

#### derangements (subfactorial)

The number of permutations where no element is in the same place: $!n = n!\sum^n_{j=0} \frac{(-1)^j}{j!}$

### combinations

#### amount of injections

The number of injections from $\{1,\cdots,k\} \to \{1,\cdots,n\}$ is $\frac{n!}{(n-k)!}$

The amount of subsets of length $k$: $|p_k(X)| = \frac{n!}{k!(n-k)!} = \binom{n}{k}$

#### inclusion-exclusion principle

$|A \cup B| = |A| + |B| - |A \cap B|$

**generalized**: $|\bigcup^n_{i=1} A_i| = \sum^n_{i=1} (-1)^{i+1} S_i$ where:
$S_k = \sum_{1 \le i_1 \lt i_2 \lt \cdots \lt i_k \le n} |A_{i_1} \cap A_{i_2} \cap \cdots \cap A_{i_k}|$

**in human words**: $|\bigcup^n_{i=1} A_i|$ = add individual lengths, subtract lengths of all 2 element combination unions, add lengths of all 3 element combination unions, etc.

#### combinations with repetitions

How many multisets[^2] of length $k$ can we construct from a set of length $n$?

$\big(\binom{n}{k}\big) = \binom{n+k-1}{k}$

#### stars and bars

How many solutions are there to the equation $x_1 + x_2 + \cdots + x_k = n$ for $x \in \mathbf{N}$.

Example solution for $n = 6$ and $k = 4$:

٭٭|٭||٭٭٭

$x_1 = 3$, $x_2 = 0$, $x_3 = 1$, $x_4 = 2$

$n + 1$ options to place $k - 1$ bars. Because $x$ can be $0$, we can multichoose: $\big(\binom{n + 1}{k - 1}\big) = \binom{n+k-1}{k-1}$

### pigeon hole principle

Let $A$, $B$ be finite sets and let $f : A \to B$ be any function.

If $|A| > |B|$ then there are $x, y \in A$, $x \ne y$ such that $f(x) = f(y)$.

(informally: If you put things into boxes and there are more things than boxes then at least one box
will contain at least 2 things.)

[^1]: $n! \equiv 1 \cdot 2 \cdot \ldots \cdot n$
[^2]: Multiset $\equiv$ A set where equal elements can appear more than once. Though the order is still disregarded. Example: $\{1, 1, 2\}$
