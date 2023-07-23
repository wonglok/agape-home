import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useCoreFiles } from '../FileBrowser/useCoreFiles'

export function AppBrowser() {
  let router = useRouter()
  let { appID } = router.query
  let iframeEl = useRef()
  useEffect(() => {
    if (!appID) {
      return
    }

    let bc = new BroadcastChannel(appID)

    let timer = 0
    window.addEventListener('savedFile', () => {
      let st = useCoreFiles.getState()
      try {
        if (bc.closed) {
          return
        }

        timer = setTimeout(() => {
          if (iframeEl.current) {
            iframeEl.current.src = `/admin/editor-runner/${appID}`
            console.log('reload all')
          }
        }, 3000)

        bc.postMessage({ type: 'run', files: st, snap: Math.ceil(Math.random() * 100000) })
      } catch (e) {
        console.log(e)
      }
    })

    bc.addEventListener('message', (ev) => {
      if (ev?.data?.type === 'doneReload') {
        clearTimeout(timer)
      }
    })

    return () => {
      bc.closed = true
      bc.onmessage = () => {}
      bc.close()
    }
  }, [appID, iframeEl])
  return (
    <>
      {/*  */}
      <iframe ref={iframeEl} src={`/admin/editor-runner/${appID}`} style={{ width: '100%', height: '100%' }} />
      {/*  */}
    </>
  )
}
