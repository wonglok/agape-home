import { useEffect } from 'react'
import { useSwanGroup } from './useSwanGroup'
import { UpdateSwan } from './UpdateSwan'

export function ListSwan() {
  let swans = useSwanGroup((r) => r.swans)
  useEffect(() => {
    useSwanGroup
      .getState()
      .find({})
      .then((r) => {
        useSwanGroup.setState({ swans: r })
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
