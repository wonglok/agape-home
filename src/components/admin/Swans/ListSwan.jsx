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

            {/* <button
              className='bg-gray-200 p-2'
              onClick={async () => {
                if (window.prompt('Are you sure to remove "' + data.title + '"?', data.title) === data.title) {
                  useSwan.getState().deleteOne({ object: data })
                  useSwan.setState((st) => {
                    return { ...st, swans: st.swans.filter((r) => r._id !== data._id) }
                  })
                }
              }}
            >
              Remove
            </button> */}
          </div>
        )
      })}

      <></>

      {/*  */}
      {/*  */}
    </>
  )
}
