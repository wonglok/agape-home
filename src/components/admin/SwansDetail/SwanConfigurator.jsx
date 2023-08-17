import { useEffect, useRef } from 'react'
import { useSwanProject } from '../Swans/useSwanProject'
import nprogress from 'nprogress'
import { Canvas, useThree } from '@react-three/fiber'
import { CommonSwanHTML, RunSwanDev } from '@/components/test/RunSwanDev'
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei'
import { EquirectangularReflectionMapping, sRGBEncoding } from 'three'

export function SwanConfigurator({ swanID }) {
  useEffect(() => {
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
            <input
              className='bg-gray-200'
              defaultValue={activeSwan.developmentURL}
              onChange={(ev) => {
                activeSwan.developmentURL = ev.target.value
                update()
              }}
            ></input>
            <input
              className='bg-gray-200'
              defaultValue={activeSwan.developmentSlug}
              onChange={(ev) => {
                activeSwan.developmentSlug = ev.target.value || ''
                update()
              }}
            ></input>
          </div>
          {/*  */}
        </>
      )}

      <CanvasPreview activeSwan={activeSwan}></CanvasPreview>

      {/* <pre className='text-xs'>{JSON.stringify(activeSwan, null, '  ')}</pre> */}
      {/*  */}
    </>
  )
}

function CanvasPreview({ activeSwan }) {
  return (
    <div className='relative h-96 w-96'>
      Development Preview
      {activeSwan.developmentURL}/{activeSwan.developmentSlug}
      {/*  */}
      <Canvas>
        <group position={[0, 0, 0]}>
          {/* Development */}
          <RunSwanDev origin={activeSwan.developmentURL} appID={activeSwan.slug}></RunSwanDev>
        </group>

        <BG></BG>
        <PerspectiveCamera fov={45} makeDefault position={[0, 0, 15]}></PerspectiveCamera>
        <OrbitControls makeDefault position={[0, 0, 15]} target={[0, 0, 0]}></OrbitControls>

        {/* <Environment files={``}></Environment> */}
        {/* <color attach={'background'} args={['#cecece']}></color> */}
      </Canvas>
      <CommonSwanHTML></CommonSwanHTML>
    </div>
  )
}

function BG() {
  let tex = useTexture(`/hdr/kiara_interior_8k.jpg`)
  let scene = useThree((r) => r.scene)
  tex.mapping = EquirectangularReflectionMapping
  tex.encoding = sRGBEncoding
  scene.background = tex
  scene.environment = tex
  return null
}
