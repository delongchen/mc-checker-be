import { ModParser, ModParseResult, ModType } from '../../types/ModsContainer'
import { readDataAsync } from './util'
import { ForgeMod } from '../../types/ForgeMod'
import { parse } from 'toml'
import Zip from "adm-zip";

const FORGE_MODS_TOML = 'META-INF/mods.toml'

const parser: ModParser = async (file) => {
  const zip = new Zip(file)
  const forgeModTOMLS = zip.getEntry(FORGE_MODS_TOML)
  const result: ModParseResult = {
    t: ModType.forge
  }

  if (forgeModTOMLS) {
    result.result = <ForgeMod>parse(await readDataAsync(forgeModTOMLS))
  }

  return result
}

export default parser