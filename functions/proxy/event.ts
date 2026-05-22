export const onRequestPost: PagesFunction = async (context) => {
  const { request } = context

  const forwarded = new Request('https://stats.mage.blue/api/event', {
    method: 'POST',
    headers: request.headers,
    body: request.body,
  })
  forwarded.headers.delete('cookie')

  return fetch(forwarded)
}
