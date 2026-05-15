import { moveTooltip, ready } from './common'

declare function plausible(
  event: string,
  options?: { props?: Record<string, string> },
): void
const trackEvent = (event: string) =>
  typeof plausible !== 'undefined' && plausible(event)

interface Spell {
  Id: string
  Name: string
  Number: string
}

// Array of spell IDs that are currently set in the loadout.
const activeSpells: Spell[] = new Array<Spell>(24).fill({
  Id: '',
  Name: '',
  Number: '',
})

// Event listeners for spells added to the loadout. This is needed to be able to
// remove them when a spell is removed from the loadout.
type ListenerEvent = 'mouseenter' | 'mouseleave' | 'mousemove'
const eventListeners: Record<
  string,
  {
    element: HTMLElement
    event: ListenerEvent
    handler: (ev: MouseEvent) => void
  }[]
> = {}

function addListener(
  spellId: string,
  element: HTMLElement,
  event: 'mouseenter' | 'mouseleave' | 'mousemove',
  handler: (ev: MouseEvent) => void,
) {
  element.addEventListener(event, handler)
  if (!eventListeners[spellId]) {
    eventListeners[spellId] = []
  }
  eventListeners[spellId].push({ element, event, handler })
}

function removeListener(spellId: string) {
  const listeners = eventListeners[spellId]
  for (const listener of listeners) {
    if (listener.event === 'mouseleave') {
      listener.element.dispatchEvent(new MouseEvent('mouseleave'))
    }
    listener.element.removeEventListener(listener.event, listener.handler)
  }
}

function encodeLoadout(): string {
  const bytes = new Uint8Array(activeSpells.map((s) => Number(s.Number) || 0))
  return bytes.toBase64({ alphabet: 'base64url', omitPadding: true })
}

function decodeLoadout(encoded: string): number[] {
  if (encoded.includes(',')) {
    return encoded.split(',').map((s) => Number.parseInt(s) || 0)
  }
  return Array.from(Uint8Array.fromBase64(encoded, { alphabet: 'base64url' }))
}

function updateSpellLoadoutLink() {
  const url = new URL(window.location.href)
  url.searchParams.set('spell_loadout', encodeLoadout())
  const urlString = url.toString()
  window.history.replaceState(null, '', urlString)
  const spellLoadoutBuilderLink = document.getElementById(
    'spell-loadout-builder-link',
  )
  spellLoadoutBuilderLink?.setAttribute('href', urlString)
}

function setSpell(spellLoadoutSpell: HTMLElement, spellbookSpell: HTMLElement) {
  const spellId = spellbookSpell.getAttribute('data-tooltip-id')
  if (spellId === null) return
  const tooltip = document.getElementById(spellId + '-tooltip')
  if (tooltip === null) return
  spellLoadoutSpell.setAttribute('data-tooltip-id', spellId)
  spellLoadoutSpell.draggable = true
  spellLoadoutSpell.innerHTML = spellbookSpell.innerHTML
  spellLoadoutSpell.style.cursor = 'pointer'
  addListener(
    spellId,
    spellLoadoutSpell,
    'mouseenter',
    function (event: MouseEvent) {
      if (!(event instanceof MouseEvent)) return
      moveTooltip(tooltip, event)
      tooltip.hidden = false
    },
  )
  addListener(spellId, spellLoadoutSpell, 'mouseleave', function () {
    tooltip.hidden = true
  })
  addListener(spellId, spellLoadoutSpell, 'mousemove', (event) => {
    if (!(event instanceof MouseEvent)) return
    moveTooltip(tooltip, event)
  })
}

function unsetSpell(spellLoadoutSpell: HTMLElement) {
  const spellId = spellLoadoutSpell.getAttribute('data-tooltip-id')
  if (spellId === null) return
  spellLoadoutSpell.removeAttribute('data-tooltip-id')
  spellLoadoutSpell.draggable = false
  spellLoadoutSpell.innerHTML = ''
  spellLoadoutSpell.style.cursor = ''
}

