// import { AdminGateNoLayout } from '../AdminLayout/AdminGateNoLayout'
// import { useApps } from '../Apps/useApps'
import { IconBar } from './Icons/IconBar'
import { TabAdapter } from './Tabs/TabAdapter'

export function AppEditor() {
  // let activeApp = useApps((r) => r.activeApp)

  return (
    <>
      <>
        <div
          className='flex items-center bg-slate-100 bg-gradient-to-t from-slate-300 to-slate-100 text-sm'
          style={{
            height: '70px',
          }}
        >
          <IconBar></IconBar>
        </div>
        <div
          className=' bg-gradient-to-t from-slate-200 to-slate-400'
          style={{
            height: 'calc(100% - 70px)',
          }}
        >
          <TabAdapter></TabAdapter>
        </div>
      </>
    </>
  )
}

//
