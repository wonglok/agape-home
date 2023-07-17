import Link from 'next/link'
import { AdminGate } from '../AdminLayout/AdminGate'
import { PageURL } from '../URLs/PageURL'
import { URLModalOut } from '../URLs/Tunnel'
// import { CodeCompiler } from '../CodeCompiler/CodeCompiler'
// import { TestButton } from '../CodeCompiler/CodeCore'
// import { CodeCoreRunner } from '../CodeCompiler/CodeCoreRunner'

//

export function MyPages() {
  return (
    <>
      {/*  */}
      <AdminGate>
        <h2 className='daysfont mb-3 text-2xl underline'>Pages</h2>
        {/* <TestButton></TestButton> */}
        {/* <CodeCompiler></CodeCompiler> */}
        {/* <CodeCoreRunner></CodeCoreRunner> */}

        {/* <PageURL></PageURL> */}

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

//

//
