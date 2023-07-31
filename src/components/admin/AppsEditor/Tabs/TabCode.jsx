import { AppBrowser } from '../AppBrowser/AppBrowser'
import { CodeEditor } from '../CodeEditor/CodeEditor'
import { FileBrowser } from '../FileBrowser/FileBrowser'

export function TabCode() {
  return (
    <>
      <div style={{ height: `calc(100% - 230px)`, width: `calc(100%)` }} className='flex'>
        <div style={{ height: `100%`, width: `calc(50% - 2px)`, marginRight: `2px` }} className='border-r'>
          <CodeEditor></CodeEditor>
        </div>
        <div style={{ height: `100%`, width: `calc(50%)` }}>
          <AppBrowser></AppBrowser>
        </div>
      </div>
      <div style={{ height: `calc(230px)`, width: `calc(100%)` }} className='flex'>
        <div style={{ height: `100%`, width: `calc(50% - 2px)`, marginRight: `2px` }} className='border-r'>
          <FileBrowser></FileBrowser>
        </div>
        <div style={{ height: `100%`, width: `calc(50%)` }}>
          <FileBrowser></FileBrowser>
        </div>
      </div>

      {/*  */}
      {/* <div className='flex h-full w-full'>
        <div style={{ height: `100%`, width: `calc(200px)` }}></div>
        <div style={{ height: `100%`, width: `calc(100% - 200px)` }}>
          <div className='flex h-full w-full'>
            <div className='h-full ' style={{ width: `calc(50% + 280px)` }}>
              <div style={{ height: `calc(100% - 230px)` }}>
                <div style={{ height: `100%`, width: `calc(100% - 230px)` }}>
                  <CodeEditor></CodeEditor>
                </div>
                <div style={{ height: `100%`, width: `calc(230px)` }}>
                  <div className='h-full bg-white bg-opacity-25 ' style={{ width: `200px` }}>
                  </div>
                </div>
              </div>
              <div style={{ height: `230px` }}>
                <FileBrowser></FileBrowser>
              </div>
            </div>

            <div className='h-full bg-white ' style={{ width: `calc(50% - 280px)` }}>
              <div style={{ height: `calc(100% - 230px)` }}>
                <AppBrowser></AppBrowser>
              </div>
              <div style={{ height: `230px` }}>
                <FileBrowser></FileBrowser>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
