import { FabricModParser } from './fabric'
import Forge from './forge'
import { ModParser } from '../../types/ModsContainer'

const parsers: ModParser[] = [
  FabricModParser,
  Forge
]

export default parsers
