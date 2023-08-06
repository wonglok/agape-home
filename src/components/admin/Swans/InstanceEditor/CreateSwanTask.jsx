import { useEffect, useRef } from 'react'
import { useSwanTask } from '../useSwanTask'
import { useSwanProject } from '../useSwanProject'
import slugify from 'slugify'

export function CreateSwanTask() {
  let slug = useRef()
  let swanTasks = useSwanTask((r) => r.swanTasks)

  useEffect(() => {
    slug.current.value = 'task' + `-v${swanTasks.length + 1}`
  }, [swanTasks])
  return (
    <>
      <div className='h-5'></div>
      <div>
        <div className='w-full max-w-xl'>
          <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/3'>
              <label
                className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                htmlFor='inline-full-slug'
              >
                Task Title
              </label>
            </div>
            <div className='flex md:w-2/3'>
              <input
                className='w-full appearance-none rounded rounded-l-none border-2 border-gray-200 bg-gray-200 py-2 pl-2 pr-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                type='text'
                ref={slug}
                defaultValue={`task`}
                placeholder='task'
              />
            </div>
          </div>

          <div className='mb-4 md:flex md:items-center'>
            <div className='md:w-1/3'></div>
            <div className='md:w-2/3'>
              <button
                onClick={async () => {
                  let data = await useSwanTask.getState().create({
                    object: {
                      swanInstanceID: useSwanProject.getState().activeInstanceID,
                      slug: slugify(slug?.current?.value || '') || '',
                      task: {},
                    },
                  })

                  useSwanTask.setState((st) => {
                    return { ...st, swanTasks: [...st.swanTasks, data] }
                  })

                  useSwanTask
                    .getState()
                    .findByInstanceID({ swanInstanceID: useSwanProject.getState().activeInstanceID })
                    .then((data) => {
                      useSwanTask.setState({ swanTasks: data })
                    })

                  console.log(data)
                }}
                className='focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none'
              >
                Create a Task 🦢
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
