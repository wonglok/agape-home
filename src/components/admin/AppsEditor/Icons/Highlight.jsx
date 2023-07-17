import { useApps } from '../../Apps/useApps'

export function Highlight({ tabName }) {
  let activeTab = useApps((r) => r.activeTab)
  return (
    <>
      <div
        className=' '
        style={{
          visibility: activeTab === tabName ? 'visible' : 'hidden',
          boxShadow: '0px 0px 15px 0px cyan',
          marginTop: '3px',
          width: `30px`,
          height: `2px`,
          backgroundColor: 'cyan',
        }}
      ></div>
    </>
  )
}
