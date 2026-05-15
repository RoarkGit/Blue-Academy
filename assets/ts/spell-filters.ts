// Shared spell filtering logic for both spellbook and spell list

export const STATUS_GROUPS: Record<string, string[]> = {
  petrification: ['petrification', 'freeze'],
}

export function getFilters(
  containerSelector: string,
): Map<string, Set<string>> {
  const filters = new Map<string, Set<string>>([
    ['type', new Set()],
    ['aspect', new Set()],
    ['rank', new Set()],
    ['target', new Set()],
    ['status', new Set()],
  ])
  for (const cb of document.querySelectorAll<HTMLInputElement>(
    `${containerSelector} input[type="checkbox"]:checked`,
  )) {
    const cat = cb.dataset.filter
    if (cat && filters.has(cat)) filters.get(cat)!.add(cb.value)
  }
  return filters
}

export function matchesFilters(
  element: HTMLElement,
  filters: Map<string, Set<string>>,
  nameQuery: string,
): boolean {
  if (
    nameQuery &&
    !(element.dataset.spellName ?? '').toLowerCase().includes(nameQuery)
  )
    return false

  const typeF = filters.get('type')!
  if (typeF.size > 0 && !typeF.has(element.dataset.spellType ?? ''))
    return false

  const aspectF = filters.get('aspect')!
  if (aspectF.size > 0 && !aspectF.has(element.dataset.spellAspect ?? ''))
    return false

  const rankF = filters.get('rank')!
  if (rankF.size > 0 && !rankF.has(element.dataset.spellRank ?? ''))
    return false

  const targetF = filters.get('target')!
  if (targetF.size > 0) {
    const targets = (element.dataset.spellTarget ?? '')
      .split(' ')
      .filter(Boolean)
    if (!targets.some((t) => targetF.has(t))) return false
  }

  const statusF = filters.get('status')!
  if (statusF.size > 0) {
    const statuses = (element.dataset.spellStatus ?? '')
      .split(' ')
      .filter(Boolean)
    const expanded = new Set<string>()
    for (const s of statusF) {
      expanded.add(s)
      STATUS_GROUPS[s]?.forEach((alias) => expanded.add(alias))
    }
    if (!statuses.some((s) => expanded.has(s))) return false
  }

  return true
}

export function updateBadge(
  badgeSelector: string,
  filterContainerSelector: string,
) {
  const badge = document.querySelector<HTMLElement>(badgeSelector)
  if (!badge) return

  let activeCount = 0

  // Count active checkboxes
  const checkboxes = document.querySelectorAll<HTMLInputElement>(
    `${filterContainerSelector} input[type="checkbox"]:checked`,
  )
  activeCount += checkboxes.length

  // Check if search is non-empty
  const search = document.querySelector<HTMLInputElement>(
    `${filterContainerSelector} input[type="text"]`,
  )
  if (search && search.value.trim()) {
    activeCount++
  }

  if (activeCount > 0) {
    badge.textContent = String(activeCount)
    badge.hidden = false
  } else {
    badge.hidden = true
  }
}

export function openDrawer(overlaySelector: string, drawerSelector: string) {
  const overlay = document.querySelector<HTMLElement>(overlaySelector)
  const drawer = document.querySelector<HTMLElement>(drawerSelector)
  if (overlay) overlay.hidden = false
  if (drawer) drawer.hidden = false
  // Force reflow to trigger transition
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  if (drawer) drawer.offsetHeight
  if (drawer) drawer.style.transform = 'translateX(0)'
}

export function closeDrawer(overlaySelector: string, drawerSelector: string) {
  const drawer = document.querySelector<HTMLElement>(drawerSelector)
  if (drawer) drawer.style.transform = 'translateX(100%)'
  // Wait for transition to complete before hiding
  setTimeout(() => {
    const overlay = document.querySelector<HTMLElement>(overlaySelector)
    if (overlay) overlay.hidden = true
    if (drawer) drawer.hidden = true
  }, 250)
}
