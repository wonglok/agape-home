import { useEffect, useRef } from 'react'
import { Pane } from 'tweakpane'
import { useAgapeStore } from '../useAgapeStore'

export function WaveConfig() {
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
        title: 'Wave Effect'
      })

      save(pane)
      window.addEventListener('reloadGUI', () => {
        pane.refresh()
      })

      pane.addInput(
        {
          get useThisOne() {
            return postProcessingConfig.wavePass.useThisOne
          },
          set useThisOne(v) {
            useStore.getState().postProcessingConfig.wavePass.useThisOne = v
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
          get speed() {
            return postProcessingConfig.wavePass.speed
          },
          set speed(v) {
            useStore.getState().postProcessingConfig.wavePass.speed = v
          }
        },
        'speed',
        {
          min: 0,
          max: 2,
          step: 0.01
        }
      )

      /*
      speed: 0.75,
      maxRadius: 0.3,
      waveSize: 0.2,
      amplitude: 0.3,
      */

      pane.addInput(
        {
          get maxRadius() {
            return postProcessingConfig.wavePass.maxRadius || 0
          },
          set maxRadius(v) {
            useStore.getState().postProcessingConfig.wavePass.maxRadius = v
          }
        },
        'maxRadius',
        {
          min: 0,
          max: 2,
          step: 0.01
        }
      )

      pane.addInput(
        {
          get waveSize() {
            return postProcessingConfig.wavePass.waveSize
          },
          set waveSize(v) {
            useStore.getState().postProcessingConfig.wavePass.waveSize = v
          }
        },
        'waveSize',
        {
          min: 0,
          max: 2,
          step: 0.01
        }
      )

      pane.addInput(
        {
          get amplitude() {
            return postProcessingConfig.wavePass.amplitude
          },
          set amplitude(v) {
            useStore.getState().postProcessingConfig.wavePass.amplitude = v
          }
        },
        'amplitude',
        {
          min: 0,
          max: 2,
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
