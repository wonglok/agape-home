import { AdminGate } from '../AdminLayout/AdminGate'
import { PageApps } from '../Apps/PageApps'
import { URLModalOut } from '../Apps/Tunnel'

export function MyDeveloperAdmin() {
  return (
    <>
      <AdminGate>
        <h2 className='daysfont text-2xl'>Developer Studio</h2>
        <div className='mb-3 text-xs text-gray-500'>{`Let's build something!`}</div>
      </AdminGate>
      <URLModalOut></URLModalOut>
    </>
  )
}

//

//

//
