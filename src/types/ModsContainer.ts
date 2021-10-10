import {FabricModRaw} from './FabricMod'
import {ForgeMod} from './ForgeMod'

type McMod = ForgeMod | FabricModRaw

enum ModType {
  fabric,
  forge
}

interface ModParseResult {
  result?: McMod
  t: ModType
}

type ModParser = (file: string) => Promise<ModParseResult>

export {
  McMod,
  ModType,
  ModParseResult,
  ModParser
}
