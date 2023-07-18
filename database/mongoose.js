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

    appLoader: { type: String, default: 'app-loader' },
    tags: [{}],
  })
}

export const AppLoader = mongoose.models.AppLoader
// -------

// -------
delete mongoose.models.AppPackage
if (!mongoose.models.AppPackage) {
  mongoose.model('AppPackage', {
    //
    appLoaderID: String,
    packageName: String,
  })
}

export const AppPackage = mongoose.models.AppPackage
// -------

// -------
delete mongoose.models.AppModules
if (!mongoose.models.AppModules) {
  mongoose.model('AppModules', {
    //
    appLoaderID: String,
    appPackageID: String,
    moduleName: String,
  })
}

export const AppModules = mongoose.models.AppModules
// -------

// -------
delete mongoose.models.CodeGroup
if (!mongoose.models.CodeGroup) {
  mongoose.model('CodeGroup', {
    //
    appLoaderID: String,
    appModuleID: String,
    groupName: String,

    inputs: [{}],
  })
}

export const CodeGroup = mongoose.models.CodeGroup
// -------

// -------
delete mongoose.models.CodeFile
if (!mongoose.models.CodeFile) {
  mongoose.model('CodeFile', {
    //
    appLoaderID: String,
    codeGroupID: String,
    fileName: String,
    content: String,
  })
}

export const CodeFile = mongoose.models.CodeFile
// -------

// -------
export const getID = () => {
  return '_' + Math.random().toString(36).slice(2, 9)
}

export const getMongoID = () => {
  let id = new mongoose.Types.ObjectId()
  return id
}
