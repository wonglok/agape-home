import { useRef } from 'react'
import { useApps } from './useApps'
import slugify from 'slugify'
import { LoaderType } from './LoaderType'

export function UpdateApps({ data }) {
  let slugEl = useRef()

  let set = (e, v = 'focus:border-green-500') => {
    e.target.classList.remove('focus:border-purple-500')
    e.target.classList.remove('focus:border-red-500')
    e.target.classList.remove('focus:border-green-500')

    e.target.classList.add(v)
  }
  let work = (e) => {
    data.slug = slugify(slugEl?.current?.value || '', '-')

    useApps
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

  //

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
                Private Page
              </label>
            </div>
            <div className='flex md:w-2/3'>
              {/* <div className='appearance-none rounded rounded-r-none border-2 border-gray-200 bg-gray-200 py-2 pl-4 pr-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'>
                /private/
              </div> */}
              <input
                className='w-full appearance-none  rounded-none  border-2 border-gray-200 bg-gray-200 py-2 pl-2 pr-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
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
                  }
                }}
              />
              <button
                onClick={() => {
                  //

                  if (window.prompt('Are you sure to remove "' + data.slug + '"?', data.slug) === data.slug) {
                    useApps.getState().deleteOne({ object: data })
                    useApps.setState((st) => {
                      return { ...st, apps: st.apps.filter((r) => r._id !== data._id) }
                    })
                  }
                }}
                // eslint-disable-next-line tailwindcss/no-custom-classname
                className=' focus:shadow-outline mr-2 inline-block cursor-pointer rounded rounded-l-none bg-red-200 px-4 py-2 font-bold text-white shadow hover:bg-red-400 focus:outline-none'
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
