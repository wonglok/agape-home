import { CommonSwanHTML, RunSwanDev } from '@/components/test/RunSwanDev'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Multi() {
  return (
    <>
      <Canvas>
        <group position={[0, 2, 0]}>
          {/* Development */}
          <RunSwanDev></RunSwanDev>
        </group>
        <group position={[0, 0, 0]}>
          {/* App */}
          <RunSwanDev baseURL={`http://localhost:8521/other-swans/vm`}></RunSwanDev>
        </group>

        {/*  */}

        <OrbitControls></OrbitControls>
        <Environment background files={`/hdr/grass.hdr`}></Environment>

        {/*  */}
      </Canvas>
      <CommonSwanHTML></CommonSwanHTML>
      {/*  */}
    </>
  )
}
