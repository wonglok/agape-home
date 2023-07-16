// import clientPromise from './mongo'
import mongoose, { Schema, Types } from 'mongoose'
// import clientPromise from './mongo'

const uri = process.env.MONGODB_URI

mongoose.connect(uri)

delete mongoose.models.UserProfile
if (!mongoose.models.UserProfile) {
  mongoose.model('UserProfile', {
    //
    displayName: String,
    username: {
      type: String,
      unique: true,
    },
    passwordHash: String,

    profilePicS3: {},
  })
}
export const UserProfile = mongoose.models.UserProfile

// -------

delete mongoose.models.CodePackage
if (!mongoose.models.CodePackage) {
  mongoose.model('CodePackage', {
    //
    name: String,
  })
}

export const CodePackage = mongoose.models.CodePackage

// -------
// -------

delete mongoose.models.CodeGroup
if (!mongoose.models.CodeGroup) {
  mongoose.model('CodeGroup', {
    //
    packageID: Types.ObjectId,
    name: String,
    content: String,
  })
}

export const CodeGroup = mongoose.models.CodeGroup

// -------

// -------

delete mongoose.models.CodeFile
if (!mongoose.models.CodeFile) {
  mongoose.model('CodeFile', {
    //
    packageID: Types.ObjectId,
    groupID: Types.ObjectId,
    name: String,
    content: String,
  })
}

export const CodeFile = mongoose.models.CodeFile

// -------

export const getID = () => {
  return '_' + Math.random().toString(36).slice(2, 9)
}

export const getMonID = () => {
  let id = new mongoose.Types.ObjectId()
  return id
}
