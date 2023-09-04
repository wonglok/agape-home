import { Canvas } from '@react-three/fiber'
import { AppRunner } from '../AppsEditor/AppBrowser/AppRunner'
import { Suspense, useState } from 'react'
import tunnel from 'tunnel-rat'
import { AgapeEngine } from './Runner/AgapeEngine'
import { CommonSwanHTML, RemoteSwan } from '@/components/swandev/RemoteSwan'
import { SwanRemoteHTMLGen2, SwanRemoteRuntimeGen2 } from './SwanLoader/SwanRemoteRuntimeGen2'
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

        <group position={[5, 5, 0]}>
          {process.env.NODE_ENV === 'development' ? (
            <Suspense fallback={null}>
              {
                <SwanRemoteRuntimeGen2
                  baseURL={`http://localhost:8521`}
                  swanPath={`swan-build`}
                  socketURL={'http://localhost:8521'}
                ></SwanRemoteRuntimeGen2>
              }
            </Suspense>
          ) : (
            <Suspense fallback={null}>
              <SwanRemoteRuntimeGen2
                baseURL={`https://agape-swan-gen2.vercel.app`}
                swanPath={`swan-build`}
                socketURL={false}
              ></SwanRemoteRuntimeGen2>
            </Suspense>
          )}
        </group>

        <AgapeEngine tRunner={tRunner}></AgapeEngine>

        {/* <group position={[0, 1, -5]}>
          <group position={[-1, 0, 0]}>
            <SmartObject appID={`64cf6ede51ea34baac32cdd2`}></SmartObject>
          </group>
          <group position={[1, 0, 0]}>
            <SmartObject appID={`64bd9f9325ff27c7519d352d`}></SmartObject>
          </group>
        </group> */}
      </Canvas>

      <tRunner.Out></tRunner.Out>
      <CommonSwanHTML></CommonSwanHTML>
      <SwanRemoteHTMLGen2></SwanRemoteHTMLGen2>
    </div>
  )
}
