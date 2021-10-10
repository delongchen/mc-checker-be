import { Context } from "koa";

function parsePostData<T>( ctx: Context ): Promise<T> {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener('data', (data) => {
        postdata += data
      })
      ctx.req.addListener("end",function(){
        let parseData = <T>JSON.parse(postdata)
        resolve( parseData )
      })
    } catch ( err ) {
      reject(err)
    }
  })
}

export {
  parsePostData
}
