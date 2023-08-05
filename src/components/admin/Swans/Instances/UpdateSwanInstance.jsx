import { useRef, useState } from 'react'
import { useSwanInstance } from '../useSwanInstance'
// import { useSwanInstance } from './useSwanInstance'
import Link from 'next/link'

export function UpdateSwanInstance({ data }) {
  let titleEl = useRef()

  let [ui, setUI] = useState({
    rename: '',
  })

  let work = (e) => {
    setUI((st) => {
      return {
        ...st,
        rename: `Upading...`,
      }
    })

    useSwanInstance
      .getState()
      .updateOne({ object: data })

      .then(() => {
        setUI((st) => {
          return {
            ...st,
            rename: `Successful!`,
          }
        })

        setTimeout(() => {
          setUI((st) => {
            return {
              ...st,
              rename: '',
            }
          })
          useSwanInstance.setState({ swans: [...swans] })
        }, 1000)
      })
      .catch((r) => {
        setUI((st) => {
          return {
            ...st,
            rename: 'Error...',
          }
        })
      })
  }

  let swans = useSwanInstance((r) => r.swans)
  return (
    <>
      <div>
        <div className='w-full max-w-xl'>
          <div className='mb-2 md:flex md:items-start'>
            <div className='pt-2 md:w-1/3'>
              <label
                className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                htmlFor='inline-full-name'
              >
                Swan Title:
              </label>
              <div className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'>
                <>{ui.rename}</>
              </div>
            </div>
            <div className='md:w-2/3'>
              <div className='mb-2 flex'>
                {/* <div className='appearance-none rounded rounded-r-none border-2 border-gray-200 bg-gray-200 py-2 pl-4 pr-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'>
                /private/
              </div> */}
                <input
                  className='w-full appearance-none  rounded-none  border-2 border-gray-200 bg-gray-200 py-2 pl-2 pr-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                  type='text'
                  ref={titleEl}
                  key={data._id + 'title'}
                  defaultValue={data.title}
                  placeholder='title'
                  onKeyDown={(e) => {
                    clearTimeout(e.target.timer)
                    e.target.timer = setTimeout(() => {
                      data.title = e.target.value
                      work(e)
                    }, 500)

                    if (e.key === 'Enter') {
                      work(e)
                    }
                  }}
                />
                <button
                  onClick={() => {
                    //

                    if (window.prompt('Are you sure to remove "' + data.title + '"?', data.title) === data.title) {
                      useSwanInstance.getState().deleteOne({ object: data })
                      useSwanInstance.setState((st) => {
                        return { ...st, swanInstances: st.swanInstances.filter((r) => r._id !== data._id) }
                      })
                    }
                  }}
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className='focus:shadow-outline mr-2 inline-block cursor-pointer rounded rounded-l-none bg-red-200 px-4 py-2 font-bold text-white shadow hover:bg-red-400 focus:outline-none'
                >
                  ❌
                </button>
              </div>

              <div>
                <Link href={`/admin/swan/${data._id}`}>
                  <button className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white shadow hover:bg-blue-400 focus:outline-none'>
                    Edit Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        {/*  */}

        {/*  */}

        {/*
        {data.type === 'development' && (
          <div className='w-full max-w-xl'>
            <div className='md:flex md:items-start'>
              <div className='pt-2 md:w-1/3'>
                <label
                  className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                  htmlFor='inline-full-name'
                ></label>
              </div>
              <div className='md:w-2/3'>
                <div className='flex'>
                  <div className='w-full rounded p-2 pl-0'>
                    <div>
                      <button
                        onClick={async () => {
                          let data = await useSwanInstance.getState().create({
                            object: {
                              swanID: data._id,
                              title: '',
                              type: 'development',
                            },
                          })

                          useSwanInstance.setState((st) => {
                            return { ...st, swans: [...st.swans, data] }
                          })

                          useSwanInstance
                            .getState()
                            .find({})
                            .then((data) => {
                              useSwanInstance.setState({ swans: data })
                            })

                          console.log(data)
                        }}
                        className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white shadow hover:bg-blue-400 focus:outline-none'
                      >
                        Create a Prototype Instance
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}

        {/*  */}

        {/*  */}
      </div>
    </>
  )
}