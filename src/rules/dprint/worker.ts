import { Buffer } from 'node:buffer'
import { readFile } from 'node:fs/promises'
import { runAsWorker } from 'synckit'
import type {createFromBuffer, Formatter} from '@dprint/formatter'
import type { AsyncFormat } from './index.js'

let dprint: {createFromBuffer: typeof createFromBuffer }
const cache = new Map<string, Promise<Formatter>>()

async function loadBuffer(data: any) {
  if (typeof data === 'string' && data.startsWith('@dprint/'))
    data = await import(data).then(m => m.getBuffer?.() || m.getPath?.())

  if (typeof data === 'string') {
    if (data.startsWith('data:')) {
      const [, base64] = data.split(',')
      return Buffer.from(base64 as string, 'base64')
    }
    else if (data.match(/^[\w-]+:\/\//)) {
      return fetch(data).then(r => r.arrayBuffer?.())
    }
    else {
      return readFile(data)
    }
  }

  return data
}

runAsWorker<string, AsyncFormat>(async (code, filename, options) => {
  if (!dprint)
    dprint = await import('@dprint/formatter')

  const builtInLangs: Record<string, string> = {
    json: '@dprint/json',
    toml: '@dprint/toml',
    markdown: '@dprint/markdown',
    typescript: '@dprint/typescript',
    dockerfile: '@dprint/dockerfile',
  }

  const lang: string = builtInLangs[options.language] ?? options.language
  const promise = cache.has(lang)
    ? cache.get(lang)
    : cache.set(lang, loadBuffer(lang).then(r => dprint.createFromBuffer(r))).get(lang)

  const formatter = await promise!
  const { language: _, languageOptions = {}, ...rest } = options
  formatter.setConfig(rest, languageOptions)
  return formatter.formatText(filename, code)
})
