import Koa from 'koa'
import router from "./router";
const cors = require('@koa/cors')

import appConfig from "../config";

const app = new Koa

app.use(cors())
  .use(router.routes())
  .use(router.allowedMethods())

const { httpPort } = appConfig

const startHttpServer = () => new Promise<void>(resolve => {
  app.listen(httpPort, () => {
    console.log(`app listen on port ${httpPort}`)
    resolve()
  })
})

export {
  app,
  startHttpServer
}
