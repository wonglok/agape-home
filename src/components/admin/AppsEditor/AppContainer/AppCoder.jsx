// import { YoMeta } from 'agape-sdk/src/Canvas/GameModeSwitcher/RoomView/useMeta'
import { AppCoderInternal } from './AppCoderInternal'

export function AppCoder() {
  return (
    <>
      <div className='h-full w-full bg-white' style={{ backgroundColor: `#1E1E1E` }}>
        <AppCoderInternal></AppCoderInternal>
      </div>
    </>
  )
}
