export const onRequestPost: PagesFunction = async (context) => {
  const { request } = context
  const ip = request.headers.get('CF-Connecting-IP') ?? ''

  const forwarded = new Request('https://stats.mage.blue/api/event', {
    method: 'POST',
    headers: {
      'Content-Type': request.headers.get('Content-Type') ?? 'text/plain',
      'User-Agent': request.headers.get('User-Agent') ?? '',
      'X-Forwarded-For': ip,
      'X-Real-IP': ip,
      'Forwarded': `for=${ip}`,
      'CF-Connecting-IP': ip,
    },
    body: request.body,
  })

  return fetch(forwarded)
}
