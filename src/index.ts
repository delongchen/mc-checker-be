import { startHttpServer, app } from "./app";
import { loadMods } from "./core/modsManager";
import { createServer } from 'http'

async function start() {
  const server = app.callback()
  createServer(server).listen(11456, '0.0.0.0',)
  await loadMods()
}

start().then(() => {
  console.log('good')
})
