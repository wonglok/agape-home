import { useApps } from '../../Apps/useApps'
import { TabCode } from './TabCode'

export function TabAdapter() {
  let activeTab = useApps((r) => r.activeTab)
  return (
    <>
      {/*  */}
      {activeTab === 'code' && <TabCode></TabCode>}
      {/*  */}
    </>
  )
}
