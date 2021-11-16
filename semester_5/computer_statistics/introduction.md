# Computer statistics

Midterm 1: 16.11 or 23.11
Midterm 2: 11.01
R test: 24-25.01

## descriptive statistics

Deals with collecting,

- **Population**: complete collection of all items of interest
- **Sample**: observed subset of the population. Denoted by $x_1, x_2, \dots x_n$ where is a sample size
- **Parameter**: characteristic of a population (fixed)
- **Statistic**: specific characteristic of a sample. Estimator is a statistic which we wish to be close to the parameter of interest
- **Variable**: characteristic of an individual

## classification

- categorical
  - ordinal: can be ordered
  - nominal: cannot be ordered
- numerical
  - discrete: set of possible values, often integers
  - continuous: range of possible values, often floats

## frequency distribution

- For categorical data, columns are in the following order: Classes (ordered), amount, frequency, cumulative amount, cumulative frequency
- For continuous or discrete with many values: Class intervals, midpoint, amount, frequency, cumulative amount, cumulative frequency. The number of intervals is $\sqrt{n}$ for small $n$, $\lceil\log_2(n)\rceil + 1$ for large $n$

### numerical description

$x_{(1)}, \cdots, x_{(n)}$ denotes an ordered sample

#### measures

##### central tendency

- **Sample mean**: arithmetic average
- **Median**: "middle value"
- **Mode**: most frequent value

##### quantiles

The sample quantile to probability $p$, $\hat q_p$ has position $(n+1)p$ in the ordered sample. So $\hat q_p = x_{((n+1)p)}$.

##### variability

- **Range**: $R = m_{\max} - m_{\min}$
- **Interquantile Range**: $IQR = Q_3 - Q_1$
- **Sample variance**: $s^2 = \frac{1}{n-1}\sum_{i=1}^n(x_i - \overline x)^2 = \frac{\sum_{i=1}^n x_i^2 - n(\overline x)^2}{n-1}$
- **Sample standard deviation**: $s = \sqrt{s^2}$

##### shapes

- **Skewness**: $sk = \frac{m_3}{s^3}$ where $m_3 = \frac{1}{n} \sum_{i=1}^n (x_i - \overline x)^3$
- **Kurtosis**: $k = \frac{m_4}{s^4}$ where $m_4 = \frac{1}{n} \sum_{i=1}^n (x_i - \overline x)^4$

##### outliers

- If $x_i < Q_1 - 1.5IQR \lor x_i > Q_3 + 1.5IQR$ then it is called an outlier
- If $x_i < Q_1 - 3IQR \lor x_i > Q_3 + 3IQR$ then it is called an extreme outlier
