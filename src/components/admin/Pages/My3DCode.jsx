import { AdminGate } from '../AdminLayout/AdminGate'
import { PageApps } from '../Apps/PageApps'
import { URLModalOut } from '../Apps/Tunnel'

export function My3DCode() {
  return (
    <>
      <AdminGate>
        <h2 className='daysfont text-2xl'>S.W.A.N. Widgets</h2>
        <div className='mb-3 text-sm text-gray-500'>Serverless Web Aapplication Node</div>
        <PageApps></PageApps>
      </AdminGate>
      <URLModalOut></URLModalOut>
    </>
  )
}

//

//

//
