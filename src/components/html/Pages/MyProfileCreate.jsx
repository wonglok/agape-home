import { AdminGate } from '../AdminLayout/AdminGate'
import { CreateAdminUser } from '../Profiles/CreateAdminUser'

export function MyProfileCreate() {
  // let sess = useSession()
  // sess?.data?.user?.name
  return (
    <>
      {/*  */}
      <AdminGate>
        <h1 className='daysfont mb-3 text-2xl'>Create New Admin User</h1>
        <CreateAdminUser></CreateAdminUser>
        {/* <ListOfProfiles></ListOfProfiles> */}
        {/* <Login></Login> */}
      </AdminGate>
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
