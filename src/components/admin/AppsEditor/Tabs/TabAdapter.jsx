import { useApps } from '../../Apps/useApps'
import { TabCode } from './TabCode'
// import { TabContainer } from './TabContainer'

export function TabAdapter() {
  let activeTab = useApps((r) => r.activeTab)

  return (
    <>
      {/*  */}
      <TabCode></TabCode>

      {activeTab === 'cloud' && (
        <div className=' absolute left-0 top-0 h-full w-full bg-white bg-opacity-80'>
          {/*  */}
          123
          {/*  */}
        </div>
      )}
      {/* {activeTab === 'container' && <TabContainer></TabContainer>} */}
      {/*  */}
    </>
  )
}
