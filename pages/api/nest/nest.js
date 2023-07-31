// import { getID } from 'agape-sdk/src/utils/getID'
// import { ABLoader, AppLoader, AppModules, AppPackage, CodeFile, CodeGroup, getID } from 'database/mongoose'
// import { getServerSession } from 'next-auth/next'
// import { matchAny, authOptions } from '../auth/[...nextauth]'
// import slugify from 'slugify'
import { renderToString } from 'react-dom/server'
import { ServerRuntime } from '@/component-server/Server'

export default async function API(req, res) {
  let result = {}
  let context = {}

  let waitSet = new Set()

  let errList = []
  function ensureWork(cb = async () => {}) {
    let randID = Math.random()
    waitSet.add(randID)
    try {
      cb()
        .then(() => {
          waitSet.delete(randID)
        })
        .catch((error) => {
          errList.push(error)
        })
    } catch (e) {
      errList.push(e)
    }
  }

  async function ensureContextValue(key) {
    return new Promise((resolve) => {
      //t
      let tt = setInterval(() => {
        //
        let value = context[key]
        if (value) {
          clearInterval(tt)
          resolve(value)
        }
        //
      })
    })
  }

  async function writeContextValue(key, value) {
    context[key] = value
  }

  renderToString(
    <ServerRuntime
      writeContextValue={writeContextValue}
      ensureContextValue={ensureContextValue}
      ensureWork={ensureWork}
      context={context}
      result={result}
      payload={{}}
    />,
  )

  return new Promise((resolve, reject) => {
    let tt = setInterval(() => {
      if (errList.length > 0) {
        clearInterval(tt)
        setTimeout(() => {
          reject(res.status(500).json({ errors: errList }))
        }, 500)
      }

      if (waitSet.size === 0) {
        clearInterval(tt)
        resolve(res.json(result))
      }
    })
  })
}
