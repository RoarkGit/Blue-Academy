export const onRequestPost: PagesFunction = async (context) => {
  const { request } = context
  const cf = request.cf as Record<string, unknown>

  console.log('CF data:', {
    ip: cf?.ip,
    country: cf?.country,
    colo: cf?.colo,
  })
  console.log('Headers:', {
    'cf-connecting-ip': request.headers.get('cf-connecting-ip'),
    'cf-ipcountry': request.headers.get('cf-ipcountry'),
    'x-forwarded-for': request.headers.get('x-forwarded-for'),
  })

  const headers = new Headers(request.headers)
  headers.delete('cookie')
  headers.delete('host')

  // Pass client IP for geolocation using Plausible's preferred header
  const clientIp = (cf?.ip as string) || request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')
  if (clientIp) {
    headers.set('x-plausible-ip', clientIp)
  }

  console.log('Forwarding to Plausible with IP:', clientIp)

  const forwarded = new Request('https://stats.mage.blue/api/event', {
    method: 'POST',
    headers,
    body: request.body,
  })

  return fetch(forwarded)
}
