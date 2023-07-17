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

delete mongoose.models.CodeProject
if (!mongoose.models.CodeProject) {
  mongoose.model('CodeProject', {
    //
    name: String,
  })
}

export const CodeProject = mongoose.models.CodeProject

// -------

// -------

delete mongoose.models.CodePackage
if (!mongoose.models.CodePackage) {
  mongoose.model('CodePackage', {
    //
    projectID: Types.ObjectId,
    name: String,
  })
}

export const CodePackage = mongoose.models.CodePackage
// -------

// -------
delete mongoose.models.CodeGroup
if (!mongoose.models.CodeGroup) {
  mongoose.model('CodeGroup', {
    projectID: Types.ObjectId,
    packageID: Types.ObjectId,
    name: String,
  })
}

export const CodeGroup = mongoose.models.CodeGroup

// -------

// -------

delete mongoose.models.CodeFile
if (!mongoose.models.CodeFile) {
  mongoose.model('CodeFile', {
    //
    projectID: Types.ObjectId,
    packageID: Types.ObjectId,
    groupID: Types.ObjectId,
    fileName: String,
    content: String,
  })
}

export const CodeFile = mongoose.models.CodeFile
// -------

// -------
delete mongoose.models.LibFile
if (!mongoose.models.LibFile) {
  mongoose.model('LibFile', {
    //
    projectID: Types.ObjectId,
    slug: {
      type: String,
      unique: true,
    },

    name: String,
    version: String,

    content: String,
  })
}

export const LibFile = mongoose.models.LibFile
// -------

// -------
delete mongoose.models.ABLoader
if (!mongoose.models.ABLoader) {
  mongoose.model('ABLoader', {
    //
    slug: {
      type: String,
      unique: true,
    },

    defaultLinkID: String,

    // type: {
    //   type: String,
    //   default: 'project',
    // },
    // projectID: String,
    // abTests: [
    //   {
    //     name: String,
    //     weight: Number,
    //     projectID: Types.ObjectId,
    //   },
    // ],
  })
}

export const ABLoader = mongoose.models.ABLoader
// -------

// -------
delete mongoose.models.AppLoader
if (!mongoose.models.AppLoader) {
  mongoose.model('AppLoader', {
    //
    slug: {
      type: String,
      unique: true,
    },

    // type: {
    //   type: String,
    //   default: 'project',
    // },
    // projectID: String,
    // abTests: [
    //   {
    //     name: String,
    //     weight: Number,
    //     projectID: Types.ObjectId,
    //   },
    // ],
  })
}

export const AppLoader = mongoose.models.AppLoader
// -------

export const getID = () => {
  return '_' + Math.random().toString(36).slice(2, 9)
}

export const getMongoID = () => {
  let id = new mongoose.Types.ObjectId()
  return id
}
