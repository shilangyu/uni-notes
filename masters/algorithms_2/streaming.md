# streaming

The input is a long stream $\sigma = \langle a_1, a_2, \cdots, a_m \rangle$ consisting of $m$ elements where each element takes a value from the universe $[n]$.

The goal is to approximate some value while using a small amount of space.

## misra-gries

We start by initializing an empty associative array A.

For the processing of i:

1. if i $\in$ keys(A) then A[i] += 1
2. else if |keys(A)| < k-1 then A[i] = 1
3. else foreach j $\in$ keys(A)
   1. A[j] -= 1
   2. if A[j] = 0 then remove j from A

Given an element $a$, the output is $\hat f_a = A[a]$ (or zero).

Given a parameter k, this algorithm uses a single pass and $O(k(\log m + \log n))$ space to return an estimate for any $a$ satisfying

$$
f_a - \frac{m}{k} \le \hat f_a \le f_a
$$
