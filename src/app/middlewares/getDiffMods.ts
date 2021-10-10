import {Middleware} from "koa";
import { getDiffMods } from "../../core/diffMods";
import {FabricModRaw} from "../../types/FabricMod";

const getDiffModsSync: Middleware = async (context, next) => {
  const q = context.query
  const ids = Object.keys(q).map(id => <FabricModRaw>({ id }))
  context.body = getDiffMods(ids)?.toBuffer()
  await next()
}

export {
  getDiffModsSync
}
