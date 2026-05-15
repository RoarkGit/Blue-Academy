import { ready } from './common'

function scaleLoadout(loadout: HTMLElement): void {
  loadout.style.zoom = '1'
  const parent = loadout.parentElement
  if (!parent) return
  const ratio = parent.clientWidth / loadout.scrollWidth
  if (ratio < 1) {
    loadout.style.zoom = `${ratio}`
  }
}

ready(function () {
  for (const loadout of document.querySelectorAll<HTMLElement>('.spell-loadout')) {
    scaleLoadout(loadout)
    const observer = new ResizeObserver(() => scaleLoadout(loadout))
    if (loadout.parentElement) {
      observer.observe(loadout.parentElement)
    }
  }
})
