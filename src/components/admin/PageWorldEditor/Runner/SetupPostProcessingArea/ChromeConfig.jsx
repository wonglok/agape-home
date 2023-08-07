import { useAgapeStore } from '../useAgapeStore'
import { useEffect, useRef } from 'react'
import { Pane } from 'tweakpane'

export function ChromeConfig() {
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
        title: 'Chrome Effects'
      })

      save(pane)
      window.addEventListener('reloadGUI', () => {
        pane.refresh()
      })
      postProcessingConfig.chromePass = postProcessingConfig.chromePass || {}

      pane.addInput(
        {
          get useThisOne() {
            return postProcessingConfig.chromePass.useThisOne || false
          },
          set useThisOne(v) {
            useStore.getState().postProcessingConfig.chromePass.useThisOne = v
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
          get offsetX() {
            return postProcessingConfig.chromePass.offsetX || 0
          },
          set offsetX(v) {
            useStore.getState().postProcessingConfig.chromePass.offsetX = v
          }
        },
        'offsetX',
        {
          min: -0.5,
          max: 0.5,
          step: 0.001
        }
      )

      pane.addInput(
        {
          get offsetY() {
            return postProcessingConfig.chromePass.offsetY || 0
          },
          set offsetY(v) {
            useStore.getState().postProcessingConfig.chromePass.offsetY = v
          }
        },
        'offsetY',
        {
          min: -0.5,
          max: 0.5,
          step: 0.001
        }
      )

      pane.addInput(
        {
          get radialModulation() {
            return postProcessingConfig.chromePass.radialModulation || false
          },
          set radialModulation(v) {
            useStore.getState().postProcessingConfig.chromePass.radialModulation = v
          }
        },
        'radialModulation',
        {
          // min: -1,
          // max: 1,
          // step: 0.01,
        }
      )

      pane.addInput(
        {
          get modulationOffset() {
            return postProcessingConfig.chromePass.modulationOffset || 0
          },
          set modulationOffset(v) {
            useStore.getState().postProcessingConfig.chromePass.modulationOffset = v
          }
        },
        'modulationOffset',
        {
          min: -0.5,
          max: 0.5,
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
