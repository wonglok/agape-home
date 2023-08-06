// import { getID } from 'agape-sdk/src/utils/getID'
import { SwanTask } from 'database/mongoose'
import { getServerSession } from 'next-auth/next'
import { matchAny, authOptions } from './auth/[...nextauth]'
import slugify from 'slugify'
export default async function API(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (session && matchAny(session, ['editor', 'devroot'])) {
    let userID = session.user.name

    let bodyData = JSON.parse(req.body)

    let payload = bodyData.payload || {}

    if (bodyData.action === 'create') {
      if (payload.object.slug[0] === '/') {
        payload.object.slug = payload.object.slug.replace('/', '')
      }

      payload.object.slug = slugify(payload.object.slug || '', '-')
      payload.object.slug = payload.object.slug || ''

      let count = await SwanTask.countDocuments({
        slug: payload.object.slug,
        swanID: payload.object.swanID,
      })

      if (count === 0) {
        let newItem = await SwanTask.create({
          slug: payload.object.slug,
          swanID: payload.object.swanID,
          task: {},
        })

        return res.json({
          data: newItem,
        })
      } else {
        return res.status(406).json({
          error: 'taken',
        })
      }
    }

    if (bodyData.action === 'find') {
      let cmd = SwanTask.find({}).sort({ createdAt: -1 })

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

    if (bodyData.action === 'countBySwanID') {
      let result = await SwanTask.count({
        swanID: payload.swanID,
      }).sort({ _id: -1 })

      return res.json({
        data: result,
      })
    }
    if (bodyData.action === 'findBySwanID') {
      let result = await SwanTask.find({
        swanID: payload.swanID,
      }).sort({ _id: -1 })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'findAll') {
      let result = await SwanTask.find({}).sort({ createdAt: -1 })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'findOne') {
      let result = await SwanTask.findOne({ _id: payload?.object?._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'updateOne') {
      if (payload.object.slug[0] === '/') {
        payload.object.slug = payload.object.slug.replace('/', '')
      }

      payload.object.slug = slugify(payload.object.slug || '', '-')
      payload.object.slug = payload.object.slug || ''

      let updated = await SwanTask.findByIdAndUpdate(payload?.object?._id, { ...payload?.object })
      let result = await SwanTask.findOne({ _id: payload?.object._id })

      return res.json({
        data: result,
      })
    }

    if (bodyData.action === 'deleteOne') {
      let result = await SwanTask.findByIdAndRemove(payload?.object._id)

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
