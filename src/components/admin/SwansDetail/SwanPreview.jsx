import { useEffect, useRef } from 'react'
import { useSwanProject } from '../Swans/useSwanProject'
import nprogress from 'nprogress'
import { Canvas, useThree } from '@react-three/fiber'
import { CommonSwanHTML, RunSwanDev } from '@/components/test/RunSwanDev'
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei'
import { EquirectangularReflectionMapping, sRGBEncoding } from 'three'

export function CanvasPreview({ activeSwan }) {
  return (
    <div className='relative h-96 w-96'>
      Development Preview for URL:
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
