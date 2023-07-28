import { AppBrowser } from '../AppBrowser/AppBrowser'
import { CodeEditor } from '../CodeEditor/CodeEditor'
import { FileBrowser } from '../FileBrowser/FileBrowser'

export function TabCode() {
  return (
    <>
      {/*  */}
      <div className='flex h-full w-full'>
        <div className='h-full ' style={{ width: `calc(50%)` }}>
          <div style={{ height: `calc(100% - 287px)` }}>
            <CodeEditor></CodeEditor>
          </div>
          <div style={{ height: `287px` }}>
            <FileBrowser></FileBrowser>
          </div>
        </div>
        <div className='h-full bg-white bg-opacity-25 ' style={{ width: `280px` }}>
          Signal Bar
        </div>
        <div className='h-full bg-white ' style={{ width: `calc(50% - 280px)` }}>
          <AppBrowser></AppBrowser>
        </div>
      </div>
    </>
  )
}
