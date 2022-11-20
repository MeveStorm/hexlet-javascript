import chunk from 'lodash/chunk.js';

const hexToRgb = (colorHex) => {
  const color = chunk(colorHex.replace(/^#/, ''), 2)
    .map((hex) => parseInt(hex.join(''), 16));
  const [r, g, b] = color;

  return { r, g, b };
};

const rgbToHex = (r, g, b) => {
  const colorRgb = [r, g, b]
    .map((rgb) => rgb.toString(16).padStart(2, '0'))
    .join('');
  return `#${colorRgb}`;
};

export { hexToRgb, rgbToHex };
