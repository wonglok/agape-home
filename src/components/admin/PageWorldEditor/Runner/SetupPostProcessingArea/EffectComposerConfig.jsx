import { useAgapeStore } from '../useAgapeStore'
import { useEffect, useRef } from 'react'
import { Pane } from 'tweakpane'

export function EffectComposerConfig() {
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
      // console.log(ref.current)

      let pane = new Pane({
        container: dom,
        title: 'Effect Composer'
      })

      save(pane)
      window.addEventListener('reloadGUI', () => {
        pane.refresh()
      })

      pane.addInput(
        {
          get multisampling() {
            return postProcessingConfig.multisampling || 0
          },
          set multisampling(v) {
            useStore.getState().postProcessingConfig.multisampling = v
            reload()
          }
        },
        'multisampling',
        {
          min: 0,
          max: 8,
          step: 1
        }
      )

      pane.addInput(
        {
          get envMapIntensity() {
            return postProcessingConfig.envMapIntensity || 0.0
          },
          set envMapIntensity(v) {
            useStore.getState().postProcessingConfig.envMapIntensity = v
          }
        },
        'envMapIntensity',
        {
          min: 0,
          max: 5,
          step: 0.01
        }
      )

      pane.addInput(
        {
          get emissiveIntensity() {
            return postProcessingConfig.emissiveIntensity || 0.0
          },
          set emissiveIntensity(v) {
            useStore.getState().postProcessingConfig.emissiveIntensity = v
          }
        },
        'emissiveIntensity',
        {
          min: 0,
          max: 25,
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
