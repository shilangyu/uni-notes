# integrals

A function $F(x)$ is called an antiderivative of $f(x)$ when:

$$
	F'(x) = f(x) \implies \frac{d F(x)}{dx} = f(x) \implies F(x) = \int f(x) dx
$$

## common antiderivatives

| $f(x)$                       | $\int f(x) dx$                                                               |
| ---------------------------- | ---------------------------------------------------------------------------- |
| $a$                          | $ax + C$                                                                     |
| $x^n$                        | $\frac{x^{n+1}}{n+1} + C$, $a \ne -1$                                        |
| $\frac{1}{x}$                | $\ln|x| + C$ | <!-- this fucks up Markdown All In One because of the | inside TeX while being in a table, tracker: https://github.com/yzhang-gh/vscode-markdown/issues/641--> 
| $e^x$                        | $e^x + C$                                                                    |
| $a^x$                        | $\frac{a^x}{\ln(a)} + C$                                                     |
| $\ln(x)$                     | $x\ln(x) - x + C$                                                            |
| $\sin(x)$                    | $-\cos(x) + C$                                                               |
| $\cos(x)$                    | $\sin(x) + C$                                                                |
| $\frac{1}{1 + x^2}$          | $\arctan(x) + C$                                                             |
| $\frac{1}{\sqrt{a^2 - x^2}}$ | $\arcsin\frac{x}{a} + C$                                                     |
| $\sqrt{a^2 - x^2}$           | $\frac{x}{2} \sqrt{a^2 - x^2} + \frac{a^2}{2} \arcsin\frac{x}{a} + C$        |
| $\frac{1}{\sqrt{a^2 + x^2}}$ | $\ln(x + \sqrt{a^2 + x^2}) + C$                                              |
| $\sqrt{a^2 + x^2}$           | $\frac{x}{2} \sqrt{a^2 + x^2} + \frac{a^2}{2} \ln(x + \sqrt{a^2 + x^2}) + C$ |

## rules

### constant multiple

$$
	\int af(x) dx = a \int f(x) dx
$$

### sum and difference

$$
	\int (f(x) \pm g(x)) dx = \int f(x) dx \pm \int g(x) dx
$$

### by substitution

Let $y = g(x)$

$$
	\int f(g(x))g'(x) dx = \int f(y)dy
$$

### by parts

$$
	\int f(x)g'(x)dx = f(x)g(x) - \int f'(x)g(x)dx
$$

## $+\ C$

We need to always add a constant after integration because it is lost during derivation:

Let $f(x) = x + 1$ then $f'(x) = 1$, then we integrate $\int f'(x) dx = x$. As we can see, the $+\ 1$ was lost.

Functions differing by a constant are called a family of primitive functions.

## method of partial fractions

To find $\int \frac{f(x)}{g(x)} dx$ two things have to be satisfied:

- the degree of $f(x)$ must be smaller than the degree of $g(x)$
- we must know the factors of $g(x)$

Then the following steps can be taken:

1. factorize $g(x)$
2. take factors of degree one from $g(x)$ (form of $(x - a)^m$) assign to them the sum of $m$ partial fractions:
   $$\sum_{i=1}^{m} \frac{A_i}{(x - a)^i}$$
3. take factors of degree two from $g(x)$ (form of $(x^2 + px + q)^n$) assign to them the sum of $n$ partial fractions:
   $$\sum_{i=1}^{n} \frac{B_ix + C_i}{(x^2 + px + q)^i}$$
4. set $\frac{f(x)}{g(x)}$ to be the sum of the partial sums from step 2 and 3
5. find the $A, B, C$ coefficients

Taking an integral of the partial fractions is much simpler.

## universal trigonometric substitution

Let $t = \tan\frac{x}{2}$ then trigonometrical functions can be reduced to a rational function:

- $\sin x = \frac{2t}{1 + t^2}$
- $\cos x = \frac{1 - t}{1 + t^2}$
- $\tan x = \frac{2t}{1 - t^2}$

$dx$ is then replaced with $\frac{2}{1 + t^2}dt$
