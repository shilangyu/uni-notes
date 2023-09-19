# introduction

## sample space

Denoted by $\Omega$ is the set of all possible outcomes of an experiment.

- $\Omega$ - the set of the elementary events

## event

$\omega \subset \Omega$ - events

### simple

Event is called simple when $|\omega| = 1$

### compound

Event is called compound when $|\omega| > 1$

## Venn diagrams

![https://mathworld.wolfram.com/images/eps-gif/VennDiagram_900.gif](https://mathworld.wolfram.com/images/eps-gif/VennDiagram_900.gif)

## properties

- $A \cup B = B \cup A$
- $(A \cup B) \cup C = A \cup (B \cup C)$
- $(A \cup B) \cap C = (A \cap C) \cup (B \cup C)$
- $\overline {(A \cup B)} = \bar A \cap \bar B$
- $\overline {(A \cap B)} = \bar A \cup \bar B$

Where $A, B, C$ are events and $\bar A$ denotes the complement of $A$

## axioms of probability

- for any event $A \subset \Omega$: $P(A) \ge 0$
- $P(\Omega) = 1$
- $P(\bigcup A_i) = \sum P(A_i)$

### propositions

- $P(\emptyset) = 0$
- $P(\bar A) = 1 - P(A)$
- for $A, B \subset S$: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- for $A \subset B$: $P(A) \le P(B)$

## equally likely outcomes

- $N$ - amount of outcomes in $\Omega$
- $N(A)$ - amount of outcomes in $A$

$P(A) = \frac{N(A)}{N}$

## conditional probability

$P(A|B) = \frac{P(A \cap B)}{P(B)}$

### multiplication rule

$P(A \cap B) = P(A|B) \cdot P(B)$

### total probability

Events $A_1, A_2, \cdots$ are exhaustive when $\bigcup A_i = \Omega$

When such events are exhaustive and mutually exclusive then: $P(B) = \sum P(B \cap A_i) = \sum P(A_i) \cdot P(B | A_i)$

### Bayes' formula

Let $A_1, A_2, \cdots$ be mutually exclusive exhaustive events. Then for any other event $B$ and all $j$:

$$
P(A|B) = \frac{P(B|A)\cdot P(A)}{P(B)}
$$

or

$$
P(A_j|B) = \frac{P(B|A_j) \cdot P(A_j)}{\sum P(B|A_i) \cdot P(A_i)}
$$

Also:

$P_B(A) = P(A|B)$

## independence

When $P(A \cap B) = P(A)P(B)$ then $A$ and $B$ are independent events

If A and B are independent then so are the complements:

- $P(A \cap \bar B) = P(A)P(\bar B)$
- $P(\bar A \cap B) = P(\bar A)P(B)$
- $P(\bar A \cap \bar B) = P(\bar A)P(\bar B)$

### more than two events

For $A_1, A_2, \cdots A_n$

$P(\bigcap A_i) = \prod P(A_i)$ for all combinations of $A$ sets

Any combinations of complements are also mutually independent

### inclusion exclusion

$P(\bigcup A_i) = 1 - \prod (1 - P(A_i))$

### Bernoulli trials

Let an experiment have only 2 possible outcomes: failure ($f$) or success ($s$) where $P(s) = p$ and $P(f) = 1 - p = q$

The probability that we obtain exactly $k$ successes in the $n$ independent Bernoulli trials is $b(k; n, p) = \binom{n}{k}p^k(1-p)^{n-k}$

#### Poisson lemma

$lim_{n\to \infty}n\cdot p_n = \lambda > 0$ then

$lim_{n\to\infty}\binom{n}{k}p_n^k(1-p_n)^{n-k} = e^{-\lambda}\cdot\frac{\lambda^k}{k!}$

$F(k; \lambda) = \sum_{i=0}^k e^{-\lambda} \frac{\lambda^i}{i!}$
