import { downloadCode } from '@/components/admin/CodeCompiler/downloadCode'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Page({}) {
  //
  let router = useRouter()
  //
  let query = router.query || {}

  let { packageInfo } = query

  let [packageName, packageVesion] = packageInfo || []

  //

  useEffect(() => {
    if (!packageName) {
      return
    }
    if (!packageVesion) {
      return
    }

    let bc = new BroadcastChannel(`${packageName}/${packageVesion}`)
    downloadCode({
      name: packageName,
      version: packageVesion,
      onProgress: (value) => {
        //
        bc.postMessage({ type: 'progress', progress: value })
      },
    }).then((res) => {
      bc.postMessage({ type: 'done', name: packageName, version: packageVesion, data: res })
      bc.close()
    })

    return () => {}
  }, [packageName, packageVesion])
  return (
    <>
      {/*  */}

      {/*  */}

      {/*  */}
    </>
  )
}
