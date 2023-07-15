import { AdminGate } from '../AdminLayout/AdminGate'
import { ListOfProfiles } from '../Profiles/ListOfProfiles'
// import animate from 'animejs'
export function MyProfile() {
  // let sess = useSession()
  // sess?.data?.user?.name
  return (
    <>
      {/*  */}
      <AdminGate>
        <h1 className='daysfont mb-3 text-2xl'>AdminUser Profiles Database</h1>
        <ListOfProfiles></ListOfProfiles>
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
