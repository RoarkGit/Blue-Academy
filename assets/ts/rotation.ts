import { ready } from './common'

function scaleRotation(rotation: HTMLElement): void {
  rotation.style.zoom = '1'
  const wrapper = rotation.closest<HTMLElement>('.rotation-wrapper')
  const container = wrapper?.parentElement
  if (!container) return
  const ratio = container.clientWidth / rotation.scrollWidth
  if (ratio < 1) {
    rotation.style.zoom = `${ratio}`
  }
}

ready(function () {
  for (const rotation of document.querySelectorAll<HTMLElement>('.rotation')) {
    scaleRotation(rotation)
    const observer = new ResizeObserver(() => scaleRotation(rotation))
    const container = rotation.closest<HTMLElement>('.rotation-wrapper')?.parentElement
    if (container) {
      observer.observe(container)
    }
  }
})
