import { useEffect } from 'react'
import { useSwanProject } from '../useSwanProject'
import { useSwanInstance } from '../useSwanInstance'
import { UpdateSwanInstance } from './UpdateSwanInstance'

export function ListSwanInstances() {
  let activeSwanID = useSwanProject((r) => r.activeSwanID)

  let swanInstances = useSwanInstance((r) => r.swanInstances)
  useEffect(() => {
    if (!activeSwanID) {
      return
    }

    useSwanInstance
      .getState()
      .findBySwanID({ swanID: activeSwanID })
      .then((r) => {
        useSwanInstance.setState({ swanInstances: r })
      })
  }, [activeSwanID])

  return (
    <>
      {/*  */}

      <></>

      {swanInstances.map((data) => {
        return (
          <div key={data._id}>
            <UpdateSwanInstance key={data._id + 'swi'} data={data}></UpdateSwanInstance>
          </div>
        )
      })}

      <></>

      {/*  */}
      {/*  */}
    </>
  )
}
