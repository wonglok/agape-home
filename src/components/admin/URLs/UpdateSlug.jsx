import { useRef } from 'react'
import { useSlug } from './useSlug'
import slugify from 'slugify'

export function UpdateSlug({ data }) {
  let slugEl = useRef()
  return (
    <>
      <div>
        <div className='w-full max-w-xl'>
          <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/3'>
              <label
                className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                htmlFor='inline-full-name'
              >
                /
              </label>
            </div>
            <div className='md:w-2/3'>
              <input
                className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                type='text'
                ref={slugEl}
                defaultValue={data.slug}
                placeholder='/about-me'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    //!SECTION
                    data.slug = slugify(slugEl.current.value || '', '-')
                    useSlug
                      .getState()
                      .updateOne({ object: data })

                      .then(() => {
                        e.target.classList.remove('focus:border-purple-500')
                        e.target.classList.remove('focus:border-red-500')
                        e.target.classList.remove('focus:border-green-500')

                        e.target.classList.add('focus:border-green-500')

                        setTimeout(() => {
                          e.target.classList.remove('focus:border-purple-500')
                          e.target.classList.remove('focus:border-red-500')
                          e.target.classList.remove('focus:border-green-500')

                          e.target.classList.add('focus:border-purple-500')
                        }, 1000)
                      })
                      .catch((r) => {
                        e.target.classList.remove('focus:border-purple-500')
                        e.target.classList.add('focus:border-red-500')
                      })
                    //!SECTION
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
