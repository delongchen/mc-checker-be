import { modsContainer, loadMods } from './core/modsManager'

async function start() {
  await loadMods()
  console.log(modsContainer)
}

start().then(() => {
  console.log('end')
})
