import { attachTooltip, ready } from './common'

ready(function () {
  const tooltipObjects = document.getElementsByClassName(
    'tooltip',
  ) as HTMLCollectionOf<HTMLElement>

  for (const tooltipObject of tooltipObjects) {
    const spellId = tooltipObject.getAttribute('data-tooltip-id')
    if (spellId === null) return
    const tooltip = document.getElementById(spellId + '-tooltip')
    if (tooltip === null) return
    attachTooltip(tooltipObject, tooltip)
  }
})
