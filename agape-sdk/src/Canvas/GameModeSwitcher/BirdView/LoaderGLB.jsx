import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useState } from 'react'
import { AnimationMixer } from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function LoaderGLB({ url, loading = null, WhenDone = () => null, decorate = () => {}, animate = false }) {
  let [glb, setGLB] = useState(false)

  let [loaderGUI, setLoadGUI] = useState(loading)
  useEffect(() => {
    let draco = new DRACOLoader()
    draco.setDecoderPath('/agape-sdk/t150draco/draco/')
    let loadGLB = new GLTFLoader()
    loadGLB.setDRACOLoader(draco)
    loadGLB.setCrossOrigin('yo')

    loadGLB.load(
      url,
      (glb) => {
        decorate({ glb })
        setGLB(glb)
        setLoadGUI(false)
      },
      (prog) => {
        // console.log(prog);
      },
      (error) => {
        //
        setLoadGUI(false)
        console.log(error)
      },
    )
  }, [url])

  // let glb = useGLTF(`${url}`);
  // decorate({ glb });

  let mixer = useMemo(() => {
    return new AnimationMixer(glb.scene)
  }, [glb.scene])

  useFrame((st, dt) => {
    mixer.update(dt)
  })

  useEffect(() => {
    if (animate && glb && mixer && glb?.animations[0]) {
      let action = mixer.clipAction(glb?.animations[0], glb.scene)
      action?.reset()?.play()
    }
  }, [glb.scene])

  return (
    <>
      {glb && <WhenDone glb={glb} />}
      {loaderGUI}
    </>
  )
}
