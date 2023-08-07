import { useAgapeStore } from '../useAgapeStore'
import { useEffect, useRef } from 'react'
import { Pane } from 'tweakpane'
const SSROptions = {
  useThisOne: true,
  intensity: 1,
  exponent: 1,
  distance: 10,
  fade: 0,
  roughnessFade: 1,
  thickness: 10,
  ior: 1.45,
  maxRoughness: 1,
  maxDepthDifference: 10,
  blend: 0.9,
  correction: 1,
  correctionRadius: 1,
  blur: 0.0,
  blurKernel: 1,
  blurSharpness: 10,
  jitter: 0.025,
  jitterRoughness: 0.025,
  steps: 8,
  refineSteps: 8,
  missedRays: true,
  useNormalMap: true,
  useRoughnessMap: true,
  resolutionScale: 1,
  velocityResolutionScale: 0.1
}

export function SSRConfig() {
  let mounter = useRef()
  let useStore = useAgapeStore
  let postProcessingConfig = useStore((s) => s.postProcessingConfig)

  //
  useEffect(() => {
    //
    if (!useStore) {
      return
    }

    //

    if (postProcessingConfig) {
      let ttsync = 0
      let sync = () => {
        useStore
          .getState()
          .syncPostPorc({ postProcessingConfig: useStore.getState().postProcessingConfig })
      }
      let save = (pane) => {
        pane.on('change', () => {
          sync()
        })
      }

      let tt = 0
      let reload = () => {}

      let dom = mounter.current

      let pane = new Pane({
        container: dom,
        title: 'Reflection Effect'
      })

      save(pane)
      window.addEventListener('reloadGUI', () => {
        pane.refresh()
      })

      pane.addButton({ title: 'Reset' }).on('click', () => {
        for (let kn in SSROptions) {
          useStore.getState().postProcessingConfig.ssrPass[kn] = SSROptions[kn]
        }
        useStore.getState().postProcessingConfig.ssrPass.useThisOne = true
        pane.refresh()
      })

      pane.addInput(
        {
          get useThisOne() {
            if (typeof postProcessingConfig.ssrPass.useThisOne === 'undefined') {
              postProcessingConfig.ssrPass.useThisOne = true
            }
            return postProcessingConfig.ssrPass.useThisOne
          },
          set useThisOne(v) {
            useStore.getState().postProcessingConfig.ssrPass.useThisOne = v
            reload()
          }
        },
        'useThisOne',
        {
          // min: 0,
          // max: 8,
          // step: 1,
        }
      )

      // pane.on("change", (ev) => {
      //   const { presetKey } = ev;

      //   ssrEffect[presetKey] = ev.value;

      // });

      let params = new Proxy(postProcessingConfig.ssrPass, {
        set: (obj, key, val) => {
          useStore.getState().postProcessingConfig.ssrPass[key] = val
          return true
        },
        get: (obj, key) => {
          return obj[key]
        }
      })

      const generalFolder = pane.addFolder({ title: 'General' })

      generalFolder.addInput(params, 'intensity', { min: 0, max: 3, step: 0.01 })
      generalFolder.addInput(params, 'exponent', {
        min: 0.125,
        max: 8,
        step: 0.125
      })
      generalFolder.addInput(params, 'distance', {
        min: 0.001,
        max: 10,
        step: 0.1
      })
      generalFolder.addInput(params, 'fade', {
        min: 0,
        max: 20,
        step: 0.01
      })
      generalFolder.addInput(params, 'roughnessFade', {
        min: 0,
        max: 1,
        step: 0.01
      })
      generalFolder.addInput(params, 'thickness', {
        min: 0,
        max: 10,
        step: 0.01
      })
      generalFolder.addInput(params, 'ior', {
        min: 1,
        max: 2.33333,
        step: 0.01
      })

      const maximumValuesFolder = pane.addFolder({ title: 'Maximum Values' })
      maximumValuesFolder.addInput(params, 'maxRoughness', {
        min: 0,
        max: 1,
        step: 0.01
      })
      maximumValuesFolder.addInput(params, 'maxDepthDifference', {
        min: 0,
        max: 100,
        step: 0.1
      })

      const temporalResolveFolder = pane.addFolder({ title: 'Temporal Resolve' })

      temporalResolveFolder.addInput(params, 'blend', {
        min: 0,
        max: 1,
        step: 0.001
      })
      temporalResolveFolder.addInput(params, 'correction', {
        min: 0,
        max: 1,
        step: 0.0001
      })
      temporalResolveFolder.addInput(params, 'correctionRadius', {
        min: 1,
        max: 4,
        step: 1
      })

      const blurFolder = pane.addFolder({ title: 'Blur' })
      blurFolder.addInput(params, 'blur', { min: 0, max: 1, step: 0.01 })
      blurFolder.addInput(params, 'blurKernel', { min: 0, max: 5, step: 1 })
      blurFolder.addInput(params, 'blurSharpness', { min: 0, max: 100, step: 1 })

      const jitterFolder = pane.addFolder({ title: 'Jitter' })

      jitterFolder.addInput(params, 'jitter', { min: 0, max: 1, step: 0.01 })
      jitterFolder.addInput(params, 'jitterRoughness', {
        min: 0,
        max: 1,
        step: 0.01
      })

      const definesFolder = pane.addFolder({ title: 'Tracing' })

      definesFolder.addInput(params, 'steps', { min: 1, max: 256, step: 1 })
      definesFolder.addInput(params, 'refineSteps', { min: 0, max: 16, step: 1 })
      definesFolder.addInput(params, 'missedRays')

      const resolutionFolder = pane.addFolder({
        title: 'Resolution',
        expanded: false
      })
      resolutionFolder.addInput(params, 'resolutionScale', {
        min: 0.125,
        max: 1,
        step: 0.125
      })
      resolutionFolder.addInput(params, 'velocityResolutionScale', {
        min: 0.125,
        max: 1,
        step: 0.125
      })

      let keydown = (ev) => {
        ev.stopImmediatePropagation()
        ev.stopPropagation()
      }
      dom.addEventListener('keydown', keydown, {})

      return () => {
        dom.removeEventListener('keydown', keydown, {})
        pane.dispose()
      }
    }
  }, [useStore, postProcessingConfig])
  return (
    <>
      <div className="mb-3">
        <div ref={mounter}></div>
      </div>
    </>
  )
}
