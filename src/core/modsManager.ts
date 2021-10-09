import Zip from 'adm-zip'
import { McMod, ModType } from '../types/ModsContainer'
import modParsers from './modParsers'
import appConfig from "../config"
import { opendir } from 'fs/promises'

const { mcDir } = appConfig
const modsDir = mcDir + '/mods'

const modsContainer: {
  [key in ModType]: McMod[]
} = {
  [ModType.fabric]: [],
  [ModType.forge]: []
}

async function pushMod(zip: Zip) {
  for (const parser of modParsers) {
    const { result, t } = await parser(zip)
    if (result) {
      modsContainer[t].push(result)
      break
    }
  }
}

async function loadMods() {
  const dir = await opendir(modsDir)

  for await (const dirent of dir) {
    if (dirent.isFile() && dirent.name.endsWith('jar')) {
      await pushMod(new Zip(modsDir + dirent.name))
    }
  }
}

export {
  pushMod,
  modsContainer,
  loadMods
}
