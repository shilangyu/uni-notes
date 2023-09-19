# semantic correctness

Is when an algorithm is proven to produce correct output for a given input.

## labeling steps

- $\alpha$ - initial condition (START)
- $\beta$ - final condition (STOP)
- $\gamma_i$ - condition at a step (usually before loops)

## proving correctness

When all three are proved, the algorithm is proved to be correct on $\alpha$ and $\beta$

### partial correctness

For all input that satisfy $\alpha$, the output satisfies $\beta$

#### possible solution

Assuming gamma is right before a conditional loop:

- $\alpha \implies \gamma_1$
- $\gamma_1 \land \text{loop condition} \implies \gamma_1'$
- $\gamma_1 \land \neg \text{loop condition} \implies \gamma_2$
- $\gamma_2 \land \text{loop condition} \implies \gamma_2'$
- $\dots$
- $\gamma_n \land \neg \text{loop condition} \implies \beta$

### determination

All steps are clearly defined, for example there is no division by 0.

### STOP property

For all input that satisfy $\alpha$, the algorithm halts: there is no infinite loop.
