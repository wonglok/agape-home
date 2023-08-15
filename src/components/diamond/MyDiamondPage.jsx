import { Canvas, createPortal, useThree } from '@react-three/fiber'
import {
  CubeCamera,
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  useGLTF,
  useTexture,
} from '@react-three/drei'
import { Suspense } from 'react'
import { Color, EquirectangularReflectionMapping, sRGBEncoding } from 'three'

export function MyDiamondPage() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Yo></Yo>
        </Suspense>
        <OrbitControls autoRotate></OrbitControls>
        {/* <color attach='background' args={['#000']}></color> */}
        {/* <Environment background files={`/hdr/default.hdr`}></Environment> */}
      </Canvas>
      {/*  */}

      {/*  */}
    </>
  )
}

function Yo() {
  let glb = useGLTF(`/gui/swan-optim.glb`)
  let sceneLoaded = glb.scene

  let scene = useThree((r) => r.scene)
  let computedRainbowEnv = useTexture(`/hdr/little_paris_eiffel_tower.webp`)
  computedRainbowEnv.mapping = EquirectangularReflectionMapping
  computedRainbowEnv.encoding = sRGBEncoding
  scene.environment = computedRainbowEnv
  scene.background = computedRainbowEnv
  return (
    <>
      <mesh geometry={sceneLoaded.getObjectByName('swan_1').geometry}>
        <MeshTransmissionMaterial
          thickness={2.3}
          roughness={0.05}
          reflectivity={0.5}
          metalness={0.3}
          transmission={1}
          backside
          backsideThickness={2.3}
          backsideRoughness={0.05}
          chromaticAberration={0.2}
          flatShading={true}
          background={'#ffffff'}
        ></MeshTransmissionMaterial>
      </mesh>
    </>
  )
}
