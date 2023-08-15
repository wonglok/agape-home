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
    linkType: String,
  })
}

export const ABLoader = mongoose.models.ABLoader
// -------

// -------
delete mongoose.models.AppLoader
if (!mongoose.models.AppLoader) {
  mongoose.model(
    'AppLoader',
    new Schema(
      {
        //
        slug: {
          type: String,
          unique: true,
        },
      },
      { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } },
    ),
  )
}

export const AppLoader = mongoose.models.AppLoader
// -------

// -------
delete mongoose.models.AppAssetFiles
if (!mongoose.models.AppAssetFiles) {
  mongoose.model(
    'AppAssetFiles',
    new Schema(
      {
        //
        appLoaderID: String,
        displayName: String,
        file: {},
        parentID: String,
        type: {
          type: String,
          default: 'folder',
        },
      },
      { timestamps: { AppAssetFiles: 'AppAssetFiles', updatedAt: 'updatedAt' } },
    ),
  )
}

export const AppAssetFiles = mongoose.models.AppAssetFiles
// -------

// -------
delete mongoose.models.AppPackage
if (!mongoose.models.AppPackage) {
  mongoose.model(
    'AppPackage',
    new Schema(
      {
        //
        appLoaderID: String,
        packageName: String,
      },
      { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } },
    ),
  )
}

export const AppPackage = mongoose.models.AppPackage
// -------

// -------
delete mongoose.models.AppModules
if (!mongoose.models.AppModules) {
  mongoose.model(
    'AppModules',
    new Schema(
      {
        //
        appLoaderID: String,
        appPackageID: String,
        moduleName: String,
      },
      { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } },
    ),
  )
}

export const AppModules = mongoose.models.AppModules
// -------

// -------
delete mongoose.models.CodeGroup
if (!mongoose.models.CodeGroup) {
  mongoose.model(
    'CodeGroup',
    new Schema(
      {
        //
        appLoaderID: String,
        appModuleID: String,
        groupName: String,

        inputs: [{}],
      },
      { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } },
    ),
  )
}

export const CodeGroup = mongoose.models.CodeGroup
// -------

// -------
delete mongoose.models.CodeFile
if (!mongoose.models.CodeFile) {
  mongoose.model(
    'CodeFile',
    new Schema(
      {
        appLoaderID: String,
        appCodeGroupID: String,
        fileName: String,
        content: String,
      },
      { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } },
    ),
  )
}

export const CodeFile = mongoose.models.CodeFile

// -------
// SWAN
// -------
delete mongoose.models.Swan
if (!mongoose.models.Swan) {
  mongoose.model(
    'Swan',
    new Schema(
      {
        title: String,
        type: String,

        developmentURL: String,
        developmentSlug: String,

        productionURL: String,
        productionSlug: String,

        //
        productionFiles: [{}],

        // unzip -> upload -> set dbSChemas
        dbSchemas: [{}],
      },
      { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } },
    ),
  )
}

export const Swan = mongoose.models.Swan

// -------
// swanInstanceID
// -------
delete mongoose.models.SwanTask
if (!mongoose.models.SwanTask) {
  mongoose.model(
    'SwanTask',
    new Schema(
      {
        swanID: String,
        slug: String,
        task: {},
      },
      { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } },
    ),
  )
}
export const SwanTask = mongoose.models.SwanTask

// -------
// -------
// -------
export const getID = () => {
  return '_' + Math.random().toString(36).slice(2, 9)
}

export const getMongoID = () => {
  let id = new mongoose.Types.ObjectId()
  return id
}
