import { useRef } from 'react'
import { useApps } from './useApps'

export function CreateApp() {
  let slugEl = useRef()
  return (
    <>
      <div className='h-5'></div>
      <div>
        <div className='w-full max-w-xl'>
          <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/3'>
              <label
                className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                htmlFor='inline-full-name'
              >
                App Page URL
              </label>
            </div>
            <div className='flex md:w-2/3'>
              <div className='appearance-none rounded rounded-r-none border-2 border-gray-200 bg-gray-200 py-2 pl-4 pr-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'>
                /codes/
              </div>
              <input
                className='w-full appearance-none rounded rounded-l-none border-2 border-gray-200 bg-gray-200 py-2 pl-2 pr-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                type='text'
                ref={slugEl}
                placeholder='about-me'
              />
            </div>
          </div>

          <div className='mb-4 md:flex md:items-center'>
            <div className='md:w-1/3'></div>
            <div className='md:w-2/3'>
              <button
                onClick={async () => {
                  let data = await useApps.getState().create({
                    object: {
                      slug: slugEl?.current?.value || '',
                      tags: ['lab'],
                    },
                  })

                  useApps.setState((st) => {
                    return { ...st, apps: [...st.apps, data] }
                  })

                  useApps
                    .getState()
                    .find({})
                    .then((data) => {
                      useApps.setState({ apps: data })
                    })

                  console.log(data)
                }}
                className='focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none'
              >
                Create 3D Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
