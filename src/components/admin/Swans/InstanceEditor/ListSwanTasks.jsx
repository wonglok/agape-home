import { useEffect } from 'react'
import { useSwanProject } from '../useSwanProject'
import { UpdateSwanTask } from './UpdateSwanTask'
import { useSwanTask } from '../useSwanTask'

export function ListSwanTasks() {
  let activeInstanceID = useSwanProject((r) => r.activeInstanceID)

  let swanTasks = useSwanTask((r) => r.swanTasks)
  useEffect(() => {
    if (!activeInstanceID) {
      return
    }

    useSwanTask
      .getState()
      .findByInstanceID({ swanInstanceID: activeInstanceID })
      .then((r) => {
        useSwanTask.setState({ swanTasks: r })
      })
  }, [activeInstanceID])

  return (
    <>
      {/*  */}

      {swanTasks.map((data) => {
        return (
          <div key={data._id}>
            <UpdateSwanTask key={data._id + 'swi'} data={data}></UpdateSwanTask>
          </div>
        )
      })}

      {/*  */}
    </>
  )
}

//
//
//
//
