import { AdminGate } from '../AdminLayout/AdminGate'
import { URLModalOut } from '../Apps/Tunnel'
import { ListSwan } from './ListSwan'

export function MySwan() {
  return (
    <>
      {/*  */}
      <AdminGate>
        <h2 className='daysfont mb-3 text-2xl underline'>SWAN - Serverless Web Aapplication Node</h2>
        {/*  */}

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
