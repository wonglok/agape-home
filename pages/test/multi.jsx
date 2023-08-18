import { CommonSwanHTML, RunSwanDev } from '@/components/swandev/RunSwanDev'
import { Environment, PerspectiveCamera, Text, useTexture } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EquirectangularReflectionMapping, sRGBEncoding } from 'three'

export default function Multi() {
  return (
    <>
      <Canvas>
        <group position={[0, 1.5, 0]}>
          {/* Development */}
          <RunSwanDev origin={`http://localhost:8521`} appID={``}></RunSwanDev>
        </group>
        <group position={[0, -1.5, 0]}>
          {/* App */}
          <RunSwanDev origin={`http://localhost:8521`} appID={`my-swans/tj-swan`}></RunSwanDev>
        </group>

        <BG></BG>
        <PerspectiveCamera fov={45} makeDefault position={[0, 0, 15]}></PerspectiveCamera>
        <OrbitControls
          makeDefault
          position={[0, 0, 15 + 0.00001]}
          target={[0, 0, 15 - 0.00001]}
          maxDistance={0.00001}
          rotateSpeed={-1}
        ></OrbitControls>

        {/* <Environment files={``}></Environment> */}
        {/* <color attach={'background'} args={['#cecece']}></color> */}
      </Canvas>
      <CommonSwanHTML></CommonSwanHTML>
    </>
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
