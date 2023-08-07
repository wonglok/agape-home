import { useEffect } from 'react'
import { Data } from './Data'
import { initStoreForPostProc } from 'agape-sdk'

export function RESTLoader({ useStore }) {
  useEffect(() => {
    ///

    let r = {
      result: Data,
    }
    useStore.setState({
      //

      from: `_${Math.random()}`,
      // cdn
      baseURL: `https://cdn.agape.town`,

      gameMode: `street`,

      insepction: 'normal',

      // envURL: `/envMap/ma-galaxy.webp`,
      //!SECTION
      //
      scene: [], // tree
      postProcessingConfig: initStoreForPostProc({
        postProcessingConfig: r.result?.projectMeta?.postProcessingConfig || {},
      }),

      envURL: r.result?.projectMeta?.envURL,
      myAvatarURL: r.result?.projectMeta?.myAvatarURL,
      colliderGLBURL: r.result?.projectMeta?.colliderGLBURL,
      gameMode: r.result?.projectMeta?.gameMode,
      postprocessing: r.result?.projectMeta?.postprocessing,
      insepction: r.result?.projectMeta?.insepction,
      sceneList: r.result?.sceneList,

      nodesList: r.result?.nodesList,
      edgesList: r.result?.edgesList,

      graphFocus: 'root',

      //

      ready: true,
    })

    ///
  }, [useStore])
  return (
    <>
      {/*  */}

      {/*  */}
    </>
  )
}
