import { useRef } from 'react'
import { useSwan } from './useSwan'

export function CreateSwan() {
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
                Swan title
              </label>
            </div>
            <div className='flex md:w-2/3'>
              <input
                className='w-full appearance-none rounded rounded-l-none border-2 border-gray-200 bg-gray-200 py-2 pl-2 pr-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                type='text'
                ref={title}
                placeholder='about-me'
              />
            </div>
          </div>

          <div className='mb-4 md:flex md:items-center'>
            <div className='md:w-1/3'></div>
            <div className='md:w-2/3'>
              <button
                onClick={async () => {
                  let data = await useSwan.getState().create({
                    object: {
                      title: title?.current?.value || '',
                    },
                  })

                  useSwan.setState((st) => {
                    return { ...st, swans: [...st.swans, data] }
                  })

                  useSwan
                    .getState()
                    .find({})
                    .then((data) => {
                      useSwan.setState({ swans: data })
                    })

                  console.log(data)
                }}
                className='focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none'
              >
                Create Development
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
