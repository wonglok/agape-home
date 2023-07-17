// import { getID } from 'agape-sdk/src/utils/getID'
import { AppLoader, getID } from 'database/mongoose'
import { getServerSession } from 'next-auth/next'
import { anyRole, authOptions } from './auth/[...nextauth]'
import slugify from 'slugify'

export default async function API(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (session && anyRole(session, ['editor', 'devroot'])) {
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
        items: payload.object.items || [],
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
