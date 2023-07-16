import { AdminGate } from '../AdminLayout/AdminGate'
import { CodeCompiler } from '../CodeCompiler/CodeCompiler'
import { TestButton } from '../CodeCompiler/CodeCore'
import { CodeCoreRunner } from '../CodeCompiler/CodeCoreRunner'

//

export function MyAdmin() {
  return (
    <>
      {/*  */}
      <AdminGate>
        <h2 className='daysfont text-2xl underline'>Welcome to Admin Portal</h2>
        <TestButton></TestButton>
        {/* <CodeCompiler></CodeCompiler> */}
        {/* <CodeCoreRunner></CodeCoreRunner> */}
        <div>{/*  */}</div>
      </AdminGate>
    </>
  )
}

//
