import { ready } from './common'

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
const eventListeners = new Map<
  string,
  {
    element: HTMLElement
    event: string
    handler: (ev: MouseEvent) => void
  }[]
>()

/**
 * Moves a tooltip based on the mouse's location.
 *
 * @param tooltip the tooltip being moved
 * @param event the event that triggered the movement
 */
function moveTooltip(tooltip: HTMLElement, event: MouseEvent) {
  let newX = event.clientX + 10
  let newY = event.clientY
  if (event.clientX + tooltip.offsetWidth > window.innerWidth) {
    newX -= tooltip.offsetWidth + 20
  }
  if (event.clientY + tooltip.offsetHeight > window.innerHeight) {
    newY -= tooltip.offsetHeight
  }
  tooltip.style.left = `${newX}px`
  tooltip.style.top = `${newY}px`
}

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
      listener.handler()
    }
    listener.element.removeEventListener(listener.event, listener.handler)
  }
}

function updateSpellLoadoutLink() {
  const url = new URL(window.location.href)
  const spellNumbers = activeSpells.map((s: Spell) => s.Number).join(',')
  url.searchParams.set('spell_loadout', spellNumbers)
  const spellLoadoutBuilderLink = document.getElementById(
    'spell-loadout-builder-link',
  )
  spellLoadoutBuilderLink?.setAttribute('href', url.toString())
}

function setSpell(spellLoadoutSpell: HTMLElement, spellbookSpell: HTMLElement) {
  const spellId = spellbookSpell.getAttribute('data-tooltip-id')
  if (spellId === null) return
  const tooltip = document.getElementById(spellId + '-tooltip')
  if (tooltip === null) return
  spellLoadoutSpell.setAttribute('data-tooltip-id', spellId)
  spellLoadoutSpell.innerHTML = spellbookSpell.innerHTML
  spellLoadoutSpell.style.cursor = 'pointer'
  addListener(
    spellId,
    spellLoadoutSpell,
    'mouseenter',
    function (event: MouseEvent) {
      if (!(event instanceof MouseEvent)) return moveTooltip(tooltip, event)
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
      const nextOpen = activeSpells.findIndex((s: Spell) => s.Id === '')
      if (
        nextOpen !== -1 &&
        activeSpells.findIndex((s: Spell) => s.Id === spellId) === -1
      ) {
        activeSpells[nextOpen] = {
          Id: spellId,
          Name: spellName,
          Number: spellNumber,
        }
        setSpell(spellLoadoutSpells[nextOpen], spell)
        updateSpellLoadoutLink()
      }
    })
    spell.addEventListener('dragstart', function () {
      const tooltip = document.getElementById(spellId + '-tooltip')
      if (tooltip === null) return
      tooltip.hidden = true
    })
    spell.addEventListener('dragend', function (event: DragEvent) {
      const element = document.elementFromPoint(
        event.clientX,
        event.clientY,
      ) as HTMLElement
      if (
        element !== null &&
        element.classList.contains('spell-loadout-spell')
      ) {
        for (const setSpell of spellLoadoutSpells) {
          if (setSpell.getAttribute('data-tooltip-id') === spellId) {
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
  for (const spell of spellLoadoutSpells) {
    spell.addEventListener('click', function () {
      const spellId = spell.getAttribute('data-tooltip-id')
      if (spellId === null) return
      activeSpells[activeSpells.findIndex((s: Spell) => s.Id === spellId)] = {
        Id: '',
        Name: '',
        Number: '',
      }
      removeListener(spellId)
      unsetSpell(spell)
      updateSpellLoadoutLink()
    })
  }
  const params = new URLSearchParams(window.location.search)
  const preload = params.get('spell_loadout')
  if (preload) {
    preload.split(',').forEach((s, i) => {
      const spellNumber = Number.parseInt(s)
      if (spellNumber) {
        const spellTooltip = spellbookSpells[spellNumber - 1]
        const spellLoadoutSpell = spellLoadoutSpells[i]
        const spellId = spellTooltip.getAttribute('data-tooltip-id')
        const spellName = spellTooltip.getAttribute('data-spell-name')
        if (spellId === null || spellName === null) return ''
        activeSpells[i] = { Id: spellId, Name: spellName, Number: s }
        setSpell(spellLoadoutSpell, spellTooltip)
      }
    })
  }
  updateSpellLoadoutLink()
})
