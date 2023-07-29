import { useApps } from '../../Apps/useApps'
import { TabCode } from './TabCode'
import { TabContainer } from './TabContainer'

export function TabAdapter() {
  let activeTab = useApps((r) => r.activeTab)
  return (
    <>
      {/*  */}
      {activeTab === 'code' && <TabCode></TabCode>}
      {activeTab === 'container' && <TabContainer></TabContainer>}
      {/*  */}
    </>
  )
}
