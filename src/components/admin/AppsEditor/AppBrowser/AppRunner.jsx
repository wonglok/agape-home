import { useEffect } from 'react'

export function AppRunner({ appID }) {
  //

  useEffect(() => {
    //

    if (!appID) {
      return
    }
    let bc = new BroadcastChannel(appID)

    bc.onmessage = (ev) => {
      if (ev.data?.type === 'run') {
        //
        console.log(ev.data)
      }
    }

    bc.postMessage({ type: 'ready' })
    return () => {
      bc.onmessage = (ev) => {}
      bc.close()
    }
  }, [appID])

  return <></>
}
