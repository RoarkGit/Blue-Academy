import { ready } from './common'
import { getFilters, matchesFilters, updateBadge } from './spell-filters'

function applyFilters() {
  const filters = getFilters('.spell-list-filters')
  const nameQuery = (
    document.querySelector<HTMLInputElement>('.spell-list-filter-search')
      ?.value ?? ''
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

function toggleFilters() {
  const filtersPanel = document.querySelector<HTMLElement>(
    '.spell-list-filters',
  )
  if (filtersPanel) {
    filtersPanel.classList.toggle('spell-list-filters--closed')
  }
}

ready(function () {
  document
    .querySelectorAll<HTMLInputElement>(
      '.spell-list-filters input[type="checkbox"]',
    )
    .forEach((cb) => {
      cb.addEventListener('change', () => {
        applyFilters()
        updateBadge('.spell-list-filter-badge', '.spell-list-filters')
      })
    })

  document
    .querySelector<HTMLInputElement>('.spell-list-filter-search')
    ?.addEventListener('input', () => {
      applyFilters()
      updateBadge('.spell-list-filter-badge', '.spell-list-filters')
    })

  document
    .querySelector('.spell-list-filter-reset')
    ?.addEventListener('click', () => {
      for (const cb of document.querySelectorAll<HTMLInputElement>(
        '.spell-list-filters input[type="checkbox"]',
      )) {
        cb.checked = false
        cb.dispatchEvent(new Event('change', { bubbles: true }))
      }
      const search = document.querySelector<HTMLInputElement>(
        '.spell-list-filter-search',
      )
      if (search) {
        search.value = ''
        search.dispatchEvent(new Event('input', { bubbles: true }))
      }
      applyFilters()
      updateBadge('.spell-list-filter-badge', '.spell-list-filters')
    })

  document
    .querySelector('.spell-list-filter-button')
    ?.addEventListener('click', () => {
      toggleFilters()
    })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const filtersPanel = document.querySelector<HTMLElement>(
        '.spell-list-filters',
      )
      if (
        filtersPanel &&
        !filtersPanel.classList.contains('spell-list-filters--closed')
      ) {
        toggleFilters()
      }
    }
  })

  updateBadge('.spell-list-filter-badge', '.spell-list-filters')
})
