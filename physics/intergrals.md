# integrals

### notation

$\int f'(x) dx = f(x) + const$

### rules

| function     | integration with respect to $x$ |
| ------------ | ------------------------------- |
| $a$          | $ax + const$                    |
| $x^n$        | $\frac{1}{n+1} x^{n+1} + const$ |
| $e^x$        | $e^x + const$                   |
| $a^x$        | $\frac{a^x}{\ln(a)} + const$    |
| $\ln(x)$     | $x\ln(x) - x + const$           |
| $\sin(x)$    | $-\cos(x) + const$              |
| $\cos(x)$    | $\sin(x) + const$               |
| $\int af(x)$ | $a \int f(x)$                   |

### integration by substitution

Let $u = g(x)$ then: $\int f(g(x))g'(x) dx = \int f(u)du$.

**Example**:

Solve $\int cos(x^2)x$. Let $u = x^2$, $u' = 2x$.

Then $\int cos(x^2)x = \frac{1}{2} \int cos(x^2)2x = \frac{1}{2} sin(x^2)$
