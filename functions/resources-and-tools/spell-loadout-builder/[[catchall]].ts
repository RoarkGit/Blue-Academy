import { escapeHtml } from '../../_shared/loadout'

const IMG_W = 12 * 64 + 11 * 6 + 40
const IMG_H = 2 * 64 + 6 + 40

const TITLE = 'Blue Mage Spell Loadout'

export const onRequestGet: PagesFunction<{ ASSETS: Fetcher }> = async (
  context,
) => {
  const url = new URL(context.request.url)
  const loadoutParam = url.searchParams.get('spell_loadout')

  if (!loadoutParam) return context.next()

  const pageResponse = await context.next()

  const ogImage = escapeHtml(
    new URL(
      `/og/loadout?spell_loadout=${encodeURIComponent(loadoutParam)}`,
      url,
    ).toString(),
  )

  const meta = [
    `<meta property="og:title" content="${escapeHtml(TITLE)}">`,
    `<meta property="og:image" content="${ogImage}">`,
    `<meta property="og:image:width" content="${IMG_W}">`,
    `<meta property="og:image:height" content="${IMG_H}">`,
    `<meta property="og:type" content="website">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:image" content="${ogImage}">`,
  ].join('\n')

  return new HTMLRewriter()
    .on('meta[property^="og:"]', {
      element: (el) => {
        el.remove()
      },
    })
    .on('meta[name^="twitter:"]', {
      element: (el) => {
        el.remove()
      },
    })
    .on('head', {
      element(el) {
        el.onEndTag((tag) => {
          tag.before(meta, { html: true })
        })
      },
    })
    .transform(pageResponse)
}
