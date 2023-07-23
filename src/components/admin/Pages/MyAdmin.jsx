import Link from 'next/link'
import { AdminGate } from '../AdminLayout/AdminGate'
// import { PageURL } from '../URLs/PageURL'
import { URLModalOut } from '../URLs/Tunnel'
// import { CodeCompiler } from '../CodeCompiler/CodeCompiler'
// import { TestButton } from '../CodeCompiler/CodeCore'
// import { CodeCoreRunner } from '../CodeCompiler/CodeCoreRunner'

export function MyAdmin() {
  return (
    <>
      {/*  */}
      <AdminGate>
        <h2 className='daysfont mb-3 text-2xl underline'>Welcome to Admin Portal</h2>

        {/* <TestButton></TestButton> */}
        {/* <CodeCompiler></CodeCompiler> */}
        {/* <CodeCoreRunner></CodeCoreRunner> */}

        {/* <PageURL></PageURL> */}

        <div className='mr-3 inline-block'>
          <Link href={`/admin/pages`}>
            <button className='rounded-lg bg-gray-100 p-3 py-6 shadow-md shadow-slate-400'>Pages</button>
          </Link>
        </div>

        <div className='mr-3 inline-block'>
          <Link href={`/admin/3d-code`}>
            <button className='rounded-lg bg-gray-100 p-3 py-6 shadow-md shadow-slate-400'>3D Code</button>
          </Link>
        </div>

        {/*  */}
      </AdminGate>
      <URLModalOut></URLModalOut>
    </>
  )
}

//

//

//

//
