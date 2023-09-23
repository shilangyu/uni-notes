# proof system

A set of logical formulas $\mathcal F$ then a proof system is $(\mathcal F, \text{Infer})$ where $\text{Infer} \subseteq \mathcal F^* \times \mathcal F$ a decidable set of inference steps

- a set is decidable iff there is a program to check if an element belongs to it
- given a set $S$ notation $S^*$ denotes all finite sequences with elements from $S$

Inference step $((P_1, \cdots, P_n), C) \in \text{Infer}$ by $\frac{P_1 \cdots P_n}{C}$ where $P_i$ are called premises and $C$ the conclusion. An inference step is called an axiom instance when $n = 0$ (it has no premise). Given a proof system $(\mathcal F, \text{Infer})$ a proof is finite sequence of inference steps such that, for every inference step, each premise is a conclusion of a previous step.

## provable

We say $F \in \mathcal F$ is provable from assumptions $A$ iff there exists a derivation from $A$ in $\text{Infer}$ that contains an inference step whose conclusion is $F$. Denoted by $A \vdash_{\text{Infer}} F$

## semantic consequence

For $A \subseteq \mathcal F$ and $C \in \mathcal F$ we say $C$ is a semantic consequence of $A$ iff for every environment $e$ if $e \mid= P$ for all $P \in A$ then $e \mid= C$. We denote it by $A \mid= C$.

## soundness

A step $((P_1, \cdots, P_n), C) \in \text{Infer}$ is sound iff $\{P_1, \cdots, P_n\} \mid= C$. A proof system $\text{Infer}$ is sound if every inference rule is sound.

If $\text{Infer}$ is sound then $A \vdash_{\text{Infer}}F \implies A \mid= F$
