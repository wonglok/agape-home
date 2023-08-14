import { DeveloperGate } from '../AdminLayout/DeveloperGate'
import { ListOfProfiles } from '../Profiles/ListOfProfiles'
// import animate from 'animejs'
export function MyDevDash() {
  // let sess = useSession()
  // sess?.data?.user?.name
  return (
    <>
      {/*  */}
      <DeveloperGate>
        <h1 className='daysfont mb-3 text-2xl'>Developer Portal</h1>
        <div>
          <div className='mb-4'>
            <h1 className='text-xl '>Create a Swan Development Runtime</h1>
            <p className='text-sm text-gray-400'>Let's Go!</p>
            <button className='my-2 rounded-xl bg-gray-300 p-2 px-5  hover:bg-slate-200'>Create Runtime</button>
          </div>
        </div>
      </DeveloperGate>
      {/*  */}
    </>
  )
}

//
//
//
// function openIframe() {
//   // Replace it with your own subdomain
//   let subdomain = 'demo'
//   if (frame.src == '') {
//     frame.src = `https://${subdomain}.avaturn.dev`
//   }
//   frame.hidden = false
// }
//

//
//
//
