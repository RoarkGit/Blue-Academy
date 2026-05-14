export function decodeLoadout(encoded: string): number[] {
  const std = encoded.replace(/-/g, '+').replace(/_/g, '/')
  const binary = atob(std)
  const result: number[] = []
  for (let i = 0; i < binary.length; i++) {
    result.push(binary.charCodeAt(i))
  }
  return result
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export interface SpellEntry {
  name: string
  url: string
}

export type SpellMap = Record<string, SpellEntry>
