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
        <Link href={`/developer/user-create`}>
          <button className='my-3 mr-3 bg-gray-200 p-3'>Create Admin User</button>
        </Link>
        <Link href={`/developer/user`}>
          <button className='my-3 mr-3 bg-gray-200 p-3'>View All Admin User</button>
        </Link>
      </DeveloperGate>
    </>
  )
}
