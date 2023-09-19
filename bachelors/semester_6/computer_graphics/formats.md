# formats

## PCX

Personal Computer Exchange

- Simple, fast, lossless
- Color palette stored in: 16 in header or 256 in the end
- Run-length encoding

## BMP

Bitmap

**Structure**:

- File header
- Bitmap information header
- Optional palette
- Image data
- Some versions allow to define, embed or link ICC color profile

24 or 32 bpp data

- Lossless
- Colors in B G R order
- Row of data is always a multiple of 4 bytes

## GIF

Graphics Interchange Format

- 256 global palette
- Multiple images in blocks
- LZW compression
- Animations

## PNG

Portable Network Graphics

- Two step compression
  - pre‐compression filtering (usually improves compression)
  - dictionary compression using DEFLATE algorithm (modified LZ77)
- Up to 16-bits per RGB channel, with alpha channel
- Allows for extensions specifying absolute color space and white point, gamma correction, histograms, color profiles, pixel aspect ratio, stereoscopy and many more features

## JPEG

Joint Photography Experts Group

- Lossy
- Very good compression ratio
- Bad for regular graphics (logos, shapes etc)
