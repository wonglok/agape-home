import { useRef } from 'react'
import { useSlug } from './useSlug'

export function CreateSlug() {
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
                Page URL Slug
              </label>
            </div>
            <div className='md:w-2/3'>
              <input
                className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
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
                  let data = await useSlug.getState().create({
                    object: {
                      slug: slugEl?.current?.value || '',
                      items: [],
                    },
                  })

                  useSlug.setState((st) => {
                    return { ...st, slugs: [...st.slugs, data] }
                  })

                  useSlug
                    .getState()
                    .find({})
                    .then((data) => {
                      useSlug.setState({ slugs: data })
                    })

                  console.log(data)
                }}
                className='focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none'
              >
                Create Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
