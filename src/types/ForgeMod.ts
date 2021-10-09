interface ForgeMod {
  modid: string
  version: string
  displayName: string
  description: string
  updateJSONURL?: string
  displayURL?: string
  logoFile?: string
  credits?: string
  authors?: string
  dependencies?: ForgeMod[]
}

export {
  ForgeMod
}