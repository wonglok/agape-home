import { FileBrowser } from '../FileBrowser/FileBrowser'

export function TabCode() {
  return (
    <>
      {/*  */}

      <div className='h-full border-r bg-white' style={{ width: `280px` }}>
        <div className='h-full overflow-scroll px-2 py-4'>
          <FileBrowser></FileBrowser>
        </div>
      </div>

      {/*  */}
    </>
  )
}
