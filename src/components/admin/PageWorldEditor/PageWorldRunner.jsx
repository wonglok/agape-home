import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { AppRunner } from '../AppsEditor/AppBrowser/AppRunner'
import { useState } from 'react'
import tunnel from 'tunnel-rat'

const t = tunnel()

export function PageWorldRunner() {
  return (
    <div className='relative h-full w-full bg-white'>
      <Canvas>
        <color attach='background' args={['#cccccc']} />
        <gridHelper args={[10, 10, '#f00', '#000']} />
        <OrbitControls object-position={[0, 3, 5]}></OrbitControls>

        <group position={[-1, 0, 0]}>
          <SmartObject appID={`64cf6ede51ea34baac32cdd2`}></SmartObject>
        </group>
        <group position={[1, 0, 0]}>
          <SmartObject appID={`64bd9f9325ff27c7519d352d`}></SmartObject>
        </group>
      </Canvas>

      <t.Out></t.Out>
    </div>
  )
}

function SmartObject({ appID }) {
  let [html, setHTML] = useState(null)
  return (
    <>
      {appID && (
        <AppRunner
          appID={appID}
          mountHTML={(v) => {
            setHTML(v)
          }}
          mode={'smartobject'}
        ></AppRunner>
      )}
      <t.In>{html}</t.In>
    </>
  )
}
