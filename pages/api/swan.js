// import { getID } from 'agape-sdk/src/utils/getID'
import { Swan } from 'database/mongoose'
import { getServerSession } from 'next-auth/next'
import { matchAny, authOptions } from './auth/[...nextauth]'
// import slugify from 'slugify'

export default async function API(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (session && matchAny(session, ['editor', 'devroot'])) {
    let userID = session.user.name

    let bodyData = JSON.parse(req.body)

    let payload = bodyData.payload || {}

    if (bodyData.action === 'create') {
      let newItem = await Swan.create({
        title: payload.object.title || '',
        type: payload.object.type || '',

        developmentURL: payload.object.developmentURL || '',
        developmentSlug: payload.object.developmentSlug || '',
        productionURL: payload.object.productionURL || '',
        productionSlug: payload.object.productionSlug || '',
      })

      return res.json({
        data: newItem,
      })
    }

    if (bodyData.action === 'find') {
      let cmd = Swan.find({}).sort({ createdAt: -1 })

      if (typeof payload.offset !== 'undefined') {
        cmd = cmd.skip(payload.offset || 0)
      }

      if (typeof payload.limit !== 'undefined') {
        cmd = cmd.limit(payload.limit || 512)
      }

      let result = await cmd

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'findAll') {
      let result = await Swan.find({}).sort({ createdAt: -1 })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'findOne') {
      let result = await Swan.findOne({ _id: payload?.object?._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'updateOne') {
      let updated = await Swan.findByIdAndUpdate(payload?.object?._id, { ...payload?.object })
      let result = await Swan.findOne({ _id: payload?.object._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'deleteOne') {
      let result = await Swan.findByIdAndRemove(payload?.object._id)

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
