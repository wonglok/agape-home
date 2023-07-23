import Editor from '@monaco-editor/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useCoreFiles } from '../FileBrowser/useCoreFiles'
import { useCodeFiles } from '../../Apps/useCodeFiles'
import copy from 'copy-to-clipboard'

export function CodeEditor() {
  let activeCodeFileID = useCoreFiles((r) => r.activeCodeFileID)
  let appCodeFiles = useCoreFiles((r) => r.appCodeFiles)

  let file = appCodeFiles.find((e) => e._id === activeCodeFileID)

  return <>{file && <CodeEditorInternal file={file}></CodeEditorInternal>}</>
}

function CodeEditorInternal({ file }) {
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

    file.content = value

    setMessage('dirty')
  }

  useEffect(() => {
    let hh = (ev) => {
      if (ev.key === 's' && (ev.metaKey || ev.ctrlKey)) {
        ev.preventDefault()
        setMessage('loading')

        useCodeFiles
          .getState()
          .updateOne({ object: file })
          .then(() => {
            window.dispatchEvent(new CustomEvent('savedFile', { detail: file }))
            setTimeout(() => {
              setMessage('done')
              setTimeout(() => {
                setMessage('')
              }, 1000)
            }, 10)
          })

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
  }, [file])

  let getExt = (file) => {
    let name = 'javascript'

    if (file.fileName.includes('.json')) {
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

  let appPackages = useCoreFiles((r) => r.appPackages)
  let appModules = useCoreFiles((r) => r.appModules)
  let appCodeGroups = useCoreFiles((r) => r.appCodeGroups)
  let appCodeFiles = useCoreFiles((r) => r.appCodeFiles)

  let activePackageID = useCoreFiles((r) => r.activePackageID)
  let activeModuleID = useCoreFiles((r) => r.activeModuleID)
  let activeCodeGroupID = useCoreFiles((r) => r.activeCodeGroupID)
  let activeCodeFileID = useCoreFiles((r) => r.activeCodeFileID)

  let pData = appPackages.find((r) => r._id === activePackageID)
  let mData = appModules.find((r) => r._id === activeModuleID)
  let gData = appCodeGroups.find((r) => r._id === activeCodeGroupID)
  let fData = appCodeFiles.find((r) => r._id === activeCodeFileID)

  return (
    <>
      {/*  */}
      {file && (
        <>
          <div
            className={
              'flex items-center justify-between text-left text-xs text-white px-2 ' +
              ` bg-gradient-to-r from-teal-700 to-teal-400 `
            }
            style={{ height: '30px' }}
          >
            <></>
            <div>{file?.fileName}</div>

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
            path={file._id}
            defaultLanguage={getExt(file) || 'javascript'}
            defaultValue={file.content}
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
                  copy(
                    `import { } from "package:${pData?.packageName}/${mData?.moduleName}/${gData?.groupName}/${fData?.fileName}'`,
                  )
                }}
              >
                <span className='mr-2'>🔗</span>
                {`import { } from "package:${pData?.packageName}/${mData?.moduleName}/${gData?.groupName}/${fData?.fileName}"`}
              </button>
            </div>
          </div>
        </>
      )}
      {/*  */}
    </>
  )
}
