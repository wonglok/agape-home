import { useApps } from '../Apps/useApps'

export function AppEditor() {
  let activeApp = useApps((r) => r.activeApp)

  return (
    <>
      <div
        className=' bg-gray-100'
        style={{
          height: '75px',
        }}
      >
        Editor
      </div>
    </>
  )
}
