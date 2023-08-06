import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSlug } from '../URLs/useSlug'
import { Canvas } from '@react-three/fiber'
import { Box, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { AppRunner } from '../AppsEditor/AppBrowser/AppRunner'

export function PageWorldEditor() {
  let router = useRouter()
  let query = router.query || {}
  let abLoaderID = query.abLoaderID || ''

  useEffect(() => {
    if (abLoaderID) {
      // console.log(abLoaderID)
      useSlug
        .getState()
        .findOne({ object: { _id: abLoaderID } })
        .then((r) => {
          console.log(r)
        })
    }
  }, [abLoaderID])

  return (
    <>
      <div className='h-full w-full bg-white'>
        {/* <div>ABLoader {abLoaderID}</div> */}

        <div style={{ width: '100%', height: `calc(80px)` }} className='flex bg-white'>
          <div style={{ width: '280px', height: `calc(100%)` }}>
            <div className='h-full w-full bg-gradient-to-r from-gray-400 to-gray-100'>
              <div className='flex h-full w-full items-center justify-start'>
                <Link href={`/admin/pages`}>
                  <button className='ml-5 rounded-xl bg-gray-200 p-2 px-4 text-sm hover:bg-gray-300'>Back</button>
                </Link>
              </div>
            </div>
          </div>

          <div style={{ width: 'calc(100% - 280px - 280px)', height: `calc(100%)` }}>
            <div className='h-full w-full bg-gray-100'>
              <div className='flex h-full w-full items-center justify-center'>
                <button className='m-1 rounded-xl bg-gray-200 p-2 px-4 text-sm hover:bg-gray-300'>Page View</button>
                <button className='m-1 rounded-xl bg-gray-200 p-2 px-4 text-sm hover:bg-gray-300'>Room View</button>
                <button className='m-1 rounded-xl bg-gray-200 p-2 px-4 text-sm hover:bg-gray-300'>Sky View</button>
              </div>
            </div>
          </div>

          <div style={{ width: '280px', height: `calc(100%)` }}>
            <div className='h-full w-full bg-gradient-to-l from-gray-400 to-gray-100'>
              <div className='flex h-full w-full items-center justify-end'>
                <button className='mr-5 rounded-xl bg-gray-200 p-2 px-4 text-sm hover:bg-gray-300'>Preview</button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: '100%', height: `calc(100% - 80px)` }} className='flex'>
          <div style={{ width: '280px', height: `calc(100%)` }}>
            <div className='h-full w-full bg-gray-200'>Outliner</div>
          </div>
          <div style={{ width: 'calc(100% - 280px - 280px)', height: `calc(100%)` }}>
            <RunnerTester></RunnerTester>
          </div>
          <div style={{ width: '280px', height: `calc(100%)` }}>
            <div className='h-full w-full  bg-gray-200'>Settings</div>
          </div>
        </div>
      </div>
    </>
  )
}

function RunnerTester() {
  let [html, setHTML] = useState(null)
  return (
    <div className='relative h-full w-full bg-white'>
      <Canvas>
        <color attach='background' args={['#bababa']} />
        <gridHelper args={[10, 10, '#f00', '#000']} />
        <OrbitControls object-position={[0, 3, 5]}></OrbitControls>

        <AppRunner
          appID={`64bd9f9325ff27c7519d352d`}
          mountHTML={(v) => {
            setHTML(v)
          }}
          mode={'smartobject'}
        ></AppRunner>
      </Canvas>
      {html}
    </div>
  )
}
