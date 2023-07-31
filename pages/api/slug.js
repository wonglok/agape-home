// import { getID } from 'agape-sdk/src/utils/getID'
import { ABLoader, AppLoader, AppModules, AppPackage, CodeFile, CodeGroup, getID } from 'database/mongoose'
import { getServerSession } from 'next-auth/next'
import { matchAny, authOptions } from './auth/[...nextauth]'
import slugify from 'slugify'

export default async function API(req, res) {
  const session = await getServerSession(req, res, authOptions)

  let bodyData = JSON.parse(req.body)

  let payload = bodyData?.payload || {}

  if (bodyData.action === 'findSlug') {
    let result = await ABLoader.findOne({ slug: payload?.slug })

    return res.json({
      data: result,
    })
  }

  if (bodyData.action === 'findCode3D') {
    if (session && matchAny(session, ['editor', 'devroot'])) {
    } else {
      let result = await ABLoader.countDocuments({ defaultLinkID: payload?.appID })
      if (result === 0) {
        return res.status(404).json({
          data: false,
        })
      }
    }

    let app = await AppLoader.findOne({ _id: payload?.appID })

    let pArr = await AppPackage.find({ appLoaderID: payload?.appID })
    let mArr = await AppModules.find({ appLoaderID: payload?.appID })
    let gArr = await CodeGroup.find({ appLoaderID: payload?.appID })
    let fArr = await CodeFile.find({ appLoaderID: payload?.appID })

    app = JSON.parse(JSON.stringify(app))
    let appPackages = JSON.parse(JSON.stringify(pArr))
    let appModules = JSON.parse(JSON.stringify(mArr))
    let appCodeGroups = JSON.parse(JSON.stringify(gArr))
    let appCodeFiles = JSON.parse(JSON.stringify(fArr))

    let args = {
      appLoader: 'app-loader',
      data: {
        appPackages: appPackages,
        appModules: appModules,
        appCodeGroups: appCodeGroups,
        appCodeFiles: appCodeFiles,
      },
    }

    return res.json({
      data: args,
    })
  }

  if (session && matchAny(session, ['editor', 'devroot'])) {
    let userID = session.user.name

    let bodyData = JSON.parse(req.body)

    let payload = bodyData.payload || {}

    //
    if (bodyData.action === 'create') {
      if (payload.object.slug[0] === '/') {
        payload.object.slug = payload.object.slug.replace('/', '')
      }

      let newItem = await ABLoader.create({
        slug: slugify(payload.object.slug || '', '-') || '',
        items: payload.object.items || [],
      })

      return res.json({
        data: newItem,
      })
    }

    if (bodyData.action === 'find') {
      let result = await ABLoader.find({})
        .sort({ createdAt: -1 })
        .skip(payload.offset || 0)
        .limit(payload.limit || 512)

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'findOne') {
      let result = await ABLoader.findOne({ _id: payload?.object._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'updateOne') {
      if (payload.object.slug[0] === '/') {
        payload.object.slug = payload.object.slug.replace('/', '')
      }

      let updated = await ABLoader.findByIdAndUpdate(payload?.object?._id, { ...payload?.object })
      let result = await ABLoader.findOne({ _id: payload?.object._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'deleteOne') {
      let result = await ABLoader.findByIdAndRemove(payload?.object._id)

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
