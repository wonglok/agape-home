import { useRef } from 'react'
import { useSwanInstance } from '../useSwanInstance'
import { useSwanProject } from '../useSwanProject'

export function CreateSwanInstance() {
  let title = useRef()
  return (
    <>
      <div className='h-5'></div>
      <div>
        <div className='w-full max-w-xl'>
          <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/3'>
              <label
                className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                htmlFor='inline-full-title'
              >
                Prototype Title
              </label>
            </div>
            <div className='flex md:w-2/3'>
              <input
                className='w-full appearance-none rounded rounded-l-none border-2 border-gray-200 bg-gray-200 py-2 pl-2 pr-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                type='text'
                ref={title}
                placeholder='1-st-version'
              />
            </div>
          </div>

          <div className='mb-4 md:flex md:items-center'>
            <div className='md:w-1/3'></div>
            <div className='md:w-2/3'>
              <button
                onClick={async () => {
                  let data = await useSwanInstance.getState().create({
                    object: {
                      swanID: useSwanProject.getState().activeSwanID,
                      title: title?.current?.value || '',
                      type: 'development',
                    },
                  })

                  useSwanInstance.setState((st) => {
                    return { ...st, swanInstances: [...st.swanInstances, data] }
                  })

                  useSwanInstance
                    .getState()
                    .findBySwanID({ swanID: useSwanProject.getState().activeSwanID })
                    .then((data) => {
                      useSwanInstance.setState({ swanInstances: data })
                    })

                  console.log(data)
                }}
                className='focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none'
              >
                Create a Prototype 🦢
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}