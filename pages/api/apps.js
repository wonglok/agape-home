// import { getID } from 'agape-sdk/src/utils/getID'
import { AppLoader, AppModules, AppPackage, CodeFile, CodeGroup, getID, getMongoID } from 'database/mongoose'
import { getServerSession } from 'next-auth/next'
import { matchAny, authOptions } from './auth/[...nextauth]'
import slugify from 'slugify'

export default async function API(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (session && matchAny(session, ['editor', 'devroot'])) {
    let userID = session.user.name

    let bodyData = JSON.parse(req.body)

    let payload = bodyData.payload || {}

    //
    if (bodyData.action === 'create') {
      if (payload.object.slug[0] === '/') {
        payload.object.slug = payload.object.slug.replace('/', '')
      }

      let newItem = await AppLoader.create({
        slug: slugify(payload.object.slug || '', '-') || '',
      })

      return res.json({
        data: newItem,
      })
    }

    if (bodyData.action === 'find') {
      let result = await AppLoader.find({})
        .sort({ createdAt: -1 })
        .skip(payload.offset || 0)
        .limit(payload.limit || 512)

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'findAll') {
      let result = await AppLoader.find({}).sort({ createdAt: -1 })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'findOne') {
      let result = await AppLoader.findOne({ _id: payload?.object?._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'updateOne') {
      if (payload.object.slug[0] === '/') {
        payload.object.slug = payload.object.slug.replace('/', '')
      }

      let updated = await AppLoader.findByIdAndUpdate(payload?.object?._id, { ...payload?.object })
      let result = await AppLoader.findOne({ _id: payload?.object._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'deleteOne') {
      let result = await AppLoader.findByIdAndRemove(payload?.object._id)

      await AppPackage.deleteMany({ appLoaderID: payload?.object._id })
      await AppModules.deleteMany({ appLoaderID: payload?.object._id })
      await CodeGroup.deleteMany({ appLoaderID: payload?.object._id })
      await CodeFile.deleteMany({ appLoaderID: payload?.object._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'cloneOne') {
      //
      let app = await AppLoader.findOne({ _id: payload?.object._id })

      let pArr = await AppPackage.find({ appLoaderID: payload?.object._id })
      let mArr = await AppModules.find({ appLoaderID: payload?.object._id })
      let gArr = await CodeGroup.find({ appLoaderID: payload?.object._id })
      let fArr = await CodeFile.find({ appLoaderID: payload?.object._id })

      app = JSON.parse(JSON.stringify(app))
      pArr = JSON.parse(JSON.stringify(pArr))
      mArr = JSON.parse(JSON.stringify(mArr))
      gArr = JSON.parse(JSON.stringify(gArr))
      fArr = JSON.parse(JSON.stringify(fArr))

      delete app._id
      app.slug = slugify(`${app.slug}${getID()}`, '-')
      app = await AppLoader.create({ ...app })

      for (let pa of pArr) {
        pa = { ...pa }
        delete pa._id
        pa.appLoaderID = app._id + ''
        pa = await AppPackage.create(pa)
        for (let ma of mArr) {
          ma = { ...ma }
          delete ma._id
          ma.appLoaderID = app._id + ''
          ma.appPackageID = pa._id + ''
          ma = await AppModules.create(ma)

          for (let ga of gArr) {
            ga = { ...ga }
            delete ga._id
            ga.appLoaderID = app._id + ''
            ga.appModuleID = ma._id + ''
            ga = await CodeGroup.create(ga)

            for (let fa of fArr) {
              fa = { ...fa }
              delete fa._id
              fa.appLoaderID = app._id + ''
              fa.appCodeGroupID = ga._id + ''
              fa = await CodeFile.create(fa)
            }
          }
        }
      }

      return res.json({
        data: {},
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
