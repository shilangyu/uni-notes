# second order linear differential equations

## homogenous

$ay'' + by' + cy = 0$

1. $y = e^{rx}$
2. $ar^2e^{rx} + bre^{rx} + ce^{rx} = 0$
3. $ar^2 + br + c = 0$
4. $y = e^{r_1x}\ \lor\ y = e^{r_2x}$
5. for $c_1, c_2$ as arbitrary constants: $y = c_1e^{r_1x} + c_2e^{r_2x}$

- If $r$ is complex, the general solution is in the form: $y = e^{Re(r)x}(b_1 \cos(Im(r)x) + b_2 \sin(Im(r)x))$
- If $r_1 = r_2$ then $y = c_1e^{rx} + c_2xe^{rx}$

## non-homogenous

$ay'' + by' + cy = g(x)$

Let $y_h$ be the solution to $ay'' + by' + cy = 0$ and $y_p$ is a collection of functions that differentiated give $g(x)$

Then $y = y_h + y_p$

### method of undetermined coefficients

**Examples:**

1. $ay'' + by' + cy = \sin(x)$
2. $y_p = A\cos(x) + B\sin(x)$
   - $y_p' = -A\sin(x) + B\cos(x)$
   - $y_p'' = -A\cos(x) - B\sin(x)$
3. $a(-A\cos(x) - B\sin(x)) + b(-A\sin(x) + B\cos(x)) + c(A\cos(x) + B\sin(x)) = \sin(x)$
4. $(-Aa + Bb + Ac)\cos(x) + (-Ba - Ab  + Bc)\sin(x) = \sin(x)$
5. So: $-Aa + Bb + Ac = 0$ and $-Ba - Ab  + Bc = 1$
6. Solving step 5 we get $A$ and $B$

### method of variation of parameters

$y_p = v_1 y_1 + v_2 y_2$

$$
	\begin{cases}
		v_1'y_1 + v_2'y_2 = 0 \\
		v_1'y_1' + v_2'y_2' = \frac{g(x)}{a} \\
	\end{cases}
$$

#### Wronskian

$W(x) = y_1y_2' + y_1'y_2$

Then: $v_1 = -\int \frac{g(x)y_2}{a \cdot W(x)} dx$ and $v_2 = \int \frac{g(x)y_1}{a \cdot W(x)} dx$

## damped harmonic motion

$\frac{d^2x}{dt^2} + \beta\frac{dx}{dt} + \omega^2x = 0$ where $\beta = \frac{\gamma}{m}$ and $\omega^2 = \frac{k}{m}$

We can see this as a differential equation:

$r^2 + \beta r + \omega^2 = 0$

- if $\beta^2 > 4\omega^2$ (two real roots) we call it overdamped
- if $\beta^2 = 4\omega^2$ (one real root) we call it critically damped
- if $\beta^2 < 4\omega^2$ (complex roots) we call it an underdamped case
  - let $\overline \omega = \omega \sqrt{1 - \frac{\beta^2}{4\omega^2}}$
  - then $x = e^\frac{-\beta t}{2}(c_1 \cos\overline\omega t + c_2 \sin\overline\omega t)$

## damped forced oscillations

$m\frac{d^2x}{dt^2} + \gamma \frac{dx}{dt} + kx = F_0 \cos \Omega t$

The solution is:

$$
x(t) = c_1e^{r_1t} + c_2e^{r_2t} + \frac{F_0}{\sqrt{m^2(\omega^2 - \Omega^2)^2 + \gamma^2\omega^2}}\cos(\Omega t - \delta)
$$

Where $\delta = \tan^{-1}\big (\frac{\gamma \Omega}{m(\omega^2 - \Omega^2)}\big )$
