import { useApps } from '../../Apps/useApps'
import { Highlight } from './Highlight'

export function CloudIcon() {
  let tabName = 'cloud'
  let tabDisplayName = 'Cloud'
  return (
    <div
      onClick={() => {
        //
        useApps.setState({ activeTab: tabName })
      }}
      className=' mx-1 flex  cursor-pointer flex-col items-center justify-center '
    >
      <div
        className='flex flex-col items-center justify-center rounded-xl bg-gray-100 shadow-inner shadow-gray-300'
        style={{
          width: '55px',
          height: '55px',
        }}
      >
        <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'>
          <path d='M18.5 20h-13c-2.481 0-4.5-2.019-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.79c.185-3.447 3.031-6.146 6.48-6.146 3.449 0 6.295 2.699 6.479 6.146l.043.79.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.481-2.019 4.5-4.5 4.5m.979-9.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408' />
        </svg>
        <div className='text-xs'>{tabDisplayName}</div>
      </div>
      <Highlight tabName={tabName}></Highlight>
    </div>
  )
}
