# alphabet

$\Sigma = \{a^{(1)}, \cdots, a^{(\rho)}\}$ Non-empty!

## words

Finite sequence of elements (letters)

Empty word: $w = \varepsilon$

A set of all words over an alphabet is infinite and countable: $\Sigma^*$

We can enumerate all words as follows (canonical order):

1. shorter words proceed longer ones
2. equal lengths are sorted alphabetically

## language

A language over an alphabet is any subset of $\Sigma^*$, there is an infinite uncountable number of languages

## grammars

$G = (V, T, P, S)$

- $V$ - finite set of symbols called nonterminals
- $T$ - finite set of symbols called terminals
- $P$ - finite set of productions
- $S$ - nonterminal (distinguished) called initial symbol of a grammar

production is a pair $(\alpha, \beta)$, $\alpha, \beta \in (V \cup T)^*$, $\alpha \ne \varepsilon$

### direct derivation

$\gamma \alpha \delta \implies \gamma \beta \delta$, $\alpha, \beta, \gamma, \delta \in (V \cup T)^*$ and $\alpha \to \beta$ is a production

### derivation

Application of direct derivation several times

A language $L(G)$ generated bu a grammar $G$ is the set of all words over $T$ that can be derived from $S$
