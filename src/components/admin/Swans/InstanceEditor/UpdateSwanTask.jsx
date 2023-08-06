import { useRef, useState } from 'react'
import Link from 'next/link'
import { useSwanProject } from '../useSwanProject'
import { useSwanTask } from '../useSwanTask'

export function UpdateSwanTask({ data }) {
  let slugEl = useRef()

  let [ui, setUI] = useState({
    rename: '',
  })

  let swanTasks = useSwanTask((r) => r.swanTasks)

  let work = (e) => {
    setUI((st) => {
      return {
        ...st,
        rename: `Upading...`,
      }
    })

    useSwanTask
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
          useSwanTask.setState({ swanTasks: [...swanTasks] })
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

  let activeSwanID = useSwanProject((r) => r.activeSwanID)
  let activeInstanceID = useSwanProject((r) => r.activeInstanceID)

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
                Title:
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
                  ref={slugEl}
                  key={data._id + 'slug'}
                  defaultValue={data.slug}
                  placeholder='slug'
                  onKeyDown={(e) => {
                    clearTimeout(e.target.timer)
                    e.target.timer = setTimeout(() => {
                      data.slug = e.target.value
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

                    if (window.prompt('Are you sure to remove "' + data.slug + '"?', data.slug) === data.slug) {
                      useSwanTask.getState().deleteOne({ object: data })
                      useSwanTask.setState((st) => {
                        return { ...st, swanTasks: st.swanTasks.filter((r) => r._id !== data._id) }
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
                <Link href={`/admin/swan/${activeSwanID}/${activeInstanceID}/${data._id}/edit`}>
                  <button className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white shadow hover:bg-blue-400 focus:outline-none'>
                    Edit Swan Task
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
                          let data = await useSwanTask.getState().create({
                            object: {
                              swanID: data._id,
                              slug: '',
                              type: 'development',
                            },
                          })

                          useSwanTask.setState((st) => {
                            return { ...st, swans: [...st.swans, data] }
                          })

                          useSwanTask
                            .getState()
                            .find({})
                            .then((data) => {
                              useSwanTask.setState({ swans: data })
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
