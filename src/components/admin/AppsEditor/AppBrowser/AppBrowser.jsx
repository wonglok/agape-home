import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useCoreFiles } from '../FileBrowser/useCoreFiles'

export function AppBrowser() {
  let router = useRouter()
  let { appID } = router.query

  useEffect(() => {
    if (!appID) {
      return
    }
    let bc = new BroadcastChannel(appID)

    window.addEventListener('savedFile', () => {
      let st = useCoreFiles.getState()
      try {
        if (bc.closed) {
          return
        }
        bc.postMessage({ type: 'run', files: st })
      } catch (e) {
        console.log(e)
      }
    })

    bc.onmessage = (ev) => {
      if (ev.data?.type === 'ready') {
        let st = useCoreFiles.getState()

        try {
          bc.postMessage({ type: 'run', files: st })
        } catch (e) {
          console.log(e)
        }
      }
    }

    return () => {
      //
      bc.closed = true
      bc.onmessage = () => {}
      bc.close()
    }
  }, [appID])
  return (
    <>
      {/*  */}
      <iframe src={`/admin/editor-runner/${appID}`} style={{ width: '100%', height: '100%' }} />
      {/*  */}
    </>
  )
}
