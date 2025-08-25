function ready(fn: () => void) {
  if (document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

let throttled = false

function throttle(fn, timesPerSecond) {
  if (!throttled) {
    throttled = true
    fn()
    setTimeout(() => throttled = false, 1000 / timesPerSecond)
  }
}

ready(function() {
  const tooltipLinks = document.getElementsByClassName("tooltip")
  for (const tooltipLink of tooltipLinks) {
    const tooltipId = tooltipLink.getAttribute("data-tooltip-id")
    if (tooltipId === null) return
    const tooltip = document.getElementById(tooltipId);
    console.log(tooltip)
    if (tooltip === null) return
    tooltipLink.addEventListener("mouseenter", function() {
      tooltip.hidden = false
    })
    tooltipLink.addEventListener("mouseleave", function() {
      tooltip.hidden = true
    })
    tooltipLink.addEventListener("mousemove", (event) => {
      if (!(event instanceof MouseEvent)) return;
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
});