ready(function () {
  const spellbookSpells = document.getElementsByClassName(
    'spellbook-spell',
  ) as HTMLCollectionOf<HTMLElement>
  const spellLoadoutSpells = document.getElementsByClassName(
    'spell-loadout-spell',
  ) as HTMLCollectionOf<HTMLElement>
  for (const spell of spellbookSpells) {
    const spellId = spell.getAttribute('data-tooltip-id')
    const spellName = spell.getAttribute('data-spell-name')
    const spellNumber = spell.getAttribute('data-spell-number')
    if (spellId === null || spellName === null || spellNumber === null) {
      continue
    }
    spell.addEventListener('click', function () {
      const existingIndex = activeSpells.findIndex(
        (s: Spell) => s.Id === spellId,
      )
      if (existingIndex !== -1) {
        activeSpells[existingIndex] = { Id: '', Name: '', Number: '' }
        removeListener(spellId)
        unsetSpell(spellLoadoutSpells[existingIndex])
        updateSpellLoadoutLink()
      } else {
        const nextOpen = activeSpells.findIndex((s: Spell) => s.Id === '')
        if (nextOpen !== -1) {
          activeSpells[nextOpen] = {
            Id: spellId,
            Name: spellName,
            Number: spellNumber,
          }
          setSpell(spellLoadoutSpells[nextOpen], spell)
          updateSpellLoadoutLink()
        }
      }
    })
    spell.addEventListener('dragstart', function () {
      const tooltip = document.getElementById(spellId + '-tooltip')
      if (tooltip === null) return
      tooltip.hidden = true
    })
    spell.addEventListener('dragend', function (event: DragEvent) {
      const under = document.elementFromPoint(event.clientX, event.clientY)
      const element = under?.closest(
        '.spell-loadout-spell',
      ) as HTMLElement | null
      if (element !== null && element !== undefined) {
        for (const slot of spellLoadoutSpells) {
          if (slot.getAttribute('data-tooltip-id') === spellId) {
            return
          }
        }
        const oldSpellId = element.getAttribute('data-tooltip-id')
        if (oldSpellId !== null) {
          removeListener(oldSpellId)
        }
        for (let i = 0; i < spellLoadoutSpells.length; ++i) {
          if (element === spellLoadoutSpells[i]) {
            activeSpells[i] = {
              Id: spellId,
              Name: spellName,
              Number: spellNumber,
            }
            break
          }
        }
        setSpell(element, spell)
        updateSpellLoadoutLink()
      }
    })
  }
  let draggingLoadoutIndex = -1
  for (let i = 0; i < spellLoadoutSpells.length; ++i) {
    const slot = spellLoadoutSpells[i]
    slot.addEventListener('dragover', function (event: DragEvent) {
      event.preventDefault()
    })
    slot.addEventListener('dragstart', function () {
      if (slot.getAttribute('data-tooltip-id') === null) return
      draggingLoadoutIndex = i
    })
    slot.addEventListener('dragend', function (event: DragEvent) {
      if (draggingLoadoutIndex === -1) return
      const fromIndex = draggingLoadoutIndex
      draggingLoadoutIndex = -1
      const under = document.elementFromPoint(event.clientX, event.clientY)
      const target = under?.closest(
        '.spell-loadout-spell',
      ) as HTMLElement | null
      if (!target || target === slot) return
      let toIndex = -1
      for (let j = 0; j < spellLoadoutSpells.length; ++j) {
        if (spellLoadoutSpells[j] === target) {
          toIndex = j
          break
        }
      }
      if (toIndex === -1) return
      const fromSpell = { ...activeSpells[fromIndex] }
      const toSpell = { ...activeSpells[toIndex] }
      if (fromSpell.Id) removeListener(fromSpell.Id)
      if (toSpell.Id) removeListener(toSpell.Id)
      unsetSpell(spellLoadoutSpells[fromIndex])
      unsetSpell(spellLoadoutSpells[toIndex])
      activeSpells[fromIndex] = toSpell
      activeSpells[toIndex] = fromSpell
      const fromEl = document.querySelector<HTMLElement>(
        `.spellbook-spell[data-tooltip-id="${toSpell.Id}"]`,
      )
      const toEl = document.querySelector<HTMLElement>(
        `.spellbook-spell[data-tooltip-id="${fromSpell.Id}"]`,
      )
      if (fromEl) setSpell(spellLoadoutSpells[fromIndex], fromEl)
      if (toEl) setSpell(spellLoadoutSpells[toIndex], toEl)
      updateSpellLoadoutLink()
    })
    slot.addEventListener('click', function () {
      const spellId = slot.getAttribute('data-tooltip-id')
      if (spellId === null) return
      activeSpells[activeSpells.findIndex((s: Spell) => s.Id === spellId)] = {
        Id: '',
        Name: '',
        Number: '',
      }
      removeListener(spellId)
      unsetSpell(slot)
      updateSpellLoadoutLink()
    })
  }
  document
    .getElementById('spell-loadout-builder-link')
    ?.addEventListener('click', () => {
      trackEvent('Loadout Shared')
    })

  const params = new URLSearchParams(window.location.search)
  const preload = params.get('spell_loadout')
  if (preload) {
    trackEvent('Loadout Loaded')
    decodeLoadout(preload).forEach((spellNumber, i) => {
      if (spellNumber && i < spellLoadoutSpells.length) {
        const spellTooltip = spellbookSpells[spellNumber - 1]
        const spellLoadoutSpell = spellLoadoutSpells[i]
        const spellId = spellTooltip.getAttribute('data-tooltip-id')
        const spellName = spellTooltip.getAttribute('data-spell-name')
        if (spellId === null || spellName === null) return
        activeSpells[i] = {
          Id: spellId,
          Name: spellName,
          Number: String(spellNumber),
        }
        setSpell(spellLoadoutSpell, spellTooltip)
      }
    })
  }
  updateSpellLoadoutLink()
})
