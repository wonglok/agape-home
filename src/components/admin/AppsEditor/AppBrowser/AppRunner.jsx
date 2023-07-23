import { useEffect, useState } from 'react'
import { appContent, buildApp } from '../../CodeCompiler/CodeCore'
import { runInElement } from '../../CodeCompiler/runInElement'

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
        console.log(ev.data.files)

        let args = {
          appLoader: 'app-loader',
          data: ev.data.files,
        }

        run(args)
      }
    }

    bc.postMessage({ type: 'ready' })

    return () => {
      bc.onmessage = (ev) => {}
      bc.close()
    }
  }, [appID])

  let [compos, mountRoot] = useState(null)

  let run = (args) => {
    buildApp(args).then((outputs) => {
      runInElement({
        mountRoot: (v) => {
          mountRoot(v)
        },
        outputs: outputs,
        onClean: () => {
          //
        },
      })
    })
  }

  return <>{compos}</>
}
