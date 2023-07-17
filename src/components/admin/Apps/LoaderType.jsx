import Link from 'next/link'

export function LoaderType({ data }) {
  return (
    <div className='mb-6 md:flex md:items-center'>
      <div className='md:w-1/3'>
        <label className='mb-1 block pr-4 text-gray-500 md:mb-0 md:text-right' htmlFor='inline-full-name'>
          <div className='inline-block text-sm'>Tools:</div>
        </label>
      </div>
      <div className='md:w-2/3'>
        <div>
          <Link href={`/admin/editor/${data._id}`}>
            <button className='focus:shadow-outline mr-2 inline-block cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white shadow hover:bg-blue-400 focus:outline-none'>
              Develop
            </button>
          </Link>
          {/* {<URLModal></URLModal>} */}
        </div>
        {/*  */}
      </div>
    </div>
  )
}
