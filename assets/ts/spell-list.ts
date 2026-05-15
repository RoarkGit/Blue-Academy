import { ready } from './common'
import {
  getFilters,
  matchesFilters,
  updateBadge,
  openDrawer,
  closeDrawer,
} from './spell-filters'

function applyFilters() {
  const filters = getFilters('.spell-list-drawer')
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

ready(function () {
  document
    .querySelectorAll<HTMLInputElement>(
      '.spell-list-drawer input[type="checkbox"]',
    )
    .forEach((cb) => {
      cb.addEventListener('change', () => {
        applyFilters()
        updateBadge('.spell-list-filter-badge', '.spell-list-drawer')
      })
    })

  document
    .querySelector<HTMLInputElement>('.spell-list-filter-search')
    ?.addEventListener('input', () => {
      applyFilters()
      updateBadge('.spell-list-filter-badge', '.spell-list-drawer')
    })

  document
    .querySelector('.spell-list-filter-reset')
    ?.addEventListener('click', () => {
      for (const cb of document.querySelectorAll<HTMLInputElement>(
        '.spell-list-drawer input[type="checkbox"]',
      )) {
        cb.checked = false
      }
      const search = document.querySelector<HTMLInputElement>(
        '.spell-list-filter-search',
      )
      if (search) search.value = ''
      applyFilters()
      updateBadge('.spell-list-filter-badge', '.spell-list-drawer')
    })

  // Drawer controls
  document
    .querySelector('.spell-list-filter-button')
    ?.addEventListener('click', () => {
      openDrawer('.spell-list-drawer-overlay', '.spell-list-drawer')
    })

  document
    .querySelector('.spell-list-drawer-overlay')
    ?.addEventListener('click', () => {
      closeDrawer('.spell-list-drawer-overlay', '.spell-list-drawer')
    })

  document
    .querySelector('.spell-list-drawer-close')
    ?.addEventListener('click', () => {
      closeDrawer('.spell-list-drawer-overlay', '.spell-list-drawer')
    })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const drawer = document.querySelector<HTMLElement>('.spell-list-drawer')
      if (drawer && !drawer.hidden) {
        closeDrawer('.spell-list-drawer-overlay', '.spell-list-drawer')
      }
    }
  })

  updateBadge('.spell-list-filter-badge', '.spell-list-drawer')
})
