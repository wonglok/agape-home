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

delete mongoose.models.Package
if (!mongoose.models.Package) {
  mongoose.model('Package', {
    //
    name: String,
  })
}

export const Package = mongoose.models.Package
// -------

// -------

delete mongoose.models.ModuleGroup
if (!mongoose.models.ModuleGroup) {
  mongoose.model('ModuleGroup', {
    //
    packageID: Types.ObjectId,
    name: String,
    content: String,
  })
}

export const ModuleGroup = mongoose.models.ModuleGroup

// -------

// -------

delete mongoose.models.ScriptFile
if (!mongoose.models.ScriptFile) {
  mongoose.model('ScriptFile', {
    //
    packageID: Types.ObjectId,
    moduleID: Types.ObjectId,
    name: String,
    content: String,
  })
}

export const ScriptFile = mongoose.models.ScriptFile

// -------

// const kitty = new Cat({ name: 'Zildjian' })
// kitty.save().then(() => console.log('meow'))

export const getID = () => {
  return '_' + Math.random().toString(36).slice(2, 9)
}

export const getMonID = () => {
  let id = new mongoose.Types.ObjectId()
  return id
}
