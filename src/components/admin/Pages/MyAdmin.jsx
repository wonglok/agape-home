import { AdminGate } from '../AdminLayout/AdminGate'
export function MyAdmin() {
  return (
    <>
      {/*  */}
      <AdminGate>
        <h2 className='daysfont text-2xl underline'>Welcome to Admin Portal</h2>
      </AdminGate>
    </>
  )
}
