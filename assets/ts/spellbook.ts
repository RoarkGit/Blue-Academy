import { ready, toggleActive } from './common'

const PAGE_SIZE = 16

function getFilters(): Map<string, Set<string>> {
  const filters = new Map<string, Set<string>>([
    ['type', new Set()],
    ['aspect', new Set()],
    ['rank', new Set()],
    ['target', new Set()],
    ['status', new Set()],
  ])
  for (const cb of document.querySelectorAll<HTMLInputElement>(
    '.spellbook-filters input[type="checkbox"]:checked',
  )) {
    const cat = cb.dataset.filter
    if (cat && filters.has(cat)) filters.get(cat)!.add(cb.value)
  }
  return filters
}

function matchesFilters(
  spell: HTMLElement,
  filters: Map<string, Set<string>>,
  nameQuery: string,
): boolean {
  if (nameQuery && !(spell.dataset.spellName ?? '').toLowerCase().includes(nameQuery))
    return false

  const typeF = filters.get('type')!
  if (typeF.size > 0 && !typeF.has(spell.dataset.spellType ?? '')) return false

  const aspectF = filters.get('aspect')!
  if (aspectF.size > 0 && !aspectF.has(spell.dataset.spellAspect ?? ''))
    return false

  const rankF = filters.get('rank')!
  if (rankF.size > 0 && !rankF.has(spell.dataset.spellRank ?? '')) return false

  const targetF = filters.get('target')!
  if (targetF.size > 0) {
    const targets = (spell.dataset.spellTarget ?? '').split(' ').filter(Boolean)
    if (!targets.some((t) => targetF.has(t))) return false
  }

  // Some filter categories group multiple internal tags (e.g. petrification
  // covers both "petrification" and "freeze").
  const STATUS_GROUPS: Record<string, string[]> = {
    petrification: ['petrification', 'freeze'],
  }
  const statusF = filters.get('status')!
  if (statusF.size > 0) {
    const statuses = (spell.dataset.spellStatus ?? '').split(' ').filter(Boolean)
    const expanded = new Set<string>()
    for (const s of statusF) {
      expanded.add(s)
      STATUS_GROUPS[s]?.forEach((alias) => expanded.add(alias))
    }
    if (!statuses.some((s) => expanded.has(s))) return false
  }

  return true
}

function goToPage(page: string) {
  const spells = document.getElementsByClassName(
    'spellbook-spell',
  ) as HTMLCollectionOf<HTMLElement>
  const labels = document.getElementsByClassName(
    'spellbook-wrapper-page-label',
  ) as HTMLCollectionOf<HTMLElement>
  toggleActive('data-page-number', page, spells)
  toggleActive('data-page-number', page, labels)
}

function rebuildLabels(numPages: number) {
  const container = document.querySelector('.spellbook-wrapper-page-labels')
  if (!container) return
  container.innerHTML = ''
  for (let i = 1; i <= numPages; i++) {
    const label = document.createElement('label')
    label.className = 'spellbook-wrapper-page-label'
    label.dataset.pageNumber = String(i)
    label.textContent = String(i)
    label.addEventListener('click', () => goToPage(String(i)))
    container.appendChild(label)
  }
}

let totalPages = 1

function updateLabelStates(activePages: number) {
  for (const label of document.querySelectorAll<HTMLElement>(
    '.spellbook-wrapper-page-label',
  )) {
    const page = Number(label.dataset.pageNumber ?? '0')
    label.classList.toggle('spellbook-wrapper-page-label--empty', page > activePages)
  }
}

function applyFilters() {
  const filters = getFilters()
  const nameQuery = (
    document.querySelector<HTMLInputElement>('.spellbook-filter-search')?.value ?? ''
  )
    .toLowerCase()
    .trim()
  const realSpells = document.querySelectorAll<HTMLElement>(
    '.spellbook-spell[data-spell-number]',
  )

  let count = 0
  for (const spell of realSpells) {
    if (matchesFilters(spell, filters, nameQuery)) {
      spell.dataset.pageNumber = String(Math.ceil(++count / PAGE_SIZE))
    } else {
      spell.dataset.pageNumber = '0'
    }
  }

  updateLabelStates(Math.max(1, Math.ceil(count / PAGE_SIZE)))
  goToPage('1')
}

function updateBadge() {
  const badge = document.querySelector<HTMLElement>('.spellbook-filter-badge')
  if (!badge) return

  let activeCount = 0

  // Count active checkboxes
  for (const cb of document.querySelectorAll<HTMLInputElement>(
    '.spellbook-drawer input[type="checkbox"]:checked',
  )) {
    activeCount++
  }

  // Check if search is non-empty
  const search = document.querySelector<HTMLInputElement>('.spellbook-filter-search')
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
  const overlay = document.querySelector<HTMLElement>('.spellbook-drawer-overlay')
  const drawer = document.querySelector<HTMLElement>('.spellbook-drawer')
  if (overlay) overlay.hidden = false
  if (drawer) drawer.hidden = false
  // Force reflow to trigger transition
  if (drawer) drawer.offsetHeight
  if (drawer) drawer.style.transform = 'translateX(0)'
}

function closeDrawer() {
  const overlay = document.querySelector<HTMLElement>('.spellbook-drawer-overlay')
  const drawer = document.querySelector<HTMLElement>('.spellbook-drawer')
  if (drawer) drawer.style.transform = 'translateX(100%)'
  // Wait for transition to complete before hiding
  setTimeout(() => {
    if (overlay) overlay.hidden = true
    if (drawer) drawer.hidden = true
  }, 250)
}

ready(function () {
  const realSpells = document.querySelectorAll<HTMLElement>(
    '.spellbook-spell[data-spell-number]',
  )
  totalPages = Math.max(1, Math.ceil(realSpells.length / PAGE_SIZE))
  rebuildLabels(totalPages)

  document
    .querySelectorAll<HTMLInputElement>(
      '.spellbook-drawer input[type="checkbox"]',
    )
    .forEach((cb) => {
      cb.addEventListener('change', () => {
        applyFilters()
        updateBadge()
      })
    })

  document
    .querySelector<HTMLInputElement>('.spellbook-filter-search')
    ?.addEventListener('input', () => {
      applyFilters()
      updateBadge()
    })

  document.querySelector('.spellbook-filter-reset')?.addEventListener('click', () => {
    for (const cb of document.querySelectorAll<HTMLInputElement>(
      '.spellbook-drawer input[type="checkbox"]',
    )) {
      cb.checked = false
    }
    const search = document.querySelector<HTMLInputElement>('.spellbook-filter-search')
    if (search) search.value = ''
    applyFilters()
    updateBadge()
  })

  // Drawer controls
  document.querySelector('.spellbook-filter-button')?.addEventListener('click', openDrawer)

  document.querySelector('.spellbook-drawer-overlay')?.addEventListener('click', closeDrawer)

  document.querySelector('.spellbook-drawer-close')?.addEventListener('click', closeDrawer)

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const drawer = document.querySelector<HTMLElement>('.spellbook-drawer')
      if (drawer && !drawer.hidden) {
        closeDrawer()
      }
    }
  })

  applyFilters()
  updateBadge()
})
