import { AppBootLoader } from './AppBootLoader'
import { AppCoder } from './AppCoder'
import { AppFileBrowser } from './AppFileBrowser'
import { AppTerminal } from './AppTerminal'
import { AppWindow } from './AppWindow'

export function AppContainer() {
  return (
    <>
      <div className='h-full' style={{ width: `280px` }}>
        <AppFileBrowser></AppFileBrowser>
      </div>
      <div className='h-full' style={{ width: `calc((100% - 280px) * 0.4)` }}>
        <div className='h-full w-full' style={{ height: `calc(100% - 400px)` }}>
          <AppCoder></AppCoder>
        </div>
        <div className='w-full' style={{ height: `calc(400px)` }}>
          <AppTerminal></AppTerminal>
        </div>
      </div>

      <div className='h-full' style={{ width: `calc((100% - 280px) * 0.6)` }}>
        <AppWindow></AppWindow>
      </div>

      <AppBootLoader></AppBootLoader>
    </>
  )
}
