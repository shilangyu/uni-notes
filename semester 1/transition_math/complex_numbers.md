# complex numbers

#### definition

A complex number $z=x+iy$ where $x,y \in \mathbb{R}$, $z \in \mathbb{C}$

$x$, $Re(z)$ - real part of $z$

$y$, $Im(z)$ - imaginary part of $z$

$\mathbb{R} \subsetneq \mathbb{C}$

$i \in \mathbb{C} - \mathbb{R}$

#### conjunction

$\bar{z} = x - iy$

#### length

$|z| = \sqrt{x^2 + y^2}$

#### trigonometric/polar form

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

An `n-th` root of a complex number `z` ($\sqrt[n]{z}$) has `n` solutions: $\{w_0, w_1, \cdots, w_{n-1}\}$ these are vertices of an `n`-regular polygon.

$w_l = \sqrt[n]{|z|}e^{i\frac{\alpha + 2\pi l}{n}}$

#### polynomials

let $f(x) = x^2 + x + 1$

$f$ has no real roots it has however, 2 complex ones:

$$
\begin{matrix}
	x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \\
	x = \frac{-1 \pm \sqrt{1^2 - 4 \cdot 1 \cdot 1}}{2 \cdot 1} \\
	x = \frac{-1 \pm \sqrt{-3}}{2} \\
	x = \frac{-1 \pm \sqrt{3i^2}}{2} \\
	x = -\frac{1}{2} \pm i\frac{\sqrt{3}}{2} \\
\end{matrix}
$$

if $a,b,c \in \mathbb{R}$ and $z$ is a root of $f$ then $\bar{z}$ is a root as well

#### cheatsheet

let $z = |z|(\cos{\alpha} + i\sin{\alpha})$, $w = |w|(\cos{\phi} + i\sin{\phi})$ then:

$zw = |z||w|(\cos(\phi + \alpha) + i\sin(\phi + \alpha))$

$z^n = |z|^n(\cos(n\alpha) + i\sin(n\alpha))$
