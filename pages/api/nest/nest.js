// import { getID } from 'agape-sdk/src/utils/getID'
// import { ABLoader, AppLoader, AppModules, AppPackage, CodeFile, CodeGroup, getID } from 'database/mongoose'
// import { getServerSession } from 'next-auth/next'
// import { matchAny, authOptions } from '../auth/[...nextauth]'
// import slugify from 'slugify'

import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export default async function API(req, res) {
  let result = {}
  let context = {}
  const session = await getServerSession(req, res, authOptions)

  return new Promise(async (resolve, reject) => {
    //

    await runOperations({
      context,
      result,
      tasks: [
        {
          opName: 'requireLogin',
        },
        {
          opName: 'dbFind',
          dbName: '',
          contextName: '',
        },
      ],
    })

    resolve(res.json({ ok: true }))
    //
  })
}

let MyOperations = {
  dbFind: async ({ task, context, result }) => {
    //
    let { dbNam, contextName } = task
  },
}

async function runOperations({ tasks, context, result }) {
  //
  try {
    for (let task of tasks) {
      //
      let opName = task.opName
      //
      await MyOperations[opName]({ task, context, result })
    }
  } catch (e) {
    //
    context.hasError = true
    context.error = e
  }
}

// cloud op
//

// SWAN

//
