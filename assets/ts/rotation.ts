import { ready } from './common'

function scaleRotation(rotation: HTMLElement): void {
  rotation.style.zoom = '1'
  const parent = rotation.parentElement
  if (!parent) return
  const ratio = parent.clientWidth / rotation.scrollWidth
  if (ratio < 1) {
    rotation.style.zoom = `${ratio}`
  }
}

ready(function () {
  for (const rotation of document.querySelectorAll<HTMLElement>('.rotation')) {
    scaleRotation(rotation)
    const observer = new ResizeObserver(() => scaleRotation(rotation))
    if (rotation.parentElement) {
      observer.observe(rotation.parentElement)
    }
  }
})
