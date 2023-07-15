import { useRouter } from 'next/router'
import { EditAdminUser } from '../Profiles/EditAdminUser'
import { useEffect, useState } from 'react'
import { useProfiles } from '../Profiles/useProfiles'
import { DeveloperGate } from '../AdminLayout/DeveloperGate'

export function MyProfileEdit() {
  // let sess = useSession()
  // sess?.data?.user?.name

  let router = useRouter()
  let query = router.query || {}
  let profileID = query.profileID

  let [st, setSt] = useState(false)

  useEffect(() => {
    if (!profileID) {
      return
    }

    useProfiles
      .getState()
      .loadOneProfile({ _id: profileID })
      .then((r) => {
        setSt(r)
      })
  }, [profileID])
  return (
    <>
      {/*  */}
      <DeveloperGate>
        <h1 className='daysfont mb-3 text-2xl'>AdminUser Profile</h1>

        {st && <EditAdminUser profile={st}></EditAdminUser>}
      </DeveloperGate>
      {/*  */}
    </>
  )
}

//
// function openIframe() {
//   // Replace it with your own subdomain
//   let subdomain = 'demo'
//   if (frame.src == '') {
//     frame.src = `https://${subdomain}.avaturn.dev`
//   }
//   frame.hidden = false
// }
