import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei'
import { EquirectangularReflectionMapping, sRGBEncoding } from 'three'
import { CommonSwanHTML, RemoteSwan } from '@/components/swandev/RemoteSwan'

export function CanvasPreview({ mode = 'development', activeSwan }) {
  return (
    <>
      <div className='relative h-full w-full'>
        {/*  */}
        <Canvas>
          <group position={[0, 0, 0]}>
            {/* Development */}
            {activeSwan.developmentURL && (
              <RemoteSwan
                appID={`${activeSwan._id}}`}
                mode={mode}
                productionURL={activeSwan.productionURL}
                developmentURL={activeSwan.developmentURL}
              ></RemoteSwan>
            )}
          </group>

          <BG></BG>
          <PerspectiveCamera fov={45} makeDefault position={[0, 0, 15]}></PerspectiveCamera>
          <OrbitControls makeDefault position={[0, 0, 15]} target={[0, 0, 0]}></OrbitControls>

          {/* <Environment files={``}></Environment> */}
          {/* <color attach={'background'} args={['#cecece']}></color> */}
          {/*  */}
        </Canvas>
        <CommonSwanHTML></CommonSwanHTML>
      </div>
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
