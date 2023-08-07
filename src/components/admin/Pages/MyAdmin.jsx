import Link from 'next/link'
import { AdminGate } from '../AdminLayout/AdminGate'
// import { PageURL } from '../URLs/PageURL'
import { URLModalOut } from '../URLs/Tunnel'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Box, Html, OrbitControls, Sphere, Torus } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useMemo, useRef } from 'react'
import { FrontSide, Vector3 } from 'three'
import { use3DUI } from './use3DUI'
// import tunnel from 'tunnel-rat'
import anime from 'animejs'
// import { CodeCompiler } from '../CodeCompiler/CodeCompiler'
// import { TestButton } from '../CodeCompiler/CodeCore'
// import { CodeCoreRunner } from '../CodeCompiler/CodeCoreRunner'

// let tt = tunnel()
// function HTML({ children }) {
//   return <tt.In>{children}</tt.In>
// }
export function MyAdmin() {
  return (
    <>
      {/*  */}
      <AdminGate>
        <h2 className='daysfont mb-3 text-2xl underline'>Welcome to Admin Portal</h2>

        {/* <TestButton></TestButton> */}
        {/* <CodeCompiler></CodeCompiler> */}
        {/* <CodeCoreRunner></CodeCoreRunner> */}

        {/* <PageURL></PageURL> */}
        {/*
        <div className='mr-3 inline-block'>
          <Link href={`/admin/pages`}>
            <button className='rounded-lg bg-gray-100 p-3 py-6 shadow-md shadow-slate-400'>Pages</button>
          </Link>
        </div>

        <div className='mr-3 inline-block'>
          <Link href={`/admin/swan`}>
            <button className='rounded-lg bg-gray-100 p-3 py-6 shadow-md shadow-slate-400'>Swan</button>
          </Link>
        </div> */}
        {/* <div className='relative h-full w-full'>
          <Canvas>
            <Future></Future>
          </Canvas>

          <tt.Out></tt.Out>
        </div> */}

        {/*  */}
      </AdminGate>
      <URLModalOut></URLModalOut>
    </>
  )
}

//

//

// //

// //
// function Future() {
//   let sun = useRef()
//   useFrame((st, dt) => {
//     sun.current.rotation.y += 0.1 * dt
//   })

//   let entered = use3DUI((r) => r.entered)

//   let controls = useThree((r) => r.controls)
//   return (
//     <>
//       <HTML>
//         {entered && (
//           <>
//             <div className=' absolute left-0 top-0 '>
//               <button
//                 onClick={() => {
//                   //
//                   use3DUI.setState({
//                     entered: false,
//                   })
//                   anime({
//                     targets: [controls.target],
//                     x: 0,
//                     y: 0,
//                     z: 0,
//                     duration: 4000,
//                   })

//                   anime({
//                     targets: [controls.object.position],
//                     x: 0,
//                     y: 15,
//                     z: 25,
//                     duration: 4000,
//                   })
//                 }}
//                 className='bg-gray-300 p-6'
//               >
//                 Back to Home
//               </button>
//             </div>
//           </>
//         )}
//       </HTML>
//       <color attach='background' args={['#333']} />
//       <group ref={sun}>
//         <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
//           <meshPhysicalMaterial emissive={'#f80'}></meshPhysicalMaterial>
//         </Sphere>

//         <group rotation-y={1}>
//           {/* <Torus rotation={[Math.PI * -0.5, 0, 0]} args={[10, 0.05, 64, 32]}></Torus> */}
//           <group position={[0, 0, 10]}>
//             <Planet sun={sun} label='earth' key='earth' color='#03f'></Planet>
//           </group>
//         </group>

//         <group rotation-y={2}>
//           {/* <Torus rotation={[Math.PI * -0.5, 0, 0]} args={[20, 0.05, 64, 32]}></Torus> */}
//           <group position={[0, 0, 20]}>
//             <Planet sun={sun} label={'venus'} key='purple' color='#f0f'></Planet>
//           </group>
//         </group>
//       </group>

//       <OrbitControls object-position={[0, 5, 25]} makeDefault></OrbitControls>

//       <EffectComposer>
//         <Bloom luminanceThreshold={0.1} mipmapBlur></Bloom>
//       </EffectComposer>
//     </>
//   )
// }

// function Planet({ sun, label = '', color = `#05f`, children }) {
//   let moon = useRef()
//   let core = useRef()

//   let entered = use3DUI((r) => r.entered)

//   let coreWP = useMemo(() => new Vector3(), [])
//   let moonWP = useMemo(() => new Vector3(), [])
//   useFrame((st, dt) => {
//     if (entered && entered.core === core.current && st.controls) {
//       core.current.getWorldPosition(coreWP)
//       moon.current.getWorldPosition(moonWP)
//       // moonWP.y += 1.3

//       // core.current.lookAt(0, 0, 0)
//       // coreWP.set(0, 0, 0)

//       st.controls.target.lerp(coreWP, 0.05)
//       st.controls.object.position.lerp(moonWP, 0.05)
//       // core.current.rotation.y += dt
//     } else {
//     }
//   })
//   return (
//     <group ref={core}>
//       <Sphere
//         onPointerDown={() => {
//           if (entered) {
//             return
//           }
//           use3DUI.setState({
//             entered: {
//               core: core.current,
//               moon: moon.current,
//             },
//           })
//         }}
//         args={[1.5, 32, 32]}
//       >
//         <meshPhysicalMaterial emissive={color} emissiveIntensity={2}></meshPhysicalMaterial>
//       </Sphere>
//       <Html center position={[0, 3, 0]} className='bg-white p-1'>
//         {label}
//       </Html>
//       <group position={[0, 0, 6]} ref={moon}>
//         <Box scale={0.1}>
//           <meshStandardMaterial side={FrontSide} color={'#f00'}></meshStandardMaterial>
//         </Box>
//       </group>
//       <group position={[0, 0, 6]}>{children}</group>
//     </group>
//   )
// }
