// import { UserEndPoints } from '@/aws/UserEndPoints'
// import { UserEndPoints } from '@/aws/UserEndPoints'
// import { useEffect, useRef } from 'react'
import * as React from 'react'
// import * as ReactDOM from 'react-dom/client'
// import * as R3F from
import * as THREE from 'three'

export const DefaultSetting = {
  onFetch: ({ url, options }) => {
    return fetch(url, options)
  },
  onResolve: ({ id, parentUrl, resolve }) => {
    if (parentUrl.indexOf('blob:') === 0) {
      return resolve(id, '')
    }
    return resolve(id, parentUrl)
  },
}

export const getLoader = async ({ onResolve = () => {}, onFetch = () => {} } = DefaultSetting) => {
  let res = document.body.querySelector('#importmap')

  if (!res) {
    document.body.appendChild(
      Object.assign(document.createElement('script'), {
        id: 'importmap',
        type: 'importmap-shim',
        innerHTML: JSON.stringify({
          imports: {},
        }),
      }),
    )

    // document.body.appendChild(
    //   Object.assign(document.createElement('script'), {
    //     id: 'esms-options',
    //     innerHTML: JSON.stringify({
    //       shimMode: true,
    //     }),
    //   })
    // )
  }

  return new Promise(async (resolve) => {
    window.esmsInitOptions = {
      // Enable Shim Mode
      shimMode: true, // default false
      // Enable newer modules features
      polyfillEnable: ['css-modules', 'json-modules'], // default empty
      // Custom CSP nonce
      nonce: 'n0nce', // default is automatic detection
      // Don't retrigger load events on module scripts
      noLoadEventRetriggers: true, // default false
      // Skip source analysis of certain URLs for full native passthrough
      // skip: /^https:\/\/cdn\.com/, // defaults to null
      // Clean up blob URLs after execution
      revokeBlobURLs: true, // default false
      // Secure mode to not support loading modules without integrity (integrity is always verified though)
      enforceIntegrity: false, // default false
      // Permit overrides to import maps
      mapOverrides: true, // default false

      // -- Hooks --
      // Module load error
      onerror: (e) => {
        /*...*/
      }, // default noop
      // Called when polyfill mode first engages
      onpolyfill: () => {}, // default logs to the console
      // Hook all module resolutions
      resolve: (id, parentUrl, resolve) => {
        return onResolve({ id, parentUrl, resolve })
        // return resolve(id, parentUrl)
      }, // default is spec resolution
      // Hook source fetch function
      fetch: (url, options) => {
        //fetch(url, options)
        return onFetch({ url, options })
      }, // default is native
      // Hook import.meta construction
      meta: (meta, url) => {}, // default is noop
      // Hook top-level imports
      onimport: (url, options, parentUrl) => {
        // console.log('onimport', url, options, parentUrl)
      }, // default is noop
    }

    await import('es-module-shims')

    // let getEndPoint = () => UserEndPoints[process.env.NODE_ENV]
    //
    // let getImportMap = async (myPackages) => {
    //   return fetch(`${getEndPoint()}/import-map`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       packages: myPackages,
    //     }),
    //     mode: 'cors',
    //   }).then((r) => {
    //     if (r.ok) {
    //       return r.json()
    //     } else {
    //       return Promise.reject()
    //     }
    //   })
    // }

    let tt = setInterval(() => {
      if (window.importShim) {
        clearInterval(tt)
        resolve({
          // addNPMs: (myPackages = ['three']) => {
          //   //
          //   return getImportMap(myPackages).then(async (r) => {
          //     await window.importShim.addImportMap(r)

          //     return Promise.all(
          //       myPackages.map((it) => {
          //         return window.importShim(it)
          //       })
          //     ).then((result) => {
          //       //
          //       console.log(result)
          //       //
          //       return result
          //     })
          //   })
          // },
          load: window.importShim,
          addImportMap: window.importShim.addImportMap,
        })
      }
    })
  })
}

export let runInElement = async ({ mountRoot, outputs, onClean }) => {
  window.React = React
  // window.ReactDOM = ReactDOM
  window.THREE = THREE

  window.agapeLoader = window.agapeLoader || {}
  // window.THREE = await import('three')
  // window.agapeLoader.react = () => import('react')
  window.agapeLoader['zustand'] = () => import('zustand')
  window.agapeLoader['agape-sdk'] = () => import('agape-sdk')
  window.agapeLoader['@react-three/fiber'] = () => import('@react-three/fiber')
  window.agapeLoader['@react-three/drei'] = () => import('@react-three/drei')
  window.agapeLoader['@react-three/xr'] = () => import('@react-three/xr')
  window.agapeLoader['@react-three/postprocessing'] = () => import('@react-three/postprocessing')
  window.agapeLoader['three-stdlib'] = () => import('three-stdlib')

  window.loadGeneral = async () => {
    window.Globals = window.Globals || {}
    return await Promise.all(
      Object.keys(window.agapeLoader).map(async (key) => {
        if (!window.Globals[key]) {
          let val = await window.agapeLoader[key]()
          window.Globals[key] = val
          return val
        } else {
          return window.Globals[key]
        }
      }),
    )
  }

  // window.getThree = () => import('three')
  // window.getR3F = () => import('@react-three/fiber')
  // window.getDrei = () => import('@react-three/drei')
  // window.getPost = () => import('@react-three/postprocessing')
  // window.getXR = () => import('@react-three/xr')
  // window.getValtio = () => import('valtio')

  // loaderUtils.addImportMap({
  //   imports: {
  //     [`three`]: '/vendor/three-r149/build/three.module.js',
  //     [`three/examples/`]: '/vendor/three-r149/examples/',
  //   },
  // })

  let loaderUtils = await getLoader()

  // console.log(outputs)

  for (let output of outputs) {
    loaderUtils.addImportMap({
      imports: {
        [`${output.facadeModuleId}`]: URL.createObjectURL(
          new Blob([`${output.code}`], {
            type: `application/javascript`,
          }),
        ),
      },
    })
  }

  // console.log(outputs)

  await window.loadGeneral()
  loaderUtils.load('rollup://localhost/app-loader/entry/main/index.js').then(async (r) => {
    let Compos = r.default
    if (Compos) {
      try {
        mountRoot(<Compos></Compos>)
      } catch (e) {
        console.log(e)
      }
    }

    // if (typeof r?.GUI?.install === 'function') {
    //   r.GUI.install({ mountRoot, onClean, loader: loaderUtils })
    // }
  })
}
