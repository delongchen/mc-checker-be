import { Middleware } from 'koa'

const JSONHeader = {
  'Content-Type': 'application/json'
}

const FileHeader = (fileName: string) => ({
  'Content-Type': 'application/octet-stream',
  'Content-Disposition': `attachment; filename=${fileName}`
})

const setHeader: (filed: { [p: string]: string }) => Middleware = (filed) =>
  async (context, next) => {
    context.set(filed)
    await next()
  }

export {
  setHeader,
  JSONHeader,
  FileHeader
}
