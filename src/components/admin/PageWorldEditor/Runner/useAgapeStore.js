import { create } from 'zustand'
import { Data } from './Data.js'
import { initStoreForPostProc } from 'agape-sdk'

export const useAgapeStore = create((set, get) => {
  let r = {
    result: Data,
  }
  return {
    from: `_${Math.random()}`,
    // cdn
    baseURL: `https://cdn.agape.town`,

    // gameMode: `street`,

    // insepction: 'normal',

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

    syncPostPorc: () => {
      set({ reload: Math.random() })
    },

    reload: 0,

    ready: true,
  }
})

export const getData = () => {
  return Data
}
