export const onRequestPost: PagesFunction = async (context) => {
  const { request } = context

  // Log headers for debugging
  const cfConnectingIp = request.headers.get('CF-Connecting-IP')
  const xForwardedFor = request.headers.get('X-Forwarded-For')
  const userAgent = request.headers.get('User-Agent')

  console.log('=== Plausible Proxy Debug ===')
  console.log('CF-Connecting-IP:', cfConnectingIp)
  console.log('X-Forwarded-For:', xForwardedFor)
  console.log('User-Agent:', userAgent)
  console.log('All headers:', Array.from(request.headers.entries()))

  const forwarded = new Request('https://stats.mage.blue/api/event', {
    method: 'POST',
    headers: request.headers,
    body: request.body,
  })
  forwarded.headers.delete('cookie')

  return fetch(forwarded)
}
