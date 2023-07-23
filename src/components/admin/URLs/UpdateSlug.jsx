import { useRef } from 'react'
import { useSlug } from './useSlug'
import slugify from 'slugify'
import { LoaderType } from './LoaderType'

export function UpdateSlug({ data }) {
  let slugEl = useRef()

  let set = (e, v = 'focus:border-green-500') => {
    e.target.classList.remove('focus:border-purple-500')
    e.target.classList.remove('focus:border-red-500')
    e.target.classList.remove('focus:border-green-500')

    e.target.classList.add(v)
  }
  let work = (e) => {
    //!SECTION
    data.slug = slugify(slugEl.current.value || '', '-')
    useSlug
      .getState()
      .updateOne({ object: data })

      .then(() => {
        set(e, 'focus:border-green-500')

        setTimeout(() => {
          set(e, 'focus:border-purple-500')
        }, 1000)
      })
      .catch((r) => {
        set(e, 'focus:border-red-500')
      })
  }

  return (
    <>
      <div>
        <div className='w-full max-w-xl'>
          <div className='mb-2 md:flex md:items-center'>
            <div className='md:w-1/3'>
              <label
                className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                htmlFor='inline-full-name'
              >
                Page /
              </label>
            </div>
            <div className='flex md:w-2/3'>
              <input
                //

                className='w-full appearance-none  border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                type='text'
                ref={slugEl}
                defaultValue={data.slug}
                placeholder='about-me'
                onKeyDown={(e) => {
                  clearTimeout(e.target.timer)
                  e.target.timer = setTimeout(() => {
                    work(e)
                  }, 1000)

                  if (e.key === 'Enter') {
                    work(e)
                    //!SECTION
                  }
                }}
              />
              <button
                onClick={() => {
                  //
                  useSlug.getState().deleteOne({ object: data })
                  useSlug.setState((st) => {
                    return { ...st, slugs: st.slugs.filter((r) => r._id !== data._id) }
                  })
                }}
                className=' focus:shadow-outline mr-2 inline-block cursor-pointer rounded-r bg-red-200 px-4 py-2 font-bold text-white shadow hover:bg-red-400 focus:outline-none'
              >
                ❌
              </button>
            </div>
          </div>

          {data && <LoaderType data={data}></LoaderType>}
        </div>
      </div>
    </>
  )
}
