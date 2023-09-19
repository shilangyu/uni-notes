# color

## complementary colors

Colors that when mixed together produce white. For example, in RGB model the following pairs of colors are complementary:

- blue, yellow
- red, cyan
- green, magenta

## color model

- Color is represented by a tuple of numbers
- Perceived color depends on the viewing device

### RGB

$(R, G, B)$ - three primary colors, Red, Green, Blue added together to produce colors.

### CMY

$(C, M, Y)$ - three primary colors, Cyan, Magenta, Yellow subtracted together to produce colors.

$$
\begin{bmatrix}
	C \\
	M \\
	Y \\
\end{bmatrix} = \begin{bmatrix}
	1 \\
	1 \\
	1 \\
\end{bmatrix} - \begin{bmatrix}
	R \\
	G \\
	B \\
\end{bmatrix}
$$

Used in printing, due to reliance on reflecting external light. Even though theory mixing cyan magenta and yellow should produce black, this is often not the case in the real world and thus black is introduced as a separate color.

### Y'UV / Y'IQ

Encoding of RGB for analog or digital TV signal transmission

- Y' - luma (brightness)
- UV, IQ - chrominance, two components describing the color (hue, saturation)

$R,G,B,Y' \in [0; 1]$

$U \in [−0.436; 0.436]$, $V \in [−0.615; 0.615]$

$$
\begin{bmatrix}
	Y' \\
	U \\
	V \\
\end{bmatrix} = \begin{bmatrix}
	0.299 & 0.587 & 0.114 \\
	-0.14713 & -0.28886 & 0.436 \\
	0.615 & -0.51499 & -0.10001 \\
\end{bmatrix}\begin{bmatrix}
	R \\
	G \\
	B \\
\end{bmatrix}
$$

$I \in [−0.596; 0.596]$, $Q \in [−0.523; 0.523]$

$$
\begin{bmatrix}
	Y' \\
	I \\
	Q \\
\end{bmatrix} = \begin{bmatrix}
	0.299 & 0.587 & 0.114 \\
	0.595716 & -0.274453 & -0.321263 \\
	0.211456 & -0.522591 & 0.311135
\end{bmatrix}\begin{bmatrix}
	R \\
	G \\
	B \\
\end{bmatrix}
$$

Conversion to grayscale: $Y' = 0.299R + 0.587G + 0.114B$

### HSV / HSL

Hue, saturation, brightness/lightness

$M = \max(R,G,B)$, $m = \min(R,G,B)$, then

$$
H = 60^\circ \cdot \begin{cases}
	0 & \text{ if } M = m \\
	\frac{G - B}{M - m} \mod 6 & \text{ if } M = R \\
	\frac{B - R}{M - m} + 2 & \text{ if } M = G \\
	\frac{R - G}{M - m} + 4 & \text{ if } M = B \\
\end{cases}
$$

$$
S_{HSV} = \frac{\max(R, G, B) − \min(R, G, B)}{\max(R, G, B)}
$$

$$
S_{HSL} = \frac{\max(R, G, B) − \min(R, G, B)}{1 - |\max(R, G, B) + \min(R, G, B) - 1|}
$$

$$
V = \max(R, G, B)
$$

$$
L = \frac{\max(R, G, B) + \min(R, G, B)}{2}
$$

### absolute color space

Color space where colors are unambiguous. For example RGB can become an absolute color space if we account for individual color profiles of devices.

#### CIE RGB 1931

International Commission on Illumination (CIE) defines standard absolute color spaces such as CIE RGB 1931. Primary colors are a set of monochromatic single wavelength colors:

- $R = 700nm$
- $G = 546.1nm$
- $B = 438.1nm$

![](https://www.researchgate.net/profile/David-Nebouy/publication/325876976/figure/fig20/AS:651592764231687@1532363229643/Plot-of-the-CIE-RGB-color-matching-functions-for-the-1931-CIE-Standard-observer.png)

$$
\begin{aligned}
	R & = \int_0^\infty I(\lambda)\bar r(\lambda) d\lambda \\
	G & = \int_0^\infty I(\lambda)\bar g(\lambda) d\lambda \\
	B & = \int_0^\infty I(\lambda)\bar b(\lambda) d\lambda \\
\end{aligned}
$$

Where $I(\lambda)$ is the spectral power distribution.

#### CIE xyY chromaticity diagram

![Chromaticity Diagram](https://www.researchgate.net/profile/Octavio-Espinoza/publication/253910240/figure/fig2/AS:298057896873992@1448073948464/CIE-xy-chromaticity-diagram-Source-document.png)

##### white point

White Point defines a reference white color for image capture or reproduction. It can be specified either by $(x, y)$ coordinates on a chromaticity diagram or by color temperature. Where color temperature is the temperature of a black body which radiation is closest to the spectral power distribution of the surrounding ambient light.

## color quantization

Representing an image with a limited set of colors (color palette)

### fixed quantization

Fixed color palette, fixed mapping. Causes color shifts, false contours.

#### uniform

Uniform subdivision of RGB cube for each coordinate, mapping done with some respect to some distance function (for example Euclidean distance).

### adaptive quantization

Image-dependent color palette.

#### popularity

We select $k$ most frequent occurring colors.

#### median cut

Subdivide color space such that each cuboid has the same amount of pixels

#### k-means

k-colors as the k-centroids of the color space from k-means algorithm
