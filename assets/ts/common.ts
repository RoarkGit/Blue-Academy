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
