import Link from 'next/link'
import { DeveloperGate } from '../AdminLayout/DeveloperGate'

export function MyDeveloper() {
  // sess?.data?.user?.name
  return (
    <>
      {/*  */}
      {/*  */}

      <DeveloperGate>
        <h2 className='daysfont text-2xl underline'>Welcome to AGAPE Backend</h2>
        <div>
          <Link href={`/system/user-create`}>
            <button className='mb-1 mr-3 bg-gray-200 p-3'>Create Admin User</button>
          </Link>
        </div>
        <div>
          <Link href={`/system/user`}>
            <button className='mb-1 mr-3 bg-gray-200 p-3'>View All Admin User</button>
          </Link>
        </div>
      </DeveloperGate>
    </>
  )
}
