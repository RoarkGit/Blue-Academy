import { ready } from './common'

function getFilters(): Map<string, Set<string>> {
  const filters = new Map<string, Set<string>>([
    ['type', new Set()],
    ['aspect', new Set()],
    ['rank', new Set()],
    ['target', new Set()],
    ['status', new Set()],
  ])
  for (const cb of document.querySelectorAll<HTMLInputElement>(
    '.spell-list-drawer input[type="checkbox"]:checked',
  )) {
    const cat = cb.dataset.filter
    if (cat && filters.has(cat)) filters.get(cat)!.add(cb.value)
  }
  return filters
}

function matchesFilters(
  row: HTMLElement,
  filters: Map<string, Set<string>>,
  nameQuery: string,
): boolean {
  if (nameQuery && !(row.dataset.spellName ?? '').toLowerCase().includes(nameQuery))
    return false

  const typeF = filters.get('type')!
  if (typeF.size > 0 && !typeF.has(row.dataset.spellType ?? '')) return false

  const aspectF = filters.get('aspect')!
  if (aspectF.size > 0 && !aspectF.has(row.dataset.spellAspect ?? '')) return false

  const rankF = filters.get('rank')!
  if (rankF.size > 0 && !rankF.has(row.dataset.spellRank ?? '')) return false

  const targetF = filters.get('target')!
  if (targetF.size > 0) {
    const targets = (row.dataset.spellTarget ?? '').split(' ').filter(Boolean)
    if (!targets.some((t) => targetF.has(t))) return false
  }

  const STATUS_GROUPS: Record<string, string[]> = {
    petrification: ['petrification', 'freeze'],
  }
  const statusF = filters.get('status')!
  if (statusF.size > 0) {
    const statuses = (row.dataset.spellStatus ?? '').split(' ').filter(Boolean)
    const expanded = new Set<string>()
    for (const s of statusF) {
      expanded.add(s)
      STATUS_GROUPS[s]?.forEach((alias) => expanded.add(alias))
    }
    if (!statuses.some((s) => expanded.has(s))) return false
  }

  return true
}

function applyFilters() {
  const filters = getFilters()
  const nameQuery = (
    document.querySelector<HTMLInputElement>('.spell-list-filter-search')?.value ?? ''
  )
    .toLowerCase()
    .trim()
  const rows = document.querySelectorAll<HTMLElement>('.spell-list-row')

  for (const row of rows) {
    if (matchesFilters(row, filters, nameQuery)) {
      row.style.display = ''
    } else {
      row.style.display = 'none'
    }
  }
}

function updateBadge() {
  const badge = document.querySelector<HTMLElement>('.spell-list-filter-badge')
  if (!badge) return

  let activeCount = 0

  // Count active checkboxes
  for (const cb of document.querySelectorAll<HTMLInputElement>(
    '.spell-list-drawer input[type="checkbox"]:checked',
  )) {
    activeCount++
  }

  // Check if search is non-empty
  const search = document.querySelector<HTMLInputElement>('.spell-list-filter-search')
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

function openDrawer() {
  const overlay = document.querySelector<HTMLElement>('.spell-list-drawer-overlay')
  const drawer = document.querySelector<HTMLElement>('.spell-list-drawer')
  if (overlay) overlay.hidden = false
  if (drawer) drawer.hidden = false
  // Force reflow to trigger transition
  if (drawer) drawer.offsetHeight
  if (drawer) drawer.style.transform = 'translateX(0)'
}

function closeDrawer() {
  const drawer = document.querySelector<HTMLElement>('.spell-list-drawer')
  if (drawer) drawer.style.transform = 'translateX(100%)'
  // Wait for transition to complete before hiding
  setTimeout(() => {
    const overlay = document.querySelector<HTMLElement>('.spell-list-drawer-overlay')
    if (overlay) overlay.hidden = true
    if (drawer) drawer.hidden = true
  }, 250)
}

ready(function () {
  document
    .querySelectorAll<HTMLInputElement>(
      '.spell-list-drawer input[type="checkbox"]',
    )
    .forEach((cb) => {
      cb.addEventListener('change', () => {
        applyFilters()
        updateBadge()
      })
    })

  document
    .querySelector<HTMLInputElement>('.spell-list-filter-search')
    ?.addEventListener('input', () => {
      applyFilters()
      updateBadge()
    })

  document.querySelector('.spell-list-filter-reset')?.addEventListener('click', () => {
    for (const cb of document.querySelectorAll<HTMLInputElement>(
      '.spell-list-drawer input[type="checkbox"]',
    )) {
      cb.checked = false
    }
    const search = document.querySelector<HTMLInputElement>('.spell-list-filter-search')
    if (search) search.value = ''
    applyFilters()
    updateBadge()
  })

  // Drawer controls
  document.querySelector('.spell-list-filter-button')?.addEventListener('click', openDrawer)

  document.querySelector('.spell-list-drawer-overlay')?.addEventListener('click', closeDrawer)

  document.querySelector('.spell-list-drawer-close')?.addEventListener('click', closeDrawer)

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const drawer = document.querySelector<HTMLElement>('.spell-list-drawer')
      if (drawer && !drawer.hidden) {
        closeDrawer()
      }
    }
  })

  updateBadge()
})
