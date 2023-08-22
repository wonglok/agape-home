// import { getID } from 'agape-sdk/src/utils/getID'
import { AppAssetFiles, getID } from 'database/mongoose'
import { getServerSession } from 'next-auth/next'
import { matchAny, authOptions } from './auth/[...nextauth]'

export default async function API(req, res) {
  //!SECTION
  //
  //

  res.json({ ok: true })
}
