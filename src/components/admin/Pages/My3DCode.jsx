import { AdminGate } from '../AdminLayout/AdminGate'
import { PageApps } from '../Apps/PageApps'
import { URLModalOut } from '../Apps/Tunnel'

export function My3DCode() {
  return (
    <>
      <AdminGate>
        <h2 className='daysfont text-2xl'>S.W.A.N. Studio</h2>
        <div className='mb-1 text-sm text-gray-500'>Serverless Web Aapplication Node</div>
        <div className='mb-3 text-xs text-gray-500'>{`Let's develop FullStack 3D Widgets`}</div>
        <PageApps></PageApps>
      </AdminGate>
      <URLModalOut></URLModalOut>
    </>
  )
}

//

//

//
