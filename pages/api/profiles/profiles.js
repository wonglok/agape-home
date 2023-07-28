import { UserProfile, getID } from 'database/mongoose'
import { getServerSession } from 'next-auth'
import bcrypt from 'bcryptjs'
import { matchAny, authOptions } from '../auth/[...nextauth]'
export default async function Profiles(req, res) {
  let session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(406).json({
      msg: 'bad auth',
    })
  }

  if (matchAny(session, ['devroot'])) {
  } else {
    return res.status(406).json({
      msg: 'bad auth',
    })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      msg: 'method not allowed',
    })
  }

  //

  let userID = session.user.name

  let bodyData = JSON.parse(req.body)

  let payload = bodyData.payload || {}

  if (bodyData.action === 'createProfile') {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(payload.password, salt)

    let item = await UserProfile.create({
      displayName: payload.displayName || '',
      username: payload.username || '',
      passwordHash: hash,
      profilePicS3: {},
    })

    return res.json({
      data: item,
    })
  }

  if (bodyData.action === 'loadProfiles') {
    let list = await UserProfile.find({}, { passwordHash: 0 })

    return res.json({
      data: list,
    })
  }

  if (bodyData.action === 'loadOneProfile') {
    let data = await UserProfile.findOne({ _id: payload._id }, { passwordHash: 0 })
    return res.json({
      data: data,
    })
  }

  if (bodyData.action === 'updateProfile') {
    let original = await UserProfile.findOne({ _id: payload.profile._id })
    payload.profile.passwordHash = original.passwordHash
    await UserProfile.findByIdAndUpdate(original._id, payload.profile)
    let updatedData = await UserProfile.findOne({ _id: payload.profile._id }, { passwordHash: 0 })

    return res.json({
      data: updatedData,
    })
  }

  //

  if (bodyData.action === 'removeProfile') {
    let _id = payload._id

    await UserProfile.deleteOne({ _id })

    return res.json({
      op: 'ok',
    })
  }
}
