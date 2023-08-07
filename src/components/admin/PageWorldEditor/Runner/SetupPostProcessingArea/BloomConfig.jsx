import { useAgapeStore } from '../useAgapeStore'
import { useEffect, useRef } from 'react'
import { Pane } from 'tweakpane'

export function BloomConfig() {
  let mounter = useRef()
  let useStore = useAgapeStore
  let postProcessingConfig = useStore((s) => s.postProcessingConfig)

  useEffect(() => {
    //
    if (!useStore) {
      return
    }

    if (postProcessingConfig) {
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
        title: 'Bloom Effect'
      })

      save(pane)

      pane.addInput(
        {
          get useThisOne() {
            return postProcessingConfig.bloomPass.useThisOne || false
          },
          set useThisOne(v) {
            useStore.getState().postProcessingConfig.bloomPass.useThisOne = v
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

      pane.addInput(
        {
          get mipmapBlur() {
            return postProcessingConfig.bloomPass.mipmapBlur || false
          },
          set mipmapBlur(v) {
            useStore.getState().postProcessingConfig.bloomPass.mipmapBlur = v
            reload()
          }
        },
        'mipmapBlur',
        {
          // min: 0,
          // max: 5,
          // step: 0.01,
        }
      )

      pane.addInput(
        {
          get luminanceThreshold() {
            return postProcessingConfig.bloomPass.luminanceThreshold || 0
          },
          set luminanceThreshold(v) {
            useStore.getState().postProcessingConfig.bloomPass.luminanceThreshold = v
            reload()
          }
        },
        'luminanceThreshold',
        {
          min: 0,
          max: 1,
          step: 0.01
        }
      )

      pane.addInput(
        {
          get intensity() {
            return postProcessingConfig.bloomPass.intensity || 0
          },
          set intensity(v) {
            useStore.getState().postProcessingConfig.bloomPass.intensity = v
          }
        },
        'intensity',
        {
          min: 0,
          max: 10,
          step: 0.01
        }
      )

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
