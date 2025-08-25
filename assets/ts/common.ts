export function ready(fn: () => void) {
  if (document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
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
