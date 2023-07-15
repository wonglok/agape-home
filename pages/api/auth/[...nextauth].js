// import { MongoDBAdapter } from '@auth/mongodb-adapter'
// import clientPromise from 'database/mongo'
import { UserProfile } from 'database/mongoose'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

const PREFIX = `${process.env.PREFIX_USER}`

export const authOptions = {
  // adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: 'Admin Login',

      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'admin' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        if (process.env[PREFIX + '_' + credentials.username] === credentials.password) {
          return {
            id: credentials.username,
            name: credentials.username,
            email: credentials.username,
          }
        } else {
          let userInDB = await UserProfile.findOne({ username: credentials.username })

          if (!userInDB) {
            return null
          }
          let result = await new Promise((resolve, reject) => {
            bcrypt.compare(credentials.password, userInDB.passwordHash, function (err, result) {
              if (err) {
                console.error(err)
                reject(null)
                return
              }
              resolve(result)
            })
          }).catch((r) => {
            return null
          })

          if (result === true) {
            return {
              id: userInDB.username,
              name: userInDB.username,
              email: userInDB.username,
            }
          } else {
            return null
          }
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, user, token }) {
      let keyname = PREFIX + '_' + token?.email
      if (keyname in process.env) {
        session.user.role = 'devroot'
      }
      let userInDB = await UserProfile.findOne({ username: token?.email })

      if (userInDB) {
        session.user.role = 'editor'
        return session
      }
      return session
    },
  },

  theme: {
    colorScheme: 'light',
    brandColor: '#610046',
  },
}

export default NextAuth(authOptions)
