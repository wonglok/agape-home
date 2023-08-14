import { CommonSwanHTML, RunSwanDev } from '@/components/test/RunSwanDev'
import { PerspectiveCamera, useTexture } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { EquirectangularReflectionMapping, sRGBEncoding } from 'three'
import { useEffect, useMemo } from 'react'
import Lenis from '@studio-freight/lenis'

export default function Multi() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: /* css */ `

html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
  overflow: scroll;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
    `,
        }}
      ></style>

      <div id='canvasdiv' className='absolute left-0 top-0 h-full w-full'>
        {/*  */}
        <Canvas className=''>
          {/*  */}
          <LenisYo></LenisYo>

          {/*  */}
          <group position={[0, 1.5, 0]}>
            {/* Development */}

            <RunSwanDev origin={`http://localhost:8521`} appID={``}></RunSwanDev>
          </group>

          {/*  */}
          <group position={[0, -1.5, 0]}>
            {/* App */}
            <RunSwanDev origin={`http://localhost:8521`} appID={`my-swans/vending-machine`}></RunSwanDev>
          </group>

          <BG></BG>
          <PerspectiveCamera fov={45} makeDefault position={[0, 0, 10]}></PerspectiveCamera>
          {/* <OrbitControls
          makeDefault
          position={[0, 0, 10 + 0.00001]}
          target={[0, 0, 10 - 0.00001]}
          maxDistance={0.00001}
          rotateSpeed={-1}
        ></OrbitControls> */}
          {/* <Environment files={``}></Environment> */}
          {/* <color attach={'background'} args={['#cecece']}></color> */}
        </Canvas>
      </div>

      <div className=' absolute left-0 top-0 h-full w-full overflow-y-scroll  ' id='contentdiv'>
        <div className='h-full w-full ' style={{ height: '100%' }}>
          Page1
        </div>
        <div className='h-full w-full' style={{ height: '100%' }}>
          Page2
        </div>
      </div>

      <CommonSwanHTML></CommonSwanHTML>
    </>
  )
}

function LenisYo() {
  const lenis = useMemo(() => {
    return new Lenis({
      content: document.querySelector('#contentdiv'),
    })
  }, [])

  useEffect(() => {
    return lenis.on('scroll', (e) => {
      window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: e }))
    })
  })

  useFrame((st) => {
    let time = performance.now()
    lenis.raf(time)
  })

  return null
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
