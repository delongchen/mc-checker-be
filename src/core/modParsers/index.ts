import Fabric from './fabric'
import Forge from './forge'
import { ModParser } from '../../types/ModsContainer'

const parsers: ModParser[] = [
  Fabric,
  Forge
]

export default parsers
