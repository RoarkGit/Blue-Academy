import { decodeLoadout, escapeHtml, type SpellMap } from '../../_shared/loadout'

const IMG_W = 12 * 64 + 11 * 6 + 40
const IMG_H = 2 * 64 + 6 + 40

export const onRequestGet: PagesFunction<{ ASSETS: Fetcher }> = async (context) => {
  const url = new URL(context.request.url)
  const loadoutParam = url.searchParams.get('spell_loadout')

  if (!loadoutParam) return context.next()

  const [pageResponse, spellMapResp] = await Promise.all([
    context.next(),
    context.env.ASSETS.fetch(new URL('/spell-icons.json', url).toString()),
  ])

  let title = 'BLU Spell Loadout'
  let description = 'A Blue Mage spell loadout for FFXIV'

  try {
    const spellMap = (await spellMapResp.json()) as SpellMap
    const names = decodeLoadout(loadoutParam)
      .filter((n) => n > 0)
      .map((n) => spellMap[String(n)]?.name)
      .filter(Boolean) as string[]

    if (names.length > 0) {
      title = `BLU Loadout: ${names.slice(0, 4).join(', ')}${names.length > 4 ? '…' : ''}`
      description = names.join(' · ')
    }
  } catch {
    // fall through to defaults
  }

  const ogImage = escapeHtml(
    new URL(`/og/loadout?spell_loadout=${encodeURIComponent(loadoutParam)}`, url).toString(),
  )

  const meta = [
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:image" content="${ogImage}">`,
    `<meta property="og:image:width" content="${IMG_W}">`,
    `<meta property="og:image:height" content="${IMG_H}">`,
    `<meta property="og:type" content="website">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:image" content="${ogImage}">`,
  ].join('\n')

  return new HTMLRewriter()
    .on('meta[property^="og:"]', { element: (el) => el.remove() })
    .on('meta[name^="twitter:"]', { element: (el) => el.remove() })
    .on('head', {
      element(el) {
        el.onEndTag((tag) => tag.before(meta, { html: true }))
      },
    })
    .transform(pageResponse)
}
