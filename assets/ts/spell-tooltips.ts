import { ready } from './common'

ready(function () {
  const tooltipLinks = document.getElementsByClassName(
    'tooltip',
  ) as HTMLCollectionOf<HTMLElement>
  for (const tooltipLink of tooltipLinks) {
    const tooltipId = tooltipLink.getAttribute('data-tooltip-id')
    if (tooltipId === null) return
    const tooltip = document.getElementById(tooltipId)
    if (tooltip === null) return
    tooltipLink.addEventListener('mouseenter', function () {
      tooltip.hidden = false
    })
    tooltipLink.addEventListener('mouseleave', function () {
      tooltip.hidden = true
    })
    tooltipLink.addEventListener('mousemove', (event) => {
      if (!(event instanceof MouseEvent)) return
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
    })
  }
})
