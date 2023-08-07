import { useAgapeStore } from '../useAgapeStore'
import { useEffect, useRef } from 'react'
import { Pane } from 'tweakpane'

export function AOConfig() {
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
      //
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
        title: 'Ambinet occlusion Effects'
      })

      save(pane)
      window.addEventListener('reloadGUI', () => {
        pane.refresh()
      })
      postProcessingConfig.aoPass = postProcessingConfig.aoPass || {}

      pane.addInput(
        {
          get useThisOne() {
            return postProcessingConfig.aoPass.useThisOne || false
          },
          set useThisOne(v) {
            useStore.getState().postProcessingConfig.aoPass.useThisOne = v
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
          get aoRadius() {
            return postProcessingConfig.aoPass.aoRadius || 0
          },
          set aoRadius(v) {
            useStore.getState().postProcessingConfig.aoPass.aoRadius = v
          }
        },
        'aoRadius',
        {
          min: 0,
          max: 5,
          step: 0.001
        }
      )

      pane.addInput(
        {
          get distanceFalloff() {
            return postProcessingConfig.aoPass.distanceFalloff || 0
          },
          set distanceFalloff(v) {
            useStore.getState().postProcessingConfig.aoPass.distanceFalloff = v
          }
        },
        'distanceFalloff',
        {
          min: 0,
          max: 5,
          step: 0.001
        }
      )

      pane.addInput(
        {
          get intensity() {
            return postProcessingConfig.aoPass.intensity || 0
          },
          set intensity(v) {
            useStore.getState().postProcessingConfig.aoPass.intensity = v
          }
        },
        'intensity',
        {
          min: 0,
          max: 5,
          step: 0.001
        }
      )

      pane.addInput(
        {
          get color() {
            return postProcessingConfig.aoPass.color || '#000000'
          },
          set color(v) {
            useStore.getState().postProcessingConfig.aoPass.color = v
          }
        },
        'color',
        {
          picker: 'inline',
          expanded: true
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
      <div className="mb-3 pb-3">
        <div ref={mounter}></div>
      </div>
    </>
  )
}
