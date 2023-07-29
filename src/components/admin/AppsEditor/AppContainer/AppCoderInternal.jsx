import Editor from '@monaco-editor/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

import { useContainer } from './useContainer'

export function AppCoderInternal() {
  return (
    <>
      <CodeEditorInternal></CodeEditorInternal>
    </>
  )
}

function CodeEditorInternal() {
  let activeNode = useContainer((r) => r.activeNode)
  let activeNodeName = useContainer((r) => r.activeNodeName)
  let activeNodePath = useContainer((r) => r.activeNodePath)
  let activeNodeType = useContainer((r) => r.activeNodeType)

  function handleEditorValidation(markers) {
    markers.forEach((marker) => {
      console.log('onValidate:', marker.message)
    })
  }

  const editorRef = useRef(null)

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
    // console.log(monaco)
  }

  // function showValue() {
  //   console.log(editorRef.current.getValue())
  // }

  let [msg, setMessage] = useState('')

  function handleEditorChange(value, event) {
    // console.log('here is the current model value:', value, event)

    activeNode.file.contents = value

    setMessage('dirty')
  }

  useEffect(() => {
    let hh = (ev) => {
      if (ev.key === 's' && (ev.metaKey || ev.ctrlKey)) {
        ev.preventDefault()
        setMessage('loading')
        window.dispatchEvent(
          new CustomEvent('savedFile', {
            detail: {
              //
              activeNode,
              activeNodeName,
              activeNodePath,
              activeNodeType,
            },
          }),
        )
        setTimeout(() => {
          setMessage('done')
          setTimeout(() => {
            setMessage('')
          }, 1000)
        }, 10)

        // useCodeFiles
        //   .getState()
        //   .updateOne({ object: file })
        //   .then(() => {
        //     window.dispatchEvent(new CustomEvent('savedFile', { detail: file }))
        //     setTimeout(() => {
        //       setMessage('done')
        //       setTimeout(() => {
        //         setMessage('')
        //       }, 1000)
        //     }, 10)
        //   })

        // AppDev.saveCodeFile({ object: file }).then(() => {
        //   setMessage('done')
        //   setTimeout(() => {
        //     setMessage('')
        //   }, 1000)
        // })
      }
    }

    window.addEventListener('keydown', hh)

    return () => {
      window.removeEventListener('keydown', hh)
    }
  }, [activeNode])

  let getExt = (fileName) => {
    let name = 'javascript'

    if (fileName.includes('.json')) {
      name = 'json'
    }

    return name
  }

  // let myPackage = AppDev.draft.appPackages.find((e) => e.oid === file?.packageOID)
  // let moduleName = '' + Math.random()
  // if (myPackage) {
  //   let mod = myPackage.modules.find((e) => e.oid === file.moduleOID)
  //   if (mod) {
  //     moduleName = mod.moduleName
  //   }
  // }
  //

  //

  return (
    <>
      {/*  */}
      {activeNode && activeNodeType === 'file' && typeof activeNode?.file?.contents === 'string' && (
        <>
          <div
            className={
              'flex items-center justify-between text-left text-xs text-white px-2 ' +
              ` bg-gradient-to-r from-teal-700 to-teal-400 `
            }
            style={{ height: '30px' }}
          >
            <></>
            <div>{activeNodeName}</div>

            <div className=' w-32 text-end'>
              {msg === '' && <></>}
              {msg === 'dirty' && ` 💾 Needs to save...`}
              {msg === 'loading' && ` 🌩️ Saving...`}
              {msg === 'done' && ` 👌🏻 Done...`}
            </div>
          </div>
          <Editor
            height='calc(100% - 30px - 30px)'
            theme='vs-dark'
            path={activeNodePath}
            defaultLanguage={getExt(activeNodeName) || 'javascript'}
            defaultValue={activeNode?.file?.contents}
            onMount={handleEditorDidMount}
            onChange={handleEditorChange}
            onValidate={handleEditorValidation}
          ></Editor>
          <div>
            <div
              className={
                'flex items-center justify-between text-left text-xs text-white px-2 ' +
                ` bg-gradient-to-r from-teal-700 to-teal-400 `
              }
              style={{ height: '30px' }}
            >
              <button
                onClick={() => {
                  //
                  // copy(
                  //   `import { } from "package:${pData?.packageName}/${mData?.moduleName}/${gData?.groupName}/${fData?.fileName}'`,
                  // )
                }}
              >
                <span className='mr-2'>🔗</span>
                {/* {`import { } from "package:${pData?.packageName}/${mData?.moduleName}/${gData?.groupName}/${fData?.fileName}"`} */}
              </button>
            </div>
          </div>
        </>
      )}
      {/*  */}
    </>
  )
}
