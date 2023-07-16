import { AdminGate } from '../AdminLayout/AdminGate'
import { CodeCompiler } from '../CodeCompiler/CodeCompiler'

//

export function MyAdmin() {
  return (
    <>
      {/*  */}
      <AdminGate>
        <h2 className='daysfont text-2xl underline'>Welcome to Admin Portal</h2>

        <CodeCompiler></CodeCompiler>
        <div>{/*  */}</div>
      </AdminGate>
    </>
  )
}

//
