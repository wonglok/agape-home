// import { getID } from 'agape-sdk/src/utils/getID'
import { CodeFile, CodeGroup, getID } from 'database/mongoose'
import { getServerSession } from 'next-auth/next'
import { matchAny, authOptions } from './auth/[...nextauth]'

export default async function API(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (session && matchAny(session, ['editor', 'devroot'])) {
    let userID = session.user.name

    let bodyData = JSON.parse(req.body)

    let payload = bodyData.payload || {}

    //
    if (bodyData.action === 'create') {
      let newItem = await CodeGroup.create({
        ...(payload?.object || {}),
      })

      return res.json({
        data: newItem,
      })
    }

    if (bodyData.action === 'find') {
      let result = await CodeGroup.find({}).sort({ createdAt: -1 })

      return res.json({
        data: result,
      })
    }
    if (bodyData.action === 'findByAppID') {
      let result = await CodeGroup.find({
        appLoaderID: payload.appLoaderID,
      }).sort({ createdAt: -1 })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'findOne') {
      let result = await CodeGroup.findOne({ _id: payload?.object?._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'updateOne') {
      let updated = await CodeGroup.findByIdAndUpdate(payload?.object?._id, { ...payload?.object })
      let result = await CodeGroup.findOne({ _id: payload?.object._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'deleteOne') {
      let files = await CodeFile.find({ appGroupID: payload?.object._id })

      await CodeFile.deleteMany({ _id: { $in: files.map((r) => r._id) } })

      let result = await CodeGroup.findByIdAndRemove(payload?.object._id)

      return res.json({
        data: result,
      })
    }

    //
  } else {
    //
    return res.status(406).send({
      error: 'You must be signed in to view the protected content on this page.',
    })
  }
}
