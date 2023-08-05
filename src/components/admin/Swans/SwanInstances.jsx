import { useRouter } from 'next/router'
import { AdminGate } from '../AdminLayout/AdminGate'
import { URLModalOut } from '../Apps/Tunnel'
import { useSwanProject } from './useSwanProject'
import { useEffect } from 'react'

export function SwanInstances() {
  let router = useRouter()
  let query = router.query || {}
  let swanID = query.swanID || ''

  let activeSwan = useSwanProject((r) => r.activeSwan)

  useEffect(() => {
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
        <h2 className='daysfont mb-3 text-2xl underline'>SWAN Project</h2>
        {/*  */}
        {activeSwan?.title}
        {/*  */}
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
