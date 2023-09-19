# complexity

Defined relative to the size of input: $T(n)$

## space complexity

The peak asymptotic space (memory) needed in an algorithm.

## time complexity

The asymptotic time (operations) needed in an algorithm.

Base unit of operations are the elementary operations.

### dominating instruction

A set of instructions for which their asymptotic running time is equal to the asymptotic running time of the whole algorithm.

### cases

- Worst-case: the worst time complexity for a specific input
- Average-case: the average time complexity from all inputs

## master theorem

$T(n) = aT(\lfloor \frac{n}{b} \rfloor) + f(n)$ where $f(n) = \Theta(n^\alpha)$

- $\log_ba < \alpha \implies T(n) = \Theta(n^\alpha)$
- $\log_ba = \alpha \implies T(n) = \Theta(n^\alpha \log n)$
- $\log_ba > \alpha \implies T(n) = \Theta(n^{\log_ba})$
