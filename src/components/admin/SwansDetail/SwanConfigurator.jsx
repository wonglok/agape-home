import { useEffect, useRef } from 'react'
import { useSwanProject } from '../Swans/useSwanProject'
import nprogress from 'nprogress'
import { CanvasPreview } from './SwanPreview'
import { FileUploader } from './FileUploader'
// import { Canvas, useThree } from '@react-three/fiber'
// import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei'
// import { EquirectangularReflectionMapping, sRGBEncoding } from 'three'

export function SwanConfigurator({ swanID }) {
  useEffect(() => {
    //
    useSwanProject.setState({ activeSwan: false })

    useSwanProject
      .getState()
      .findOne({ object: { _id: swanID } })
      .then((r) => {
        useSwanProject.setState({ activeSwanID: r._id })
        useSwanProject.setState({ activeSwan: r })
      })
  }, [swanID])

  let activeSwan = useSwanProject((r) => r.activeSwan)

  let tt = useRef(0)
  let update = () => {
    nprogress.start()
    clearTimeout(tt.current)
    tt.current = setTimeout(() => {
      useSwanProject
        .getState()
        .updateOne({ object: activeSwan })
        .then((r) => {
          nprogress.done()
          useSwanProject.setState({ activeSwan: { ...activeSwan } })
        })
    }, 100)
  }

  //
  return (
    <>
      {activeSwan && (
        <>
          {/*  */}
          <div className='flex'>
            <input
              className='bg-gray-200'
              defaultValue={activeSwan.title}
              onChange={(ev) => {
                activeSwan.title = ev.target.value
                update()
              }}
            ></input>
          </div>
          <div className='flex'>
            Development Server URL
            <input
              className='bg-gray-200'
              defaultValue={activeSwan.developmentURL}
              onChange={(ev) => {
                activeSwan.developmentURL = ev.target.value
                update()
              }}
            ></input>
            Production URL
            <input
              className='bg-gray-200'
              defaultValue={activeSwan.productionURL}
              onChange={(ev) => {
                activeSwan.productionURL = ev.target.value || ''
                update()
              }}
            ></input>
          </div>
          {/*  */}
        </>
      )}

      <CanvasPreview mode={'development'} activeSwan={activeSwan}></CanvasPreview>

      <FileUploader></FileUploader>

      {/* <pre className='text-xs'>{JSON.stringify(activeSwan, null, '  ')}</pre> */}
      {/*  */}
    </>
  )
}
