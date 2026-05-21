import { init } from '@plausible-analytics/tracker'

init({
  domain: 'mage.blue',
  endpoint: '/proxy/event',
  outboundLinks: true,
})
