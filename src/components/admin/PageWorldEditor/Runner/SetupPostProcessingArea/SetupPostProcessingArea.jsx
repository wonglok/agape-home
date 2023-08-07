import { useAgapeStore } from '../useAgapeStore'
import { EffectComposerConfig } from './EffectComposerConfig'
import { BloomConfig } from './BloomConfig'
import { SSRConfig } from './SSRConfig'
import { WaveConfig } from './WaveConfig'
import { ColoringConfig } from './ColoringConfig'
import { ChromeConfig } from './ChromeConfig'
import { AOConfig } from './AOConfig'

export function SetupPostProcessingArea() {
  let useStore = useAgapeStore
  let postProcessingConfig = useStore((r) => r.postProcessingConfig)
  return (
    <>
      <div className="mx-3">
        {useStore && postProcessingConfig && (
          <>
            <EffectComposerConfig useStore={useStore}></EffectComposerConfig>
            <AOConfig useStore={useStore}></AOConfig>
            <BloomConfig useStore={useStore}></BloomConfig>
            <ColoringConfig useStore={useStore}></ColoringConfig>
            <ChromeConfig useStore={useStore}></ChromeConfig>
            <SSRConfig useStore={useStore}></SSRConfig>
            <WaveConfig useStore={useStore}></WaveConfig>
          </>
        )}
      </div>
      {/*   */}
    </>
  )
}
