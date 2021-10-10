import { startHttpServer } from "./app";
import { loadMods } from "./core/modsManager";

async function start() {
  await loadMods()
  await startHttpServer()
}

start().then(() => {
  console.log('good')
})
