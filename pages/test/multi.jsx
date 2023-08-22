import { CommonSwanHTML, RunSwanDev } from '@/components/swandev/RunSwanDev'
import { Environment, PerspectiveCamera, Text, useTexture } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EquirectangularReflectionMapping, sRGBEncoding } from 'three'
import { CanvasPreview } from '@/components/admin/SwansDetail/SwanPreview'

export default function Multi() {
  return (
    <>
      <CanvasPreview
        activeSwan={{ _id: Math.random(), developmentURL: `http://localhost:8521/frontend` }}
        mdoe='development'
      />
    </>
  )
}

// function BG() {
//   let tex = useTexture(`/hdr/kiara_interior_8k.jpg`)
//   let scene = useThree((r) => r.scene)
//   tex.mapping = EquirectangularReflectionMapping
//   tex.encoding = sRGBEncoding
//   scene.background = tex
//   scene.environment = tex
//   return null
// }
