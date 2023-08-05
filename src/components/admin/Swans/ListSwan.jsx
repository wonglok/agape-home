import { useEffect } from 'react'
import { useSwan } from './useSwan'
import { UpdateSwan } from './UpdateSwan'

export function ListSwan() {
  let swans = useSwan((r) => r.swans)
  useEffect(() => {
    useSwan
      .getState()
      .find({})
      .then((r) => {
        useSwan.setState({ swans: r })
      })
  }, [])

  return (
    <>
      {/*  */}

      <></>

      {swans.map((data) => {
        return (
          <div key={data._id}>
            <UpdateSwan data={data}></UpdateSwan>
          </div>
        )
      })}

      <></>

      {/*  */}
      {/*  */}
    </>
  )
}
