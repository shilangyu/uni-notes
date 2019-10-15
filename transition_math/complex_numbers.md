# complex numbers

#### definition

A complex number $z=x+iy$ where $x,y \in \mathbb{R}$, $z \in \mathbb{C}$

$x$, $Re(z)$ - real part of $z$

$y$, $Im(z)$ - imaginary part of $z$

$\mathbb{R} \subsetneq \mathbb{C}$

$i \in \mathbb{C} - \mathbb{R}$

#### conjuction

$\bar{z} = x - iy$

#### length

$|z| = \sqrt{x^2 + y^2}$

#### trygonometric/polar form

$z = |z|(\cos{\alpha} + i\sin{\alpha})$

where:

$\cos{\alpha} = \frac{x}{|z|}$

$\sin{\alpha} = \frac{y}{|z|}$

#### exponential form

$z = |z|e^{i\alpha}$

$z^k = |z|^ke^{ik\alpha}$

therefore:

$e^{iz} = \cos{z} + i\sin{z}$

#### roots

An `n-th` root of a complex number `z` ($\sqrt[n]{z}$) has `n` solutions: $\{w_0, w_1, ..., w_{n-1}\}$ these are vertices of an `n`-regular polygon.

$w_l = \sqrt[n]{|z|}e^{i\frac{\alpha + 2\pi l}{n}}$

#### polynomials

let $f(x) = x^2 + x + 1$

$f$ has no real roots it has however, 2 complex ones:

$$
x = \frac{-b \plusmn \sqrt{b^2 - 4ac}}{2a}
\\
x = \frac{-1 \plusmn \sqrt{1^2 - 4*1*1}}{2*1}
\\
x = \frac{-1 \plusmn \sqrt{-3}}{2}
\\
x = \frac{-1 \plusmn \sqrt{3i^2}}{2}
\\
x = -\frac{1}{2} \plusmn i\frac{\sqrt{3}}{2}
$$

if $a,b,c \in \mathbb{R}$ and $z$ is a root of $f$ then $\bar{z}$ is a root aswell

#### cheatsheet

let $z = |z|(\cos{\alpha} + i\sin{\alpha})$, $w = |w|(\cos{\phi} + i\sin{\phi})$ then:

$zw = |z||w|(\cos(\phi + \alpha) + i\sin(\phi + \alpha))$

$z^n = |z|^n(\cos(n\alpha) + i\sin(n\alpha))$
