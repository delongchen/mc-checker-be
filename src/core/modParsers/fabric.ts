import { ModParser, ModParseResult, ModType } from '../../types/ModsContainer'
import { readDataAsync } from './util'
import { FabricModRaw } from '../../types/FabricMod'

const FABRIC_MOD_JSON = 'fabric.mod.json'

const parser: ModParser = async (zip) => {
  const fabricModJSONS = zip.getEntry(FABRIC_MOD_JSON)
  const result: ModParseResult = {
    t: ModType.fabric
  }

  if (fabricModJSONS) {
    result.result = <FabricModRaw>JSON.parse(await readDataAsync(fabricModJSONS))
  }

  return result
}

export default parser
