import { useRef } from 'react'
import { AdminGate } from '../AdminLayout/AdminGate'
import { PageApps } from '../Apps/PageApps'
import { URLModalOut } from '../Apps/Tunnel'

export function MyDeveloperAdmin() {
  return (
    <>
      <AdminGate>
        <h2 className='daysfont text-2xl'>Developer Studio</h2>
        <div className='mb-3 text-xs text-gray-500'>{`Let's build something!`}</div>

        <CreateRuntimeCard></CreateRuntimeCard>

        <div className='mb-3 mr-3 w-96'>
          <div className='block rounded-2xl border border-gray-400 bg-gray-100 px-4 py-3 shadow-2xl'>
            {/* Runtime */}

            <div>
              <div className=''>
                <h1 className='text-xl '>Your Swan Runtimes</h1>
                <p className='text-sm text-gray-400'>{`Let's finish what you started!`}</p>
                <button
                  onClick={() => {
                    // console.log('Create a Swan Development Runtime')
                  }}
                  className='my-2 rounded-xl border border-cyan-500 bg-gray-100 p-2  px-5 shadow-lg shadow-cyan-200 hover:bg-gray-200 '
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </AdminGate>
      <URLModalOut></URLModalOut>
    </>
  )
}

//

//

//

function CreateRuntimeCard() {
  let newTitle = useRef()
  return (
    <div className='mb-3 mr-3 w-96'>
      <div className='block rounded-2xl border border-gray-400 bg-gray-100 px-4 py-3 shadow-2xl'>
        {/* Runtime */}

        <div>
          <div className=''>
            <h1 className='text-xl '>Create a Swan Development Runtime</h1>
            <p className='mb-3 text-sm text-gray-400'>{`Develop your Serverless Web Application Node`}</p>
            <div>
              <div className=''>
                <input
                  className={`focus:shadow-outline appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-700 focus:outline-none `}
                  type='text'
                  ref={newTitle}
                  placeholder={`Runtime Name`}
                />
              </div>
              <div className=''></div>
            </div>

            <button
              onClick={() => {
                // console.log('Create a Swan Development Runtime')
              }}
              className='my-2 rounded-xl border border-cyan-500 bg-gray-100 p-2  px-5 shadow-lg shadow-cyan-200 hover:bg-gray-200 '
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
