import Link from 'next/link'
import { useRouter } from 'next/router'

export function PageWorldEditor() {
  let router = useRouter()
  let query = router.query || {}
  let abLoaderID = query.abLoaderID || ''

  return (
    <>
      <div className='h-full w-full bg-gradient-to-t from-slate-400 to-blue-100'>
        {/* <div>ABLoader {abLoaderID}</div> */}

        <div style={{ width: '100%', height: `calc(80px)` }} className='flex bg-white'>
          <div style={{ width: '280px', height: `calc(100%)` }}>
            <div className='flex h-full w-full items-center justify-start'>
              <Link href={`/admin/pages`}>
                <button className='ml-5 rounded-xl bg-gray-200 p-2 px-4 text-sm hover:bg-gray-300'>Back</button>
              </Link>
            </div>
          </div>
          <div style={{ width: 'calc(100% - 280px - 280px)', height: `calc(100%)` }}>
            <div className='flex h-full w-full items-center justify-center'>
              <button className='m-1 rounded-xl bg-gray-200 p-2 px-4 text-sm hover:bg-gray-300'>Room View</button>
              <button className='m-1 rounded-xl bg-gray-200 p-2 px-4 text-sm hover:bg-gray-300'>Street View</button>
              <button className='m-1 rounded-xl bg-gray-200 p-2 px-4 text-sm hover:bg-gray-300'>Page View</button>
            </div>
          </div>
          <div style={{ width: '280px', height: `calc(100%)` }}>
            <div className='flex h-full w-full items-center justify-end'>
              <button className='mr-5 rounded-xl bg-gray-200 p-2 px-4 text-sm hover:bg-gray-300'>Preview</button>
            </div>
          </div>
        </div>
        <div style={{ width: '100%', height: `calc(100% - 80px)` }} className='flex'>
          <div style={{ width: '280px', height: `calc(100%)` }}>Outliner</div>
          <div style={{ width: 'calc(100% - 280px - 280px)', height: `calc(100%)` }}>
            <div className='h-full w-full bg-gradient-to-t from-slate-400 to-gray-100'></div>
          </div>
          <div style={{ width: '280px', height: `calc(100%)` }}>Detail Settings</div>
        </div>
      </div>
    </>
  )
}
