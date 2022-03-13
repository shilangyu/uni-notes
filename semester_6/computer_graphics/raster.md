# raster

Grid of pixels

- **resolution** - size of the raster in pixels
- **physical size** - physical dimensions of the picture
- **PPI** - pixels per inch, relation of physical size and its resolution

## raster graphics

- Accurately represents realistic images
- File size depends on the image resolution
- Not suitable for image transformations

## vector graphics

- Cannot represent realistic images
- File size independent of the resolution
- Suitable for image transformations

## color function

Mapping colors of individual pixels of an image through a function: $C_{out} = f(C_{in})$

- Contrast: $f(c) = (c - 0.5) \cdot \alpha + 0.5$
- Gamma correction: $f(c) = c^\gamma$

## convolution filters

Mapping colors of a matrix of pixels of an image through a kernel.

$$
I'_{x, y} = I_{off} + \frac{\sum_i \sum_j M_{i, j} \cdot I_{x+i, y+j}}{D}
$$

Where $M_{0,0}$ is the anchor of the kernel.

- $I_{off}$ - some offset
- $D$ - divisor (usually $\sum_i \sum_j M_{i, j}$)

### edge cases

#### kernel on the edge of the image

- treat missing pixels as black
- tile the image
- copy pixels on the edge

#### color values out of range

- clamping
- change function to be normalized

### filters

#### blur

$$
\begin{bmatrix}
	1 & 1 & 1 \\
	1 & 1 & 1 \\
	1 & 1 & 1 \\
\end{bmatrix}
$$

#### gaussian smoothing

$G(x,y) = \frac{1}{2 \pi \sigma^2} \exp{(-\frac{x^2 + y^2}{2\sigma^2})}$

$$
\begin{bmatrix}
	0 & 1 & 0 \\
	1 & 4 & 1 \\
	0 & 1 & 0 \\
\end{bmatrix}
$$

#### sharpen filter

$$
\begin{bmatrix}
	0 & -\frac{a}{s} & 0 \\
	-\frac{a}{s} & \frac{b}{s} & -\frac{a}{s} \\
	0 & -\frac{a}{s} & 0 \\
\end{bmatrix}
$$

Where $s = b - 4a$

##### mean removal

$$
\begin{bmatrix}
	-1 & -1 & -1 \\
	-1 & 9 & -1 \\
	-1 & -1 & -1 \\
\end{bmatrix}
$$

#### horizontal edge detection

$$
\begin{bmatrix}
	0 & -1 & 0 \\
	0 & 1 & 0 \\
	0 & 0 & 0 \\
\end{bmatrix}
$$

#### vertical edge detection

$$
\begin{bmatrix}
	0 & 0 & 0 \\
	-1 & 1 & 0 \\
	0 & 0 & 0 \\
\end{bmatrix}
$$

#### diagonal edge detection

$$
\begin{bmatrix}
	-1 & 0 & 0 \\
	0 & 1 & 0 \\
	0 & 0 & 0 \\
\end{bmatrix}
$$

##### laplacian edge detection

$$
\begin{bmatrix}
	0 & -1 & 0 \\
	-1 & 4 & -1 \\
	0 & -1 & 0 \\
\end{bmatrix}
$$

$$
\begin{bmatrix}
	-1 & -1 & -1 \\
	-1 & 8 & -1 \\
	-1 & -1 & -1 \\
\end{bmatrix}
$$

#### emboss

$$
\begin{bmatrix}
	-1 & 0 & 1 \\
	-1 & 1 & 1 \\
	-1 & 0 & 1 \\
\end{bmatrix}
$$

## achromatic light

Described only by intensity:

- luminance: measure of light intensity per unit area
- brightness: psychophysical sense of perceived intensity

### Weber-Fechner law

$$
p = k \ln \frac{Y}{Y_0}
$$

where $p$ - perceived brightness, $Y$ - luminance, $Y_0$ - threshold luminance

#### contrast ratio

Ratio of luminous intensity of the brightest and darkest possible point on the screen ($Y_0 : 1$)

Typical LCD displays have between $400:1$ and $2000:1$

### mach bands

Intensity at the vicinity of an edge is overestimated for light values and underestimated for dark values

### halftoning

Printing using dots of ink

#### CMYK

Cyan Magenta Yellow (K)Black

Each rotated to not overlap:

- $45^\circ$ black
- $90^\circ$ yellow
- $75^\circ$ magenta
- $105^\circ$ cyan

## dithering

Impression of multiple levels of gray on a device capable of displaying limited number of levels

### ordered dithering

Example dither matrices:

$$
D_2 = \begin{bmatrix}
	1 & 3 \\
	4 & 2 \\
\end{bmatrix}
$$

$$
D_3 = \begin{bmatrix}
	3 & 7 & 4 \\
	6 & 1 & 9 \\
	2 & 8 & 5 \\
\end{bmatrix}
$$

#### Bayer matrix

$$
B_n = \frac{1}{n^2 + 1}D_n
$$

### error diffusion

Error being the difference between the approximated pixel value and the real value is distributed to neighboring pixels. So a weighted error diffusion can be applied, which modifies the pixels which will be processed next:

$$
\begin{bmatrix}
	0 & 0 & 0 \\
	0 & 0 & \frac{7}{16} \\
	\frac{3}{16} & \frac{5}{16} & \frac{1}{16} \\
\end{bmatrix}
$$
