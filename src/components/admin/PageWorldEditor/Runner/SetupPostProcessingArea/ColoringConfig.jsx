import { useAgapeStore } from '../useAgapeStore'
import { useEffect, useRef } from 'react'
import { Pane } from 'tweakpane'

export function ColoringConfig() {
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
        title: 'Coloring Effects'
      })

      save(pane)
      window.addEventListener('reloadGUI', () => {
        pane.refresh()
      })

      pane.addInput(
        {
          get useThisOne() {
            return postProcessingConfig.colorPass.useThisOne
          },
          set useThisOne(v) {
            useStore.getState().postProcessingConfig.colorPass.useThisOne = v
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
          get hue() {
            return postProcessingConfig.colorPass.hue
          },
          set hue(v) {
            useStore.getState().postProcessingConfig.colorPass.hue = v
          }
        },
        'hue',
        {
          min: -1,
          max: 1,
          step: 0.01
        }
      )

      pane.addInput(
        {
          get saturation() {
            return postProcessingConfig.colorPass.saturation
          },
          set saturation(v) {
            useStore.getState().postProcessingConfig.colorPass.saturation = v
          }
        },
        'saturation',
        {
          min: -1,
          max: 1,
          step: 0.01
        }
      )

      pane.addInput(
        {
          get brightness() {
            return postProcessingConfig.colorPass.brightness
          },
          set brightness(v) {
            useStore.getState().postProcessingConfig.colorPass.brightness = v
          }
        },
        'brightness',
        {
          min: -1,
          max: 1,
          step: 0.01
        }
      )

      pane.addInput(
        {
          get contrast() {
            return postProcessingConfig.colorPass.contrast
          },
          set contrast(v) {
            useStore.getState().postProcessingConfig.colorPass.contrast = v
          }
        },
        'contrast',
        {
          min: -1,
          max: 1,
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
      <div className="mb-3 pb-3">
        <div ref={mounter}></div>
      </div>
    </>
  )
}
