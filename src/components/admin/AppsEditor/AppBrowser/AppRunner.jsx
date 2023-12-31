import { useEffect, useState } from 'react'
import { buildApp } from '../../CodeCompiler/CodeCore'
import { runInElement } from '../../CodeCompiler/runInElement'
// import { usePackages } from '../../Apps/usePackages'
// import { useModules } from '../../Apps/useModules'
// import { useCodeGroups } from '../../Apps/useCodeGroups'
// import { useCodeFiles } from '../../Apps/useCodeFiles'
import { useSlug } from '../../URLs/useSlug'
// import { Canvas } from '@react-three/fiber'
import Head from 'next/head'

export function AppRunner({ appID, mode = 'development', mountHTML = () => {} }) {
  //

  let [root, mountRoot] = useState(null)

  let load = async ({ appID }) => {
    let codeArgs = await useSlug.getState().findCode3D({ appID: appID })

    if (codeArgs) {
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

  let run = (args, ran = () => {}) => {
    return buildApp(args).then((outputs) => {
      runInElement({
        appID,
        outputs: outputs,
        onDone: async (mExport) => {
          if (mode === 'development') {
            let DeveloperPreview = mExport.DeveloperPreview || (() => null)
            let SmartObject = mExport.SmartObject || (() => null)
            let OverlayHTML = mExport.OverlayHTML || (() => null)

            mountRoot(
              <DeveloperPreview
                appID={appID}
                smartObject={<SmartObject appID={appID}></SmartObject>}
                overlayHTML={<OverlayHTML appID={appID}></OverlayHTML>}
              ></DeveloperPreview>,
            )
          }

          if (mode === 'smartobject') {
            // let DeveloperPreview = mExport.DeveloperPreview
            let SmartObject = mExport.SmartObject || (() => null)
            let OverlayHTML = mExport.OverlayHTML || (() => null)

            mountRoot(<SmartObject appID={appID}></SmartObject>)
            mountHTML(<OverlayHTML appID={appID}></OverlayHTML>)
          }

          ran()
        },
        onClean: () => {
          //
        },
      })
    })
  }

  useEffect(() => {
    if (!appID) {
      return
    }

    load({ appID })
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

  return (
    <>
      <Head>
        <link href='/css/tailwind2.2.19.css' rel='stylesheet' />
      </Head>
      {root}
      {/* <ErrorBoundary>{compos}</ErrorBoundary> */}
    </>
  )
}
