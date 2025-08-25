import { ready } from './common'

/**
 * Moves a tooltip based on the mouse's location.
 *
 * @param tooltip the tooltip being moved
 * @param event the event that triggered the movement
 */
function moveTooltip(tooltip: HTMLElement, event: MouseEvent) {
  let newX = event.clientX + 10
  let newY = event.clientY
  if (event.clientX + tooltip.offsetWidth > window.innerWidth) {
    newX -= tooltip.offsetWidth + 20
  }
  if (event.clientY + tooltip.offsetHeight > window.innerHeight) {
    newY -= tooltip.offsetHeight
  }
  tooltip.style.left = `${newX}px`
  tooltip.style.top = `${newY}px`
}

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
