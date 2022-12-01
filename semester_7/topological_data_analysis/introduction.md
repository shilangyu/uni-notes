# topological Data Analysis (TDA)

## Betti numbers

- $b_0$ - number of components of the space
- $b_1$ - number of essentially different loops in the space
- $b_2$ - number of 3D-voids in the space

### examples

1. Closed disk $b_0 = 1$, $b_1 = 0$, $b_2 = 0$
2. Two disjoint closed disks $b_0 = 2$, $b_1 = 0$, $b_2 = 0$
3. The circle $b_0 = 1$, $b_1 = 1$, $b_2 = 0$
4. Sphere $b_0 = 1$, $b_1 = 0$, $b_2 = 1$
5. Torus $b_0 = 1$, $b_1 = 2$, $b_2 = 1$

## persistent homology

By introducing a proximity parameter (say $r > 0$), to any data set (finite metric space) we may assign an evolving family of spaces. To these we can find topological descriptors - Betti numbers.

## topological entropy

Let $P_i = (b_i, d_i)$ for $i = 1, \cdots, n$.

Let $p_i = \frac{d_i - b_i}{\sum_{i=1}^n (d_i - b_i)}$

Then entropy is defined as $E = - \sum_{i=1}^n p_i \ln p_i$

The vector of entropies forms a topological descriptor of the point cloud.

## the mapper algorithm

1. divide the dataset into overlapping parts
2. to each part apply a clustering algorithm
3. if clusters from different parts have sufficient overlap, connect the vertices by an edge

## homeomorphism (equivalence)

Two spaces $A$ and $B$ are said to be equivalent (homeomorphic) if there is a continuous map of spaces $f: A \to B$ with a continuous inverse map $f^{-1}: B \to A$, then $f$ is called the homeomorphism.
