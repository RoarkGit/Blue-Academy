import UPNG from 'upng-js'
import { decodeLoadout, type SpellMap } from '../_shared/loadout'
import { drawNumber } from '../_shared/render'

const ICON_SIZE = 64
const COLS = 12
const ROWS = 2
const GAP = 6
const PAD = 20
const FONT_SCALE = 2
const TEXT_H = 7 * FONT_SCALE + 4 // 18px: font height + padding

const IMG_W = COLS * ICON_SIZE + (COLS - 1) * GAP + PAD * 2
const IMG_H = ROWS * (ICON_SIZE + TEXT_H) + (ROWS - 1) * GAP + PAD * 2

const BG: [number, number, number] = [28, 35, 51]
const SLOT: [number, number, number] = [45, 52, 70]
const TEXT_COLOR: [number, number, number] = [180, 180, 180]

function fillRect(
  buf: Uint8Array,
  imgW: number,
  x: number,
  y: number,
  w: number,
  h: number,
  color: [number, number, number],
): void {
  for (let py = 0; py < h; py++) {
    for (let px = 0; px < w; px++) {
      const i = ((y + py) * imgW + (x + px)) * 4
      buf[i] = color[0]
      buf[i + 1] = color[1]
      buf[i + 2] = color[2]
      buf[i + 3] = 255
    }
  }
}

function scalePixels(
  src: Uint8Array,
  srcW: number,
  srcH: number,
  dstW: number,
  dstH: number,
): Uint8Array {
  const dst = new Uint8Array(dstW * dstH * 4)
  for (let y = 0; y < dstH; y++) {
    for (let x = 0; x < dstW; x++) {
      const sx = Math.floor((x * srcW) / dstW)
      const sy = Math.floor((y * srcH) / dstH)
      const si = (sy * srcW + sx) * 4
      const di = (y * dstW + x) * 4
      dst[di] = src[si]
      dst[di + 1] = src[si + 1]
      dst[di + 2] = src[si + 2]
      dst[di + 3] = src[si + 3]
    }
  }
  return dst
}

function blitIcon(
  dst: Uint8Array,
  dstW: number,
  src: Uint8Array,
  srcW: number,
  srcH: number,
  x: number,
  y: number,
): void {
  const scaled =
    srcW === ICON_SIZE && srcH === ICON_SIZE
      ? src
      : scalePixels(src, srcW, srcH, ICON_SIZE, ICON_SIZE)

  for (let py = 0; py < ICON_SIZE; py++) {
    for (let px = 0; px < ICON_SIZE; px++) {
      const si = (py * ICON_SIZE + px) * 4
      const di = ((y + py) * dstW + (x + px)) * 4
      const a = scaled[si + 3] / 255
      if (a === 0) continue
      if (a === 1) {
        dst[di] = scaled[si]
        dst[di + 1] = scaled[si + 1]
        dst[di + 2] = scaled[si + 2]
        dst[di + 3] = 255
      } else {
        dst[di] = Math.round(scaled[si] * a + dst[di] * (1 - a))
        dst[di + 1] = Math.round(scaled[si + 1] * a + dst[di + 1] * (1 - a))
        dst[di + 2] = Math.round(scaled[si + 2] * a + dst[di + 2] * (1 - a))
        dst[di + 3] = 255
      }
    }
  }
}

export const onRequestGet: PagesFunction<{ ASSETS: Fetcher }> = async (
  context,
) => {
  const url = new URL(context.request.url)
  const loadoutParam = url.searchParams.get('spell_loadout')
  if (!loadoutParam)
    return new Response('Missing spell_loadout', { status: 400 })

  const cache = caches.default
  const cached = await cache.match(context.request)
  if (cached) return cached

  const spellMapResp = await context.env.ASSETS.fetch(
    new URL('/spell-icons.json', url).toString(),
  )
  const spellMap = (await spellMapResp.json()) as SpellMap

  const loadout = decodeLoadout(loadoutParam).slice(0, 24)

  const iconResults = await Promise.all(
    loadout.map(async (spellNum) => {
      if (!spellNum) return null
      const spell = spellMap[String(spellNum)]
      if (!spell) return null
      try {
        const resp = await context.env.ASSETS.fetch(
          new URL(spell.url, url).toString(),
        )
        const buf = await resp.arrayBuffer()
        const decoded = UPNG.decode(buf)
        const rgba = UPNG.toRGBA8(decoded)
        return {
          pixels: new Uint8Array(rgba[0]),
          width: decoded.width,
          height: decoded.height,
        }
      } catch {
        return null
      }
    }),
  )

  const buf = new Uint8Array(IMG_W * IMG_H * 4)
  fillRect(buf, IMG_W, 0, 0, IMG_W, IMG_H, BG)

  for (let idx = 0; idx < 24; idx++) {
    const col = idx % COLS
    const row = Math.floor(idx / COLS)
    const dx = PAD + col * (ICON_SIZE + GAP)
    const dy = PAD + row * (ICON_SIZE + TEXT_H + GAP)
    fillRect(buf, IMG_W, dx, dy, ICON_SIZE, ICON_SIZE, SLOT)

    const icon = iconResults[idx]
    if (icon) blitIcon(buf, IMG_W, icon.pixels, icon.width, icon.height, dx, dy)

    const spellNum = loadout[idx]
    if (spellNum) {
      drawNumber(
        buf,
        IMG_W,
        spellNum,
        dx + ICON_SIZE / 2,
        dy + ICON_SIZE + 2,
        FONT_SCALE,
        TEXT_COLOR,
      )
    }
  }

  const png = UPNG.encode([buf.buffer], IMG_W, IMG_H, 0)

  const response = new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400',
    },
  })

  context.waitUntil(cache.put(context.request, response.clone()))
  return response
}
