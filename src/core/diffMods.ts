import { fabricModFileMap } from "./modParsers/fabric";
import { FabricModRaw } from "../types/FabricMod";
import Zip from "adm-zip";

function getDiffMods(mods: FabricModRaw[]) {
  if (!mods.length) return

  const zip = new Zip
  for (const mod of mods) {
    zip.addLocalFile(fabricModFileMap[mod.id])
  }

  return zip
}

export {
  getDiffMods
}
