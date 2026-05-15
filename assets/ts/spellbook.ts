import { ready, toggleActive } from './common'

const PAGE_SIZE = 16

function getFilters(): Map<string, Set<string>> {
  const filters = new Map<string, Set<string>>([
    ['type', new Set()],
    ['aspect', new Set()],
    ['rank', new Set()],
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
): boolean {
  const typeF = filters.get('type')!
  if (typeF.size > 0 && !typeF.has(spell.dataset.spellType ?? '')) return false

  const aspectF = filters.get('aspect')!
  if (aspectF.size > 0 && !aspectF.has(spell.dataset.spellAspect ?? ''))
    return false

  const rankF = filters.get('rank')!
  if (rankF.size > 0 && !rankF.has(spell.dataset.spellRank ?? '')) return false

  const statusF = filters.get('status')!
  if (statusF.size > 0) {
    const statuses = (spell.dataset.spellStatus ?? '')
      .split(' ')
      .filter(Boolean)
    if (!statuses.some((s) => statusF.has(s))) return false
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

function applyFilters() {
  const filters = getFilters()
  const realSpells = document.querySelectorAll<HTMLElement>(
    '.spellbook-spell[data-spell-number]',
  )
  const emptySlots = document.querySelectorAll<HTMLElement>(
    '.spellbook-spell:not([data-spell-number])',
  )

  let count = 0
  for (const spell of realSpells) {
    if (matchesFilters(spell, filters)) {
      spell.dataset.pageNumber = String(Math.ceil(++count / PAGE_SIZE))
    } else {
      spell.dataset.pageNumber = '0'
    }
  }

  const numPages = Math.max(1, Math.ceil(count / PAGE_SIZE))
  for (const slot of emptySlots) slot.dataset.pageNumber = String(numPages)

  rebuildLabels(numPages)
  goToPage('1')
}

ready(function () {
  document
    .querySelectorAll<HTMLInputElement>(
      '.spellbook-filters input[type="checkbox"]',
    )
    .forEach((cb) => cb.addEventListener('change', applyFilters))

  applyFilters()
})
