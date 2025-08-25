import { ready, toggleActive } from './common'

ready(function () {
  const labels = document.getElementsByClassName(
    'spellbook-wrapper-page-label',
  ) as HTMLCollectionOf<HTMLElement>
  const spellList = document.getElementsByClassName(
    'spellbook-spell',
  ) as HTMLCollectionOf<HTMLElement>
  toggleActive('data-page-number', '1', spellList)
  toggleActive('data-page-number', '1', labels)
  for (const label of labels) {
    label.addEventListener('click', function () {
      const pageNumber = label.getAttribute('data-page-number')
      toggleActive('data-page-number', pageNumber, spellList)
      toggleActive('data-page-number', pageNumber, labels)
    })
  }
})
