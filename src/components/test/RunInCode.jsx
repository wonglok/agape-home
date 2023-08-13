import * as THREE from 'three'
import * as Zustand from 'zustand'
// import * as R3F from
import * as ReactThreeFiber from '@react-three/fiber'
import * as ReactThreeDrei from '@react-three/drei'
import * as ReactThreePostProc from '@react-three/postprocessing'
import * as ReactThreeXR from '@react-three/xr'
import * as THREESTDLIB from 'three-stdlib'

import { useEffect } from 'react'
import * as React from 'react'
import { io } from 'socket.io-client'
import tunnel from 'tunnel-rat'

let t = tunnel()
export function CommonSwanHTML() {
  return <t.Out></t.Out>
}

export function RunSwan({ appID }) {
  let [insertCTX, setInsertCTX] = React.useState(null)
  let [insert3D, setInsert3D] = React.useState(null)
  let [insertHTML, setInsertHTML] = React.useState(null)
  let [socket, setSocket] = React.useState(null)
  useEffect(() => {
    window['React'] = React

    window.Globals = window.Globals || {}
    window.Globals['react'] = React
    window.Globals['three'] = THREE
    window.Globals['zustand'] = Zustand
    // window.Globals['agape-sdk'] = AgapeSDK
    window.Globals['@react-three/fiber'] = ReactThreeFiber
    window.Globals['@react-three/drei'] = ReactThreeDrei
    window.Globals['@react-three/xr'] = ReactThreeXR
    window.Globals['@react-three/postprocessing'] = ReactThreePostProc
    window.Globals['three-stdlib'] = THREESTDLIB

    let run = async () => {
      let loaderUtils = await getLoader()

      let socket = io(`http://localhost:8521/`, {})

      setSocket(socket)

      let tt = 0
      socket.on('reload', (ev) => {
        //
        // console.log(ev)
        //

        clearInterval(tt)
        tt = setTimeout(() => {
          ///

          let baseURL = `http://localhost:8521`

          loaderUtils
            .load(
              `${baseURL}/main.module.js?hash=${encodeURIComponent(Math.random())}&appID=${encodeURIComponent(appID)}`,
            )
            .then((r) => {
              console.log(r)

              setInsertCTX(
                <r.SwanLake
                  baseURL={baseURL}
                  onReady={() => {
                    setInsert3D(<r.SmartObject></r.SmartObject>)
                    setInsertHTML(<r.HTMLOverlay></r.HTMLOverlay>)
                  }}
                ></r.SwanLake>,
              )
            })
        }, 500)
      })

      socket.emit('request')
    }

    //
    run()
    //
  }, [])
  return (
    <>
      {insertCTX}
      <t.In>{insertHTML}</t.In>
      {insert3D}
    </>
  )
}

// mode = page / app
export function RunInCode({ mode = 'page' }) {
  let [insert, setInsert] = React.useState(null)
  let [socket, setSocket] = React.useState(null)
  useEffect(() => {
    window.Globals = window.Globals || {}
    window['React'] = React
    window.Globals['react'] = React
    window.Globals['three'] = THREE
    window.Globals['zustand'] = Zustand
    // window.Globals['agape-sdk'] = AgapeSDK
    window.Globals['@react-three/fiber'] = ReactThreeFiber
    window.Globals['@react-three/drei'] = ReactThreeDrei
    window.Globals['@react-three/xr'] = ReactThreeXR
    window.Globals['@react-three/postprocessing'] = ReactThreePostProc
    window.Globals['three-stdlib'] = THREESTDLIB

    let run = async () => {
      let loaderUtils = await getLoader()

      let runCode = () => {
        let baseURL = `http://localhost:8521`

        loaderUtils.load(`${baseURL}/main.module.js?hash=${Math.random()}`).then((r) => {
          // console.log(r)

          if (mode === 'page') {
            setInsert(
              <r.SwanLake
                preloader={
                  <>
                    <ReactThreeDrei.Text></ReactThreeDrei.Text>
                  </>
                }
                baseURL={baseURL}
              >
                <r.Preview
                  smartObject={<r.SmartObject></r.SmartObject>}
                  htmlOverlay={<r.HTMLOverlay></r.HTMLOverlay>}
                ></r.Preview>
              </r.SwanLake>,
            )
          } else {
            setInsert(
              <r.SwanLake
                preloader={
                  <>
                    <ReactThreeDrei.Text></ReactThreeDrei.Text>
                  </>
                }
                baseURL={baseURL}
              >
                <r.Preview
                  smartObject={<r.SmartObject></r.SmartObject>}
                  htmlOverlay={<r.HTMLOverlay></r.HTMLOverlay>}
                ></r.Preview>
              </r.SwanLake>,
            )
          }
        })
      }

      runCode()

      let socket = io(`http://localhost:8521/`, {})

      setSocket(socket)

      let tt = 0
      socket.on('reload', (ev) => {
        //
        console.log(ev)
        //

        clearInterval(tt)
        tt = setTimeout(() => {
          ///
          runCode()
        }, 500)
      })

      socket.emit('request')
    }

    //
    run()
    //
  }, [])
  return (
    <>
      <button
        onClick={() => {
          //
          socket.emit('request')
        }}
      >
        LiveLink
      </button>
      {insert}
    </>
  )
}

export const DefaultSetting = {
  onFetch: ({ url, options }) => {
    return fetch(url, options).catch((r) => {
      return `console.log('error')`
    })
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

    let tt = setInterval(() => {
      if (window.importShim) {
        clearInterval(tt)
        resolve({
          load: window.importShim,
          addImportMap: window.importShim.addImportMap,
        })
      }
    })
  })
}
