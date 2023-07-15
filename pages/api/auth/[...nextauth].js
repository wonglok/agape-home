// import { MongoDBAdapter } from '@auth/mongodb-adapter'
// import clientPromise from 'database/mongo'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const PREFIX = `${process.env.PREFIX_USER}`

export let authOptions = {
  // adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: 'Developer Admin Login',

      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'admin' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        if (process.env[PREFIX + '_' + credentials.username] === credentials.password) {
          return {
            id: credentials.username,
            name: credentials.username,
            username: credentials.username,
            role: 'devroot',
          }
        } else {
          return null
        }
      },
    }),
  ],
}
export default NextAuth(authOptions)
