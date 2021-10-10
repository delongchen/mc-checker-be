import Router from 'koa-router'
import { reloadMods, getModsInfos } from '../middlewares/getModsInfos'
import { setHeader, JSONHeader, FileHeader } from "../middlewares/setHeader";
import { getDiffModsSync } from "../middlewares/getDiffMods";
import getAllModZip from "../middlewares/getAllModZip";

const router = new Router

router
  .get('/mods', setHeader(JSONHeader), getModsInfos)
  .get('/reload', reloadMods)
  .get('/diff', setHeader(FileHeader('diff-mods.zip')), getDiffModsSync)
  .get('/all', setHeader(FileHeader('mods.zip')), getAllModZip)

export default router
