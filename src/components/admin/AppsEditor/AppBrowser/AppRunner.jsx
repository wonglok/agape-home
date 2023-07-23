import { useEffect } from 'react'

export function AppRunner({ appID }) {
  useEffect(() => {
    //
    console.log(appID)
  }, [appID])

  return <></>
}
