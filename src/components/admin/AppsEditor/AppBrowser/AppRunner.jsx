import { Component, useEffect, useState } from 'react'
import { appContent, buildApp } from '../../CodeCompiler/CodeCore'
import { runInElement } from '../../CodeCompiler/runInElement'
// import { usePackages } from '../../Apps/usePackages'
// import { useModules } from '../../Apps/useModules'
// import { useCodeGroups } from '../../Apps/useCodeGroups'
// import { useCodeFiles } from '../../Apps/useCodeFiles'
import { useSlug } from '../../URLs/useSlug'
import { Canvas } from '@react-three/fiber'

export function AppRunner({ appID }) {
  //

  useEffect(() => {
    if (!appID) {
      return
    }
    let load = async () => {
      let codeArgs = await useSlug.getState().findCode3D({ appID: appID })

      if (codeArgs) {
        console.log(codeArgs)
        run(codeArgs)
      }

      // let appPackages = await usePackages.getState().findByAppID({ appLoaderID: appID })
      // let appModules = await useModules.getState().findByAppID({ appLoaderID: appID })
      // let appCodeGroups = await useCodeGroups.getState().findByAppID({ appLoaderID: appID })
      // let appCodeFiles = await useCodeFiles.getState().findByAppID({ appLoaderID: appID })

      // let args = {
      //   appLoader: 'app-loader',
      //   data: {
      //     appPackages: appPackages,
      //     appModules: appModules,
      //     appCodeGroups: appCodeGroups,
      //     appCodeFiles: appCodeFiles,
      //   },
      // }
      // run(args)
    }

    load()
  }, [appID])

  useEffect(() => {
    //

    if (!appID) {
      return
    }

    let bc = new BroadcastChannel(appID)

    bc.onmessage = (ev) => {
      if (ev.data?.type === 'run') {
        let args = {
          appLoader: 'app-loader',
          data: ev.data.files,
        }

        run(args, () => {
          bc.postMessage({ type: 'ran' })
        })
      }
    }

    return () => {
      bc.onmessage = (ev) => {}
      bc.close()
    }
  }, [appID])

  let [compos, mountRoot] = useState(null)
  let [cHTML, mountCustomHTML] = useState(null)

  let run = (args, fnc = () => {}) => {
    return buildApp(args).then((outputs) => {
      runInElement({
        mountCustomHTML: (v) => {
          mountCustomHTML(v)
        },
        mountRoot: (v) => {
          mountRoot(v)
          fnc()
        },
        mountRoot: (v) => {
          mountRoot(v)
          fnc()
        },
        outputs: outputs,
        onClean: () => {
          //
        },
      })
    })
  }

  return (
    <>
      <Canvas>{compos}</Canvas>
      {cHTML}

      {/* <ErrorBoundary>{compos}</ErrorBoundary> */}
    </>
  )
}
