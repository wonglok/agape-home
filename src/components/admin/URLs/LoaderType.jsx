import { useSlug } from './useSlug'

export function LoaderType({ data }) {
  return (
    <div className='mb-6 md:flex md:items-center'>
      <div className='md:w-1/3'>
        <label className='mb-1 block pr-4 text-gray-500 md:mb-0 md:text-right' htmlFor='inline-full-name'>
          <div className='inline-block text-sm'>Open Page</div>
        </label>
      </div>
      <div className='md:w-2/3'>
        <div>
          <select
            defaultValue={data.type}
            onChange={(ev) => {
              //
              data.type = ev.target.value
              useSlug.getState().updateOne({ object: data })
            }}
            className=' focus:shadow-outline mr-2 inline-block cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white shadow hover:bg-blue-400 focus:outline-none'
          >
            <option value={'project'}>Project</option>
          </select>
          {/* {<URLModal></URLModal>} */}
        </div>
        {/*  */}
      </div>
    </div>
  )
}
