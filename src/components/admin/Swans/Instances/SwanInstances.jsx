import { useRouter } from 'next/router'
import { AdminGate } from '../../AdminLayout/AdminGate'
import { URLModalOut } from '../../Apps/Tunnel'
import { useSwanProject } from './../useSwanProject'
import { useEffect } from 'react'
import { CreateSwanInstance } from './CreateSwanInstance'
import { ListSwanInstances } from './ListSwanInstances'

export function SwanInstances() {
  let router = useRouter()
  let query = router.query || {}
  let swanID = query.swanID || ''

  let activeSwan = useSwanProject((r) => r.activeSwan)

  useEffect(() => {
    if (!swanID) {
      return
    }
    useSwanProject.setState({ activeSwanID: swanID })
    useSwanProject
      .getState()
      .findOne({ object: { _id: swanID } })
      .then((r) => {
        useSwanProject.setState({ activeSwan: r })
      })

    return () => {
      useSwanProject.setState({ activeSwan: false })
      useSwanProject.setState({ activeSwanID: false })
    }
  }, [swanID])

  return (
    <>
      {/*  */}
      <AdminGate>
        <div className='flex items-center'>
          <h2 className='daysfont mr-2 text-2xl '>SWAN: {activeSwan?.title}</h2>
        </div>
        <div className='mb-3 text-sm text-gray-500'>Serverless Web Aapplication Node</div>
        <CreateSwanInstance></CreateSwanInstance>
        <ListSwanInstances></ListSwanInstances>
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
