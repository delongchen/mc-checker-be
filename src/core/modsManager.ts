import { McMod, ModType } from '../types/ModsContainer'
import modParsers from './modParsers'
import appConfig from "../config"
import { opendir } from 'fs/promises'
import { resetFileMap, fabricModFileMap } from "./modParsers/fabric";
import Zip from "adm-zip";

const { modsDir } = appConfig

const modsContainer: {
  [key in ModType]: McMod[]
} = {
  [ModType.fabric]: [],
  [ModType.forge]: []
}

async function pushMod(file: string) {
  for (const parser of modParsers) {
    const { result, t } = await parser(file)
    if (result) {
      modsContainer[t].push(result)
      break
    }
  }
}

let modsInfosCache: Buffer | null = null
let allModsZipCache: Buffer | null = null

async function loadMods() {
  modsContainer[ModType.forge].length = 0
  modsContainer[ModType.fabric].length = 0
  resetFileMap()

  console.log('start load')
  const start = Date.now()
  const dir = await opendir(modsDir)

  for await (const dirent of dir) {
    if (dirent.isFile() && dirent.name.endsWith('jar')) {
      await pushMod(modsDir + dirent.name)
    }
  }

  modsInfosCache = Buffer.from(JSON.stringify(modsContainer[ModType.fabric]))
  {
    const modIds = Object.values(fabricModFileMap)
    const zip = new Zip
    for (const id of modIds) {
      zip.addLocalFile(id)
    }
    allModsZipCache = zip.toBuffer()
  }
  const end = Date.now()
  console.log(`load ${modsContainer[ModType.fabric].length} mod spend ${end - start} ms`)
}

export {
  pushMod,
  modsContainer,
  loadMods,
  modsInfosCache,
  allModsZipCache
}
