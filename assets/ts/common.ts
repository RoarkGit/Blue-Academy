/**
 * Allows for executing a callback when the document is ready.
 *
 * @param fn callback to execute when document is ready
 */
export function ready(fn: () => void) {
  if (document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

/**
 * Given a set of elements, an attribute to filter on, and a value to filter by,
 * toggles the visibillity of the elements by appending or removing the
 * "--active" class name.
 *
 * @param filterAttribute the attribute to filter on
 * @param filterValue the value to filter by
 * @param elements the set of elements
 */
export function attachTooltip(element: HTMLElement, tooltip: HTMLElement) {
  element.addEventListener('mouseenter', function (event) {
    if (!(event instanceof MouseEvent)) return
    moveTooltip(tooltip, event)
    tooltip.hidden = false
  })
  element.addEventListener('mouseleave', function () {
    tooltip.hidden = true
  })
  element.addEventListener('mousemove', (event) => {
    if (!(event instanceof MouseEvent)) return
    moveTooltip(tooltip, event)
  })
}

export function moveTooltip(tooltip: HTMLElement, event: MouseEvent) {
  let newX = event.clientX + 10
  let newY = event.clientY
  if (event.clientX + tooltip.offsetWidth > window.innerWidth) {
    newX -= tooltip.offsetWidth + 20
  }
  if (event.clientY + tooltip.offsetHeight > window.innerHeight) {
    newY -= tooltip.offsetHeight
  }
  tooltip.style.left = `${Math.max(0, newX)}px`
  tooltip.style.top = `${newY}px`
}

export function toggleActive(
  filterAttribute: string,
  filterValue: string | null,
  elements: HTMLCollectionOf<HTMLElement>,
) {
  for (const element of elements) {
    const activeClass = element.classList[0] + '--active'
    if (element.getAttribute(filterAttribute) === filterValue) {
      element.classList.add(activeClass)
    } else {
      element.classList.remove(activeClass)
    }
  }
}
