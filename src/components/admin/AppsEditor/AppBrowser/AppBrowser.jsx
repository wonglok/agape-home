import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useCoreFiles } from '../FileBrowser/useCoreFiles'

export function AppBrowser() {
  let router = useRouter()
  let { appID } = router.query
  let iframeEl = useRef()
  let [src, setSRC] = useState(`/admin/editor-runner/${appID}`)
  useEffect(() => {
    if (!appID) {
      return
    }

    let savedFile = () => {
      let timer = 0
      let bc = new BroadcastChannel(appID)
      bc.onmessage = (ev) => {
        if (ev.data?.type === 'ran') {
          clearTimeout(timer)
          console.log('livepush detected, cancel autoreload')
        }
      }

      let st = useCoreFiles.getState()
      try {
        bc.postMessage({ type: 'run', files: st, snap: Math.ceil(Math.random() * 100000) })

        clearTimeout(timer)
        timer = setTimeout(() => {
          setSRC(`/admin/editor-runner/${appID}?snap=${Math.ceil(Math.random() * 100000)}`)
          console.log('error reload')
          bc.close()
        }, 1000)
      } catch (e) {
        console.log(e)
      }
    }
    window.addEventListener('savedFile', savedFile)

    return () => {
      window.removeEventListener('savedFile', savedFile)
    }
  }, [appID, iframeEl])

  //
  return (
    <>
      {/*  */}
      <iframe ref={iframeEl} src={src} style={{ width: '100%', height: '100%' }} />
      {/*  */}
    </>
  )
}
