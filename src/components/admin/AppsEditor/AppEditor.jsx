import { useApps } from '../Apps/useApps'
import { CodeIcon } from './Icons/CodeIcon'
import { HomeIcon } from './Icons/HomeIcon'

export function AppEditor() {
  let activeApp = useApps((r) => r.activeApp)

  return (
    <>
      <div
        className='flex items-center bg-slate-100 bg-gradient-to-t from-slate-300 to-slate-100 text-sm'
        style={{
          height: '70px',
        }}
      >
        <HomeIcon></HomeIcon>
        <CodeIcon></CodeIcon>
      </div>
      <div
        className=' bg-gradient-to-t from-slate-200 to-slate-400'
        style={{
          height: 'calc(100% - 70px)',
        }}
      >
        <div className='flex h-full w-full'>
          <div className='h-full bg-red-500'></div>
          <div className='h-full bg-red-300'></div>
        </div>
      </div>
    </>
  )
}
