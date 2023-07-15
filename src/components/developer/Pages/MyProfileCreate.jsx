import { DeveloperGate } from '../AdminLayout/DeveloperGate'
import { CreateAdminUser } from '../Profiles/CreateAdminUser'

export function MyProfileCreate() {
  // let sess = useSession()
  // sess?.data?.user?.name
  return (
    <>
      {/*  */}
      <DeveloperGate>
        <h1 className='daysfont mb-3 text-2xl'>Create New Admin User</h1>
        <CreateAdminUser></CreateAdminUser>
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
