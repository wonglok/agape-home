import { AdminGate } from '../AdminLayout/AdminGate'
import { URLModalOut } from '../Apps/Tunnel'
import { CreateSwan } from './CreateSwan'
import { ListSwan } from './ListSwan'

export function MySwan() {
  return (
    <>
      {/*  */}
      <AdminGate>
        <h2 className='daysfont text-2xl'>S.W.A.N. Projects</h2>
        <div className='mb-3 text-sm text-gray-500'>Serverless Web Aapplication Node</div>
        <CreateSwan></CreateSwan>
        <ListSwan></ListSwan>
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
