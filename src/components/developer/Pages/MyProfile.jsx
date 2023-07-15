import { DeveloperGate } from '../AdminLayout/DeveloperGate'
import { ListOfProfiles } from '../Profiles/ListOfProfiles'
// import animate from 'animejs'
export function MyProfile() {
  // let sess = useSession()
  // sess?.data?.user?.name
  return (
    <>
      {/*  */}
      <DeveloperGate>
        <h1 className='daysfont mb-3 text-2xl'>AdminUser Profiles Database</h1>
        <ListOfProfiles></ListOfProfiles>
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
