import { ModParser, ModParseResult, ModType } from '../../types/ModsContainer'
import { readDataAsync } from './util'
import { FabricModRaw } from '../../types/FabricMod'
import Zip from "adm-zip";

const FABRIC_MOD_JSON = 'fabric.mod.json'
let fileMap: { [key: string]: string } = {}

const parser: ModParser = async (file) => {
  const zip = new Zip(file)
  const fabricModJSONS = zip.getEntry(FABRIC_MOD_JSON)
  const result: ModParseResult = {
    t: ModType.fabric
  }

  if (fabricModJSONS) {
    const mod = <FabricModRaw>JSON.parse(await readDataAsync(fabricModJSONS))
    fileMap[mod.id] = file
    result.result = mod
  }

  return result
}

function resetFileMap() {
  fileMap = {}
}

export {
  parser as FabricModParser,
  fileMap as fabricModFileMap,
  resetFileMap
}
