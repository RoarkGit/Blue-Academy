import { ready } from './common'

interface Boss {
  name: string
  hp: number
  level: number
  kill_pct?: number
}

interface Multipliers {
  whistle: number
  bristle: number
  tingle: number
  moon_flute: number
  basic_instinct: number
  off_guard: number
  physical_libra: number
}

interface FinalStingData {
  bosses: Boss[]
  multipliers: Multipliers
  base_stings: Record<number, number>
}

function loadData(): FinalStingData {
  const el = document.getElementById('final-sting-data')
  return JSON.parse(el?.textContent ?? '{}') as FinalStingData
}

type Role = 'dps' | 'healer' | 'tank'

function getPlayerMultiplier(role: Role, multipliers: Multipliers): number {
  let m = 1.0
  const buffs: [string, keyof Multipliers][] = [
    ['whistle', 'whistle'],
    ['bristle', 'bristle'],
    ['tingle', 'tingle'],
    ['moonFlute', 'moon_flute'],
    ['basicInstinct', 'basic_instinct'],
  ]
  for (const [id, key] of buffs) {
    const el = document.getElementById(
      `${id}-${role}`,
    ) as HTMLInputElement | null
    if (el?.checked) m *= multipliers[key]
  }
  return m
}

function getBossMultiplier(multipliers: Multipliers): number {
  let m = 1.0
  const debuffs: [string, keyof Multipliers][] = [
    ['off-guard', 'off_guard'],
    ['physical-libra', 'physical_libra'],
  ]
  for (const [id, key] of debuffs) {
    const el = document.getElementById(id) as HTMLInputElement | null
    if (el?.checked) m *= multipliers[key]
  }
  return m
}

function calculate(
  bosses: Boss[],
  multipliers: Multipliers,
  baseStings: Record<number, number>,
) {
  const select = document.getElementById(
    'boss-select',
  ) as HTMLSelectElement | null
  if (!select) return
  const boss = bosses[parseInt(select.value)]
  if (!boss) return

  const getCount = (id: string) => {
    const el = document.getElementById(id) as HTMLInputElement | null
    return Math.max(0, parseInt(el?.value ?? '0') || 0)
  }
  const nDps = getCount('count-dps')
  const nHealer = getCount('count-healer')
  const nTank = getCount('count-tank')

  const bossM = getBossMultiplier(multipliers)
  const dpsM = getPlayerMultiplier('dps', multipliers)
  const healerM = getPlayerMultiplier('healer', multipliers)
  const tankM = getPlayerMultiplier('tank', multipliers)

  const baseSting = baseStings[boss.level]
  const totalPct =
    (((nDps * dpsM + nHealer * healerM + nTank * tankM) * baseSting * bossM) /
      boss.hp) *
    100

  const killPct = boss.kill_pct ?? 0
  const displayPct = totalPct + killPct
  const fmt = (n: number) => n.toFixed(2) + '%'
  const killed = (pct: number) => (pct >= 100 ? ' ✓ kills' : '')

  const resultEl = document.getElementById('result-total')
  if (resultEl) {
    resultEl.textContent = fmt(displayPct) + killed(displayPct)
    resultEl.className =
      'fsc-result-value' + (displayPct >= 100 ? ' fsc-result-kills' : '')
  }

  const hpEl = document.getElementById('boss-hp')
  const stingEl = document.getElementById('boss-base-sting')
  const noteEl = document.getElementById('boss-note')
  if (hpEl) hpEl.textContent = boss.hp.toLocaleString()
  if (stingEl) stingEl.textContent = baseStings[boss.level].toLocaleString()
  if (noteEl) {
    noteEl.textContent =
      killPct > 0
        ? `Phase transition at ${killPct}% HP — sting before this threshold.`
        : ''
    noteEl.hidden = killPct === 0
  }
}

ready(function () {
  const { bosses, multipliers, base_stings: baseStings } = loadData()
  const select = document.getElementById(
    'boss-select',
  ) as HTMLSelectElement | null
  if (!select) return

  bosses.forEach((boss, i) => {
    const opt = document.createElement('option')
    opt.value = String(i)
    opt.textContent = boss.name
    select.appendChild(opt)
  })

  for (const role of ['dps', 'healer', 'tank'] as const) {
    const whistle = document.getElementById(
      `whistle-${role}`,
    ) as HTMLInputElement | null
    const bristle = document.getElementById(
      `bristle-${role}`,
    ) as HTMLInputElement | null
    whistle?.addEventListener('change', () => {
      if (whistle.checked && bristle) bristle.checked = false
    })
    bristle?.addEventListener('change', () => {
      if (bristle.checked && whistle) whistle.checked = false
    })
  }

  const inputs = document.querySelectorAll(
    '#final-sting-calculator input, #final-sting-calculator select',
  )
  inputs.forEach((el) =>
    el.addEventListener('change', () =>
      calculate(bosses, multipliers, baseStings),
    ),
  )

  calculate(bosses, multipliers, baseStings)
})
