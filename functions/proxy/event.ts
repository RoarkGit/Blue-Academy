export const onRequestPost: PagesFunction = async (context) => {
  const { request } = context
  const cf = request.cf as Record<string, unknown>

  const headers = new Headers(request.headers)
  headers.delete('cookie')
  headers.delete('host')

  // Pass client IP for geolocation
  const clientIp = (cf?.ip as string) || request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')
  if (clientIp) {
    headers.set('x-forwarded-for', clientIp)
  }

  const forwarded = new Request('https://stats.mage.blue/api/event', {
    method: 'POST',
    headers,
    body: request.body,
  })

  return fetch(forwarded)
}
