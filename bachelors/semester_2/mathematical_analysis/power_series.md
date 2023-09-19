# power series

A power series centered at $x = a$ is: $\sum a_n(x - a)^n = a_0 + a_1(x-a) + a_2(x - a)^2 + \cdots$

**example**: Geometric series centered at $x = 0$ then $1 + x + x^2 + \cdots = \frac{1}{1-x}$ are convergent at $-1 < x < 1$

## common power series

| function          | expanded series                          |
| ----------------- | ---------------------------------------- |
| $\frac{1}{1 - x}$ | $\sum x^n$ for $\vert x \vert \lt 1$     |
| $e^x$             | $\sum \frac{x^n}{n!}$                    |
| $\sin x$          | $\sum (-1)^n \frac{x^{2n+1}}{(2n + 1)!}$ |
| $\cos x$          | $\sum (-1)^n \frac{x^{2n}}{(2n)!}$       |
| $(1 + x)^k$       | $\sum \binom{k}{n}x^n$                   |

## convergence theorem

There are 3 possibilities for a power series with respect to convergence

- There is a positive number $R$ such that the series diverges for $|x-a| > R$ but converges for all $x$ such that $|x-a| < R$. The series may or may not converge at $x = a \pm R$
- The series converges for all $x$ ($R = \infty$)
- The series converges for $x = a$ and diverges elsewhere ($R = 0$)

## interval of convergence

The previously mentioned $R$ is called the _radius of convergence_

### finding the interval of convergence

1. Use ratio or n-th root test to find absolute convergence
2. Test convergence at the endpoints using DCT, LCT, or AST

## term-by-term differentiation

Inside of the interval of convergence, the series have derivatives of all orders.
