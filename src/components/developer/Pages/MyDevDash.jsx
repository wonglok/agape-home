//
import { DeveloperGate } from '../AdminLayout/DeveloperGate'

export function MyDevDash() {
  return (
    <>
      {/*  */}
      <DeveloperGate>
        <h1 className='daysfont mb-3 text-2xl'>Developer Portal</h1>
        <div>
          <div className='mb-4'>
            <h1 className='text-xl '>Create a Swan Development Runtime</h1>
            <p className='text-sm text-gray-400'>{`Let's build something!`}</p>
            <button
              onClick={() => {
                //
                console.log('Create a Swan Development Runtime')
              }}
              className='my-2 rounded-xl bg-gray-300 p-2 px-5  hover:bg-slate-200'
            >
              Create Runtime
            </button>
          </div>
        </div>
      </DeveloperGate>
      {/*  */}
    </>
  )
}
