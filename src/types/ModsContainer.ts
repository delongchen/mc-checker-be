import {FabricModRaw} from './FabricMod'
import {ForgeMod} from './ForgeMod'
import Zip from 'adm-zip'

type McMod = ForgeMod | FabricModRaw

enum ModType {
  fabric,
  forge
}

interface ModParseResult {
  result?: McMod
  t: ModType
}

type ModParser = (zip: Zip) => Promise<ModParseResult>

export {
  McMod,
  ModType,
  ModParseResult,
  ModParser
}
