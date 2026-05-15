import { init } from '@plausible-analytics/tracker'

init({
  domain: 'mage.blue',
  endpoint: 'https://stats.mage.blue/api/event',
  outboundLinks: true,
})
