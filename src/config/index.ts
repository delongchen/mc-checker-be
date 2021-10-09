import { load } from 'js-yaml'
import { AppConfig } from '../types/AppConfig'
import { readFileSync } from 'fs'

const appConfig = <AppConfig>load(readFileSync('src/config/config.yml', 'utf8'))


export default appConfig