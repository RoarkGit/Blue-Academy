import { ready, toggleActive } from './common'
import { getFilters, matchesFilters } from './spell-filters'

const PAGE_SIZE = 16

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
    label.classList.toggle(
      'spellbook-wrapper-page-label--empty',
      page > activePages,
    )
  }
}

function applyFilters() {
  const filters = getFilters('.spellbook-filters')
  const nameQuery = (
    document.querySelector<HTMLInputElement>('.spellbook-filter-search')
      ?.value ?? ''
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

ready(function () {
  const realSpells = document.querySelectorAll<HTMLElement>(
    '.spellbook-spell[data-spell-number]',
  )
  totalPages = Math.max(1, Math.ceil(realSpells.length / PAGE_SIZE))
  rebuildLabels(totalPages)

  document
    .querySelectorAll<HTMLInputElement>(
      '.spellbook-filters input[type="checkbox"]',
    )
    .forEach((cb) => cb.addEventListener('change', applyFilters))

  document
    .querySelector<HTMLInputElement>('.spellbook-filter-search')
    ?.addEventListener('input', applyFilters)

  document
    .querySelector('.spellbook-filter-reset')
    ?.addEventListener('click', () => {
      for (const cb of document.querySelectorAll<HTMLInputElement>(
        '.spellbook-filters input[type="checkbox"]',
      )) {
        cb.checked = false
      }
      const search = document.querySelector<HTMLInputElement>(
        '.spellbook-filter-search',
      )
      if (search) search.value = ''
      applyFilters()
    })

  applyFilters()
})
