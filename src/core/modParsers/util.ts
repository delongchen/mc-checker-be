import {IZipEntry} from 'adm-zip'

const readDataAsync = (entry: IZipEntry) => new Promise<string>((res, rej) => {
  entry.getDataAsync((data, err) => {
    if (err) rej(err)
    else {
      res(data.toString())
    }
  })
})

export {
  readDataAsync
}
