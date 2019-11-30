# combinatorics

### rule of addition

If $A, B \subseteq \mathbb{X}$ and $|A|, |B| \in \mathbb{N}$ and $A \cap B = \emptyset$ then $|A \cup B| = |A| + |B|$

also

If $(\forall i,j \in \{1, ..., n\})(i \ne j \implies A_i \cap A_j = \emptyset)$ then $|\bigcup_{i=1}^n A_i| = \sum_{i=1}^n |A_i|$

### rule of multiplication

If $A, B \subseteq \mathbb{X}$ and $|A|, |B| \in \mathbb{N}$ then $|A \times B| = |A| \cdot |B|$

### permutations

Rearrangement of elements in all of its possible states. The number of permutation of $\{1, ..., n\}$ is $n!$

#### repetitions

Consider an example: You are in a $4 \times 4 \times 4$ grid labeled $(x, y, z)$. A command is defined as such: $(z, x, x, y, ...)$ move one on $z$ axis, move two on $x$ axis etc. How many commands can we construct to navigate from $(0,0,0)$ to $(4, 4, 4)$? We need to move $4$ spaces on each axis so command will be of length $3 \cdot 4 = 12$ so amount of possible commands is $12!$. However $(x, y, z)$ in our commands are not unique so a command like $(z_1, z_2) \equiv (z_2, z_1)$. Therefore we need to divide by the permutations of the repetitions: $\frac{12!}{4!4!4!}$.

### pigeon hole principle

Let $A$, $B$ be finite sets and let $f : A \to B$ be any function.

If $|A| > |B|$ then there are $x, y \in A$, $x \ne y$ such that $f(x) = f(y)$.

(informally: If you put things into boxes and there are more things than boxes then at least one box
will contain at least 2 things.)

---

1. $n! \equiv 1 \cdot 2 \cdot ... \cdot n$
