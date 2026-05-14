// 5×7 bitmap font for digits 0–9. Each row is a 5-bit mask, MSB = leftmost pixel.
const DIGITS: number[][] = [
  [0b01110, 0b10001, 0b10001, 0b10001, 0b10001, 0b10001, 0b01110], // 0
  [0b00100, 0b01100, 0b00100, 0b00100, 0b00100, 0b00100, 0b01110], // 1
  [0b01110, 0b10001, 0b00001, 0b00110, 0b01000, 0b10000, 0b11111], // 2
  [0b01110, 0b10001, 0b00001, 0b00110, 0b00001, 0b10001, 0b01110], // 3
  [0b00010, 0b00110, 0b01010, 0b10010, 0b11111, 0b00010, 0b00010], // 4
  [0b11111, 0b10000, 0b11110, 0b00001, 0b00001, 0b10001, 0b01110], // 5
  [0b00110, 0b01000, 0b10000, 0b11110, 0b10001, 0b10001, 0b01110], // 6
  [0b11111, 0b00001, 0b00010, 0b00100, 0b01000, 0b01000, 0b01000], // 7
  [0b01110, 0b10001, 0b10001, 0b01110, 0b10001, 0b10001, 0b01110], // 8
  [0b01110, 0b10001, 0b10001, 0b01111, 0b00001, 0b00010, 0b01100], // 9
]

const FONT_W = 5
const FONT_H = 7

function drawChar(
  buf: Uint8Array,
  imgW: number,
  digit: number,
  x: number,
  y: number,
  scale: number,
  color: [number, number, number],
): void {
  const rows = DIGITS[digit]
  for (let row = 0; row < FONT_H; row++) {
    for (let col = 0; col < FONT_W; col++) {
      if (rows[row] & (1 << (FONT_W - 1 - col))) {
        for (let sy = 0; sy < scale; sy++) {
          for (let sx = 0; sx < scale; sx++) {
            const i =
              ((y + row * scale + sy) * imgW + (x + col * scale + sx)) * 4
            buf[i] = color[0]
            buf[i + 1] = color[1]
            buf[i + 2] = color[2]
            buf[i + 3] = 255
          }
        }
      }
    }
  }
}

export function drawNumber(
  buf: Uint8Array,
  imgW: number,
  num: number,
  centerX: number,
  y: number,
  scale: number,
  color: [number, number, number],
): void {
  const digits = String(num).split('').map(Number)
  const charW = FONT_W * scale + 1
  const totalW = digits.length * charW - 1
  let x = centerX - Math.floor(totalW / 2)
  for (const d of digits) {
    drawChar(buf, imgW, d, x, y, scale, color)
    x += charW
  }
}
