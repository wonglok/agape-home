import { FileBrowser } from '../FileBrowser/FileBrowser'

export function TabCode() {
  return (
    <>
      {/*  */}
      <div className='flex h-full w-full'>
        <div className='h-full bg-green-200 bg-opacity-50' style={{ width: `280px` }}>
          Left
        </div>
        <div className='h-full ' style={{ width: `calc(100% - 280px - 500px)` }}>
          <div style={{ height: `calc(100% - 280px)` }}>Top</div>
          <div style={{ height: `280px` }}>
            <FileBrowser></FileBrowser>
          </div>
        </div>
        <div className='h-full bg-gray-400 bg-opacity-50 ' style={{ width: `500px` }}></div>
      </div>

      {/*  */}
    </>
  )
}
