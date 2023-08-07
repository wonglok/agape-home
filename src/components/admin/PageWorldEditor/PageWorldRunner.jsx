import { Canvas } from '@react-three/fiber'
import { AppRunner } from '../AppsEditor/AppBrowser/AppRunner'
import { useState } from 'react'
import tunnel from 'tunnel-rat'
import { AgapeEngine } from './Runner/AgapeEngine'
export const tRunner = tunnel()

export function PageWorldRunner({ isEditor = false }) {
  return (
    <div
      className='relative h-full w-full bg-white'
      onKeyDownCapture={(ev) => {
        ev.stopPropagation()
      }}
    >
      <Canvas gl={{ logarithmicDepthBuffer: true }}>
        {isEditor ? (
          <></>
        ) : (
          <>
            {/*  */}

            {/*  */}
          </>
        )}

        <AgapeEngine tRunner={tRunner}></AgapeEngine>

        <group position={[0, 1, -5]}>
          <group position={[-1, 0, 0]}>
            <SmartObject appID={`64cf6ede51ea34baac32cdd2`}></SmartObject>
          </group>
          <group position={[1, 0, 0]}>
            <SmartObject appID={`64bd9f9325ff27c7519d352d`}></SmartObject>
          </group>
        </group>
      </Canvas>

      <tRunner.Out></tRunner.Out>
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
      <tRunner.In>{html}</tRunner.In>
    </>
  )
}
