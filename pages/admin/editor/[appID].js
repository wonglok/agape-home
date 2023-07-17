import { useApps } from '@/components/admin/Apps/useApps'
import { AppEditor } from '@/components/admin/AppsEditor/AppEditor'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AppID() {
  let router = useRouter()
  let query = router.query || {}
  let appID = query.appID || ''
  let activeApp = useApps((s) => s.activeApp)

  useEffect(() => {
    //activeApp
    if (!appID) {
      return
    }
    useApps
      .getState()
      .findOne({ object: { _id: appID } })
      .then((r) => {
        useApps.setState({ activeApp: r })
      })
  }, [appID])

  return (
    <>
      {activeApp && (
        <>
          <AppEditor />
        </>
      )}
    </>
  )
}
