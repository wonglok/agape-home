// import { getID } from 'agape-sdk/src/utils/getID'
import { UserProfile, getID } from 'database/mongoose'
import { getServerSession } from 'next-auth/next'
export default async function API(req, res) {
  const session = await getServerSession(req, res)

  if (session) {
    if (hasRole(['devroot', 'editor'])) {
      res.send({
        session,
        content: 'This is protected content. You can access this content because you are signed in.',
      })
    } else {
      res.status(406).send({
        content: 'needs a right login',
      })
    }
  } else {
    res.status(403).send({
      error: 'needs login.',
    })
  }
}
