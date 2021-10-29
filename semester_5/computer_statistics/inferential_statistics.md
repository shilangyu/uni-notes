# inferential statistics

Procedures used to draw conclusions about population characteristics based on the information contained in a sample drawn from this population.

## $\chi^2$ distribution

Let $\chi_k^2$ denotes a $\chi^2$ distribution with $k$ degrees of freedom

- Let $X \sim N(0,1)$ then $X^2 \sim \chi_1^2$
- Let $U_1, \cdots, U_n \sim \chi_1^2$ then $V = \sum_{i=1}^n U_i \sim \chi_n^2$
- $E[\chi_n^2] = n$
- $Var(\chi_n^2) = 2n$

### $t$-student distribution

Let $X \sim N(0,1)$ and $U \sim \chi_n^2$ independent, then:

$$
\frac{X}{\sqrt{\frac{U}{n}}} \sim t_n
$$
