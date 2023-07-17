import path from 'path'
import { transform } from 'sucrase'
import { useEffect, useRef, useState } from 'react'
// "rollup": "2.56.3",
import { rollup } from 'rollup/dist/rollup.browser.js'
import { runInElement } from './runInElement'
import { downloadCode } from './downloadCode'

//useEffect

export let buildApp = async (input) => {
  /** @type {appContent} */
  let app = input

  // window.AGAPE_CACHE = window.AGAPE_CACHE || {}

  window.AGAPE_CACHE.three = import('three')
  window.AGAPE_CACHE.react = import('react')
  window.AGAPE_CACHE['@react-three/fiber'] = import('@react-three/fiber')
  window.AGAPE_CACHE['@react-three/drei'] = import('@react-three/drei')
  window.AGAPE_CACHE['@react-three/xr'] = import('@react-three/xr')
  window.AGAPE_CACHE['@react-three/postprocessing'] = import('@react-three/postprocessing')
  window.AGAPE_CACHE['three-stdlib'] = import('three-stdlib')
  // //
  // const { packageName, appPackages } = input

  const rollupLocalhost = `rollup://localhost/`

  // const getFileName = ({ onePackage, moduleName, fileName }) => {
  //   // let oneModule = onePackage.modules.find((e) => e.moduleName === moduleName)
  //   // let file = oneModule.files.find((e) => e.fileName === fileName)
  //   return `${rollupLocalhost}${onePackage.packageName}/${moduleName}/${fileName}`
  // }

  let fileList = []

  for (let onePackage of app.appPackages) {
    for (let mod of onePackage.modules) {
      for (let file of mod.files) {
        fileList.push({
          file: JSON.parse(JSON.stringify(file)),
          rollup: `${rollupLocalhost}${onePackage.packageName}/${mod.moduleName}/${file.fileName}`,
          content: file.content,
        })
      }
    }
  }

  // console.log('fileList', fileList)

  // let firstPackage = appContent.appPackages[0]

  let bundle = rollup({
    input: `${rollupLocalhost}${app.appLoader}/main/index.js`,
    plugins: [
      {
        name: 'rollup-in-browser-example',
        resolveId(importee, importer) {
          if (!importer) {
            // console.log(importee, 'importee')
            return importee
          }

          if (importee.indexOf('package:') === 0) {
            importee = importee.replace('package:', rollupLocalhost)
            return new URL(importee).href
          }

          // if (importee.indexOf('package:') === 0) {
          //   importee = importee.replace('package:', rollupLocalhost)
          //   return new URL(importee).href
          // }
          // if (importee.indexOf('@') === 0) {
          //   // return `${rollupLocalhost}${address}`
          // }
          // if (importee === 'three') {
          //   return `${location.origin}/sdk/three/build/three.module.js`
          // }
          // if (importee.indexOf('three/examples/') === 0) {
          //   return `${location.origin}/sdk/three/examples/${importee.replace('three/examples/', '')}`
          // }

          return new URL(importee, importer).href
        },

        async load(id) {
          // console.log(id)

          // if (id.indexOf('') === 0) {
          //   let myURL = `${id.replace('', '')}`
          //   let file = fileList.find((e) => e.rollup === myURL)
          //   let content = file.content || ''
          //   let tf = transform(content, {
          //     transforms: ['jsx', 'typescript'],
          //     preserveDynamicImport: true,
          //     production: true,
          //     jsxPragma: 'React.createElement',
          //     jsxFragmentPragma: 'React.Fragment',
          //   }).code
          //   return tf
          // }

          if (id.indexOf('http') === 0) {
            return fetch(id)
              .then((r) => r.text())
              .then((t) => {
                return `${t}`
              })
          }

          if (id.indexOf('network:') === 0) {
            let url = id.replace('network:', '').replace(rollupLocalhost, '')

            let info = path.parse(url)

            if (info && info.ext === '.json') {
              return fetch(url)
                .then((r) => r.json())
                .then((t) => {
                  return `export default ${JSON.stringify(t)}`
                })
            } else if (info && info.ext === '.js') {
              return fetch(url)
                .then((r) => r.text())
                .then((t) => {
                  return `${t}`
                })
            } else if (url.indexOf('/') === 0) {
              return fetch(url)
                .then((r) => r.text())
                .then((t) => {
                  return `${t}`
                })
            }
          }

          if (id.indexOf('sdk:') === 0) {
            let url = id.replace('sdk:', '').replace(rollupLocalhost, '')

            let info = path.parse(url)
            console.log(url)

            if (info && info.ext === '.json') {
              return fetch(url)
                .then((r) => r.json())
                .then((t) => {
                  return `export default ${JSON.stringify(t)}`
                })
            } else if (info && info.ext === '.js') {
              return fetch(url)
                .then((r) => r.text())
                .then((t) => {
                  return `${t}`
                })
            } else if (url.indexOf('/') === 0) {
              return fetch(url)
                .then((r) => r.text())
                .then((t) => {
                  return `${t}`
                })
            } else {
              return fetch(`/sdk/${url}`)
                .then((r) => r.text())
                .then((t) => {
                  return `${t}`
                })
            }
          }

          if (id.indexOf('package:') === 0) {
            id = id.replace('package:', `${rollupLocalhost}`)
          }

          let file = fileList.find((e) => e.rollup === id)

          if (!file) {
            return `console.log('file is not found', ${JSON.stringify(id)})`
          }

          if (path.parse(file.rollup)?.ext === '.json') {
            return `export default ${file.content}`
          }

          if (file?.content) {
            // return await compile({ input: file.content || '' })

            let content = file.content || ''
            let tf = transform(content, {
              transforms: ['jsx'],
              // preserveDynamicImport: true,
              production: true,
              jsxPragma: 'React.createElement',
              jsxFragmentPragma: 'React.Fragment',
            }).code

            // console.log(tf)
            return tf
          }

          return `console.log('not-found',${JSON.stringify(id)})`
        },
      },
    ],
  })

  let bdn = await bundle
  let parcel = await bdn.generate({
    output: { format: 'esm', dir: './dist' },
  })

  let rawOutputs = parcel.output

  let outputs = rawOutputs.map((e) => {
    return {
      fileName: e.fileName,
      code: e.code,
    }
  })

  // console.log(outputs, 'outputs')

  return outputs
}

