// import { getID } from 'agape-sdk/src/utils/getID'
import { AppModules, AppPackage, CodeFile, CodeGroup, getID } from 'database/mongoose'
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
      let newItem = await AppPackage.create({
        ...(payload?.object || {}),
      })

      return res.json({
        data: newItem,
      })
    }

    if (bodyData.action === 'find') {
      let result = await AppPackage.find({}).sort({ _id: -1 })
      // .skip(payload.offset || 0)
      // .limit(payload.limit || 512)

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'findByAppID') {
      let result = await AppPackage.find({
        appLoaderID: payload.appLoaderID,
      }).sort({ _id: -1 })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'findOne') {
      let result = await AppPackage.findOne({ _id: payload?.object?._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'updateOne') {
      let updated = await AppPackage.findByIdAndUpdate(payload?.object?._id, { ...payload?.object })
      let result = await AppPackage.findOne({ _id: payload?.object._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'deleteOne') {
      let mods = await AppModules.find({ appPackageID: payload?.object._id })
      let groups = await CodeGroup.find({ appModuleID: { $in: mods.map((m) => m._id) } })
      let files = await CodeFile.find({ appGroupID: { $in: groups.map((g) => g._id) } })

      await AppModules.deleteMany({ _id: { $in: mods.map((r) => r._id) } })
      await CodeGroup.deleteMany({ _id: { $in: groups.map((r) => r._id) } })
      await CodeFile.deleteMany({ _id: { $in: files.map((r) => r._id) } })

      let result = await AppPackage.findByIdAndRemove(payload?.object._id)

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
