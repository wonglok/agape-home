import { useRouter } from 'next/router'
import { AdminGate } from '../../AdminLayout/AdminGate'
import { URLModalOut } from '../../Apps/Tunnel'
import { useSwanProject } from './../useSwanProject'
import { useEffect } from 'react'
import { ListSwanTasks } from './ListSwanTasks'
import { CreateSwanTask } from './CreateSwanTask'
import { useSwanTask } from '../useSwanTask'
import { useSwanInstance } from '../useSwanInstance'

export function InstanceEditor() {
  let router = useRouter()
  let query = router.query || {}
  let swanID = query.swanID || ''
  let instanceID = query.instanceID || ''

  let activeInstance = useSwanProject((r) => r.activeInstance)

  useEffect(() => {
    useSwanProject.setState({ activeSwanID: swanID })

    if (!instanceID) {
      return
    }

    useSwanInstance
      .getState()
      .findOne({ object: { _id: instanceID } })
      .then((r) => {
        useSwanProject.setState({ activeInstance: r })
        useSwanProject.setState({ activeInstanceID: r?._id })
      })

    return () => {
      useSwanProject.setState({ activeSwanID: false })
      useSwanProject.setState({ activeInstance: false })
      useSwanProject.setState({ activeInstanceID: false })
    }
  }, [instanceID, swanID])

  return (
    <>
      {/*  */}
      <AdminGate>
        <div className='flex items-center'>
          <h2 className='daysfont mr-2 text-2xl '>SWAN Instance: {activeInstance?.title}</h2>
        </div>
        <div className='mb-3 text-sm text-gray-500'>Serverless Web Aapplication Node</div>
        <CreateSwanTask></CreateSwanTask>
        <ListSwanTasks></ListSwanTasks>
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