export let RawModules = [
  {
    moduleName: 'main',
    files: [
      {
        fileName: `index.js`,
        content: /* js */ `
            import b from './b.js';
            import { Vector2 } from 'three';

            console.log(new Vector2(1,1))

            import('./codesplit.js').then((r) => {
              console.log(r.default);
            })

            import('network:/manifest.json').then((v) => {
              console.log(v.default)
            })

            import('package:lib-webgl/main/share.js').then((v) => {
              console.log(v.default)
            })

            function YoTeachApp () {
              return <div>{Math.random()}</div>
            }

            // export const GUI = {
            //   install: ({ mountRoot }) => {
            //     mountRoot(<YoTeachApp></YoTeachApp>)
            //   }
            // }

            console.log('GUI')

            import('../engine-v001/index.js').then((r)=>{
              console.log(r.default)
            })
            import('./json.json').then((r)=>{
              console.log(r.default)
            })

            export default function Page() {
              return <>
                <YoTeachApp></YoTeachApp>
              </>
            };
        `,
      },
      {
        fileName: `b.js`,
        content: /* js */ `
            export default {
              b:'bbbbbb'
            }
          `,
      },
      {
        fileName: `share.js`,
        content: /* js */ `
          export default 'sharing is caring'
        `,
      },
      {
        fileName: `json.json`,
        content: JSON.stringify({ yo: 1234 }),
      },
      {
        fileName: `codesplit.js`,
        content: /* js */ `
            export default {
              yaya:'codesplit'
            }
          `,
      },
    ],
  },
  {
    moduleName: 'engine-v001',
    files: [
      {
        fileName: `index.js`,
        content: /* js */ `
          import b from './b.js';

          import('./vanilla.js').then((r) => {
            console.log(r.default)
          })

          export const GUI = {
            fala: 1234
          }

          console.log('GUI', GUI)

          export default {
            mod: 'engine-v001',
            a:b
          };
        `,
      },
      {
        fileName: `b.js`,
        content: /* js */ `
          export default {
            b:'bbbbbb'
          }
        `,
      },
      {
        fileName: `vanilla.js`,
        content: /* js */ `
          export default {
            yaya:'fafafa'
          }
        `,
      },
    ],
  },
]

export let appContent = {
  appLoader: 'app-loader',
  appPackages: [
    { packageName: 'app-loader', modules: RawModules },
    // { packageName: 'page-about', modules: RawModules },
    { packageName: 'lib-webgl', modules: RawModules },
  ],
}

export function TestButton() {
  let [compos, mountRoot] = useState(null)
  let run = () => {
    /*
      downloadCode(outputs).then((codes) => {
        console.log(codes)
      })
    */

    buildApp(appContent).then((outputs) => {
      runInElement({
        mountRoot: (v) => {
          mountRoot(v)
        },
        outputs,
        onClean: () => {
          //
        },
      })
    })
  }

  useEffect(() => {
    //
    console.log('three')
    //
  }, [])
  return (
    <>
      <button onClick={run}>Test Run</button>
      {compos}
    </>
  )
}
