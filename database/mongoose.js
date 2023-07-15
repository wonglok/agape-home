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

    readyPlayerMeUrl: String,
  })
}

export const UserProfile = mongoose.models.UserProfile

// const kitty = new Cat({ name: 'Zildjian' })
// kitty.save().then(() => console.log('meow'))

export const getID = () => {
  return '_' + Math.random().toString(36).slice(2, 9)
}

export const getMonID = () => {
  let id = new mongoose.Types.ObjectId()
  return id
}
