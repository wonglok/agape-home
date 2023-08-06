import { useEffect, useState } from 'react'
import { buildApp } from '../../CodeCompiler/CodeCore'
import { runInElement } from '../../CodeCompiler/runInElement'
// import { usePackages } from '../../Apps/usePackages'
// import { useModules } from '../../Apps/useModules'
// import { useCodeGroups } from '../../Apps/useCodeGroups'
// import { useCodeFiles } from '../../Apps/useCodeFiles'
import { useSlug } from '../../URLs/useSlug'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'

export function AppRunner({ appID }) {
  //

  useEffect(() => {
    if (!appID) {
      return
    }
    let load = async () => {
      let codeArgs = await useSlug.getState().findCode3D({ appID: appID })

      if (codeArgs) {
        // console.log(codeArgs)
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

  let [root, mountRoot] = useState(null)

  let run = (args, fnc = () => {}) => {
    return (
      buildApp(args)
        //
        .then((outputs) => {
          runInElement({
            // mountSharedContent: (v) => {
            //   mountShared(v)
            // },
            // mountCustomHTML: (v) => {
            //   mountCustomHTML(v)
            // },
            // mountRoot: (v) => {
            //   mountRoot(v)
            //   fnc()
            // },
            outputs: outputs,
            onDone: async (mExport) => {
              let DeveloperPreview = mExport.DeveloperPreview
              let SmartObject = mExport.SmartObject
              let OverlayHTML = mExport.OverlayHTML

              mountRoot(
                <DeveloperPreview
                  smartObject={<SmartObject></SmartObject>}
                  overlayHTML={<OverlayHTML></OverlayHTML>}
                ></DeveloperPreview>,
              )

              // let Compos = r.default
              // if (Compos) {
              //   try {
              //     mountRoot(<Compos></Compos>)
              //   } catch (e) {
              //     console.log(e)
              //   }
              // }
              // let getHTML = r.getHTML
              // if (getHTML) {
              //   mountCustomHTML(getHTML())
              // }
              // mountSharedContent(<r.SharedContent></r.SharedContent>)
              // if (typeof r?.GUI?.install === 'function') {
              //   r.GUI.install({ mountRoot, onClean, loader: loaderUtils })
              // }
            },
            onClean: () => {
              //
            },
          })
        })
    )
  }

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
