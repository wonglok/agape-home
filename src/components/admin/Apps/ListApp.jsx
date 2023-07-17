import { useEffect } from 'react'
import { useApps } from './useApps'
import { UpdateApps } from './UpdateApps'

export function ListApp() {
  let apps = useApps((r) => r.apps)

  useEffect(() => {
    useApps
      .getState()
      .find({})
      .then((data) => {
        useApps.setState({ apps: data })
      })
  }, [])
  return (
    <>
      {/*  */}

      {apps.map((s, si) => {
        return (
          <div key={s.slug + si}>
            <UpdateApps data={s}>{JSON.stringify(s.slug)}</UpdateApps>

            {/*  */}
          </div>
        )
      })}

      {/*  */}
    </>
  )
}
