import { Middleware } from "koa";
import { loadMods, modsInfosCache } from "../../core/modsManager";

const getModsInfos: Middleware = async (context, next) => {
  context.body = modsInfosCache
  await next()
}

const reloadKey = '11451'
const reloadMods: Middleware = async (context, next) => {
  const q = context.query
  if (q['key'] === reloadKey) {
    await loadMods()
    context.body = 'ok'
  } else {
    context.body = 'err key'
  }
  await next()
}

export {
  getModsInfos,
  reloadMods
}
