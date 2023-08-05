import { useEffect } from 'react'
import { useSwanProject } from './useSwanProject'
import { UpdateSwan } from './UpdateSwan'

export function ListSwan() {
  let swans = useSwanProject((r) => r.swans)
  useEffect(() => {
    useSwanProject
      .getState()
      .find({})
      .then((r) => {
        useSwanProject.setState({ swans: r })
      })
  }, [])

  return (
    <>
      {/*  */}

      <></>

      {swans.map((data) => {
        return (
          <div key={data._id}>
            <UpdateSwan key={data._id + 'sw'} data={data}></UpdateSwan>
          </div>
        )
      })}

      <></>

      {/*  */}
      {/*  */}
    </>
  )
}
