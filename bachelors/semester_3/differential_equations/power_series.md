# power series

$\sum_{n=0}^\infty a_n(x - x_0)^n$

for more, see [semester 2](../../semester_2/mathematical_analysis/power_series.html)

## extended ratio/root test

$l = \lim_{n \to \infty} |\frac{a_{n+1}}{a_n}|$ or $l = \lim_{n \to \infty} \sqrt[n]{|a_n|}$

(Note: here $l \ne l$)

then:

$$
    R =
    \begin{cases}
      \frac{1}{l} & \text{if}\ l > 0 \\
      \infty & \text{if}\ l = 0 \\
      0 & \text{if}\ l = \infty \\
    \end{cases}
$$

- if $|x - x_0| < R$, the power series converges absolutely
- if $|x - x_0| > R$, the power series diverges
- if $|x - x_0| = R$, the test is inconclusive
