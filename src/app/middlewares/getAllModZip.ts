import { allModsZipCache } from "../../core/modsManager";
import {Middleware} from "koa";

const getAllModZip: Middleware = async (context, next) => {
  context.body = allModsZipCache
  await next()
}

export default getAllModZip
