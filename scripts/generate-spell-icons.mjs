import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'
import { load } from 'js-yaml'

const spells = load(readFileSync('data/blue-mage-data/spell.yaml', 'utf8'))
const iconDir = 'static/images/spell-icons'

if (!existsSync(iconDir)) mkdirSync(iconDir, { recursive: true })

const map = {}
for (const spell of spells) {
  const src = `data/blue-mage-data/images/${spell.id}.png`
  copyFileSync(src, join(iconDir, `${spell.id}.png`))
  map[spell.number] = { name: spell.name, url: `/images/spell-icons/${spell.id}.png` }
}

writeFileSync('static/spell-icons.json', JSON.stringify(map))
console.log(`Generated spell-icons.json with ${Object.keys(map).length} spells`)
