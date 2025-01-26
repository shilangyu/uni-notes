# hashing

We consider hash functions from hash families $h \in \mathcal H$ which map elements from a universe $U$ into $[N]$.

## 2-universal hash families

A family $\mathcal H$ is 2-universal if for any $x \ne y \in U$

$$
P_{h \in \mathcal H}[h(x) = h(y)] \le \frac{1}{N}
$$

## 2-wise independent

A family $\mathcal H$ is 2-wise independent if for any $x \ne y \in U$ and any $s, t \in [N]$

$$
P_{h \in \mathcal H}[h(x) = s, h(y) = t] = \frac{1}{N^2}
$$
