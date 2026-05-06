import { moveTooltip, ready } from './common'

ready(function () {
  const tooltipObjects = document.getElementsByClassName(
    'tooltip',
  ) as HTMLCollectionOf<HTMLElement>

  // Initialize all tooltips with event listeners.
  for (const tooltipObject of tooltipObjects) {
    const spellId = tooltipObject.getAttribute('data-tooltip-id')
    if (spellId === null) return
    const tooltip = document.getElementById(spellId + '-tooltip')
    if (tooltip === null) return
    tooltipObject.addEventListener('mouseenter', function (event) {
      if (!(event instanceof MouseEvent)) return
      moveTooltip(tooltip, event)
      tooltip.hidden = false
    })
    tooltipObject.addEventListener('mouseleave', function () {
      tooltip.hidden = true
    })
    tooltipObject.addEventListener('mousemove', (event) => {
      if (!(event instanceof MouseEvent)) return
      moveTooltip(tooltip, event)
    })
  }
})
