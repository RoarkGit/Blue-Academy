import { readFileSync, writeFileSync } from 'fs'
import UPNG from 'upng-js'

const ICON_SIZE = 64
const COLS = 12
const ROWS = 2
const GAP = 6
const PAD = 20
const FONT_SCALE = 2
const TEXT_H = 7 * FONT_SCALE + 4

const IMG_W = COLS * ICON_SIZE + (COLS - 1) * GAP + PAD * 2
const IMG_H = ROWS * (ICON_SIZE + TEXT_H) + (ROWS - 1) * GAP + PAD * 2

const BG = [28, 35, 51]
const SLOT = [45, 52, 70]
const TEXT_COLOR = [180, 180, 180]

const DIGITS = [
  [0b01110, 0b10001, 0b10001, 0b10001, 0b10001, 0b10001, 0b01110],
  [0b00100, 0b01100, 0b00100, 0b00100, 0b00100, 0b00100, 0b01110],
  [0b01110, 0b10001, 0b00001, 0b00110, 0b01000, 0b10000, 0b11111],
  [0b01110, 0b10001, 0b00001, 0b00110, 0b00001, 0b10001, 0b01110],
  [0b00010, 0b00110, 0b01010, 0b10010, 0b11111, 0b00010, 0b00010],
  [0b11111, 0b10000, 0b11110, 0b00001, 0b00001, 0b10001, 0b01110],
  [0b00110, 0b01000, 0b10000, 0b11110, 0b10001, 0b10001, 0b01110],
  [0b11111, 0b00001, 0b00010, 0b00100, 0b01000, 0b01000, 0b01000],
  [0b01110, 0b10001, 0b10001, 0b01110, 0b10001, 0b10001, 0b01110],
  [0b01110, 0b10001, 0b10001, 0b01111, 0b00001, 0b00010, 0b01100],
]

function drawChar(buf, imgW, digit, x, y, scale, color) {
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 5; col++) {
      if (DIGITS[digit][row] & (1 << (4 - col))) {
        for (let sy = 0; sy < scale; sy++) {
          for (let sx = 0; sx < scale; sx++) {
            const i = ((y + row * scale + sy) * imgW + (x + col * scale + sx)) * 4
            buf[i] = color[0]; buf[i+1] = color[1]; buf[i+2] = color[2]; buf[i+3] = 255
          }
        }
      }
    }
  }
}

function drawNumber(buf, imgW, num, centerX, y, scale, color) {
  const digits = String(num).split('').map(Number)
  const charW = 5 * scale + 1
  const totalW = digits.length * charW - 1
  let x = centerX - Math.floor(totalW / 2)
  for (const d of digits) { drawChar(buf, imgW, d, x, y, scale, color); x += charW }
}

function fillRect(buf, imgW, x, y, w, h, color) {
  for (let py = 0; py < h; py++)
    for (let px = 0; px < w; px++) {
      const i = ((y + py) * imgW + (x + px)) * 4
      buf[i] = color[0]; buf[i+1] = color[1]; buf[i+2] = color[2]; buf[i+3] = 255
    }
}

function scalePixels(src, srcW, srcH, dstW, dstH) {
  const dst = new Uint8Array(dstW * dstH * 4)
  for (let y = 0; y < dstH; y++)
    for (let x = 0; x < dstW; x++) {
      const si = (Math.floor(y * srcH / dstH) * srcW + Math.floor(x * srcW / dstW)) * 4
      const di = (y * dstW + x) * 4
      dst[di] = src[si]; dst[di+1] = src[si+1]; dst[di+2] = src[si+2]; dst[di+3] = src[si+3]
    }
  return dst
}

function blitIcon(dst, dstW, src, srcW, srcH, x, y) {
  const scaled = (srcW === ICON_SIZE && srcH === ICON_SIZE) ? src : scalePixels(src, srcW, srcH, ICON_SIZE, ICON_SIZE)
  for (let py = 0; py < ICON_SIZE; py++)
    for (let px = 0; px < ICON_SIZE; px++) {
      const si = (py * ICON_SIZE + px) * 4
      const di = ((y + py) * dstW + (x + px)) * 4
      const a = scaled[si + 3] / 255
      if (a === 0) continue
      if (a === 1) { dst[di] = scaled[si]; dst[di+1] = scaled[si+1]; dst[di+2] = scaled[si+2]; dst[di+3] = 255 }
      else {
        dst[di]   = Math.round(scaled[si]   * a + dst[di]   * (1-a))
        dst[di+1] = Math.round(scaled[si+1] * a + dst[di+1] * (1-a))
        dst[di+2] = Math.round(scaled[si+2] * a + dst[di+2] * (1-a))
        dst[di+3] = 255
      }
    }
}

function decodeLoadout(encoded) {
  const std = encoded.replace(/-/g, '+').replace(/_/g, '/')
  return Array.from(atob(std), c => c.charCodeAt(0))
}

const spellMap = JSON.parse(readFileSync('static/spell-icons.json', 'utf8'))
const loadout = decodeLoadout('CQwnLC8_QEhNTlBRUlRaZGdodnp8AABt').slice(0, 24)

const buf = new Uint8Array(IMG_W * IMG_H * 4)
fillRect(buf, IMG_W, 0, 0, IMG_W, IMG_H, BG)

for (let idx = 0; idx < 24; idx++) {
  const col = idx % COLS
  const row = Math.floor(idx / COLS)
  const dx = PAD + col * (ICON_SIZE + GAP)
  const dy = PAD + row * (ICON_SIZE + TEXT_H + GAP)
  fillRect(buf, IMG_W, dx, dy, ICON_SIZE, ICON_SIZE, SLOT)

  const spellNum = loadout[idx]
  if (spellNum) {
    const spell = spellMap[String(spellNum)]
    if (spell) {
      const iconBuf = readFileSync(`static${spell.url}`)
      const decoded = UPNG.decode(iconBuf.buffer.slice(iconBuf.byteOffset, iconBuf.byteOffset + iconBuf.byteLength))
      const rgba = UPNG.toRGBA8(decoded)
      blitIcon(buf, IMG_W, new Uint8Array(rgba[0]), decoded.width, decoded.height, dx, dy)
    }
    drawNumber(buf, IMG_W, spellNum, dx + ICON_SIZE / 2, dy + ICON_SIZE + 2, FONT_SCALE, TEXT_COLOR)
  }
}

const png = UPNG.encode([buf.buffer], IMG_W, IMG_H, 0)
writeFileSync('sample-og.png', Buffer.from(png))
console.log(`Written sample-og.png (${IMG_W}x${IMG_H})`)
