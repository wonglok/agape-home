import { AppRunner } from '@/components/admin/AppsEditor/AppBrowser/AppRunner'
import { useSlug } from '@/components/admin/URLs/useSlug'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Page() {
  let router = useRouter()
  let asPath = router.asPath
  let [appID, setAppID] = useState(false)
  useEffect(() => {
    useSlug
      .getState()
      .findSlug({ slug: asPath.replace('/', '') })
      .then((r) => {
        console.log(r)
        if (r.linkType === 'code3d') {
          setAppID(r.defaultLinkID)
        }
      })
  }, [asPath])
  //findSlug

  return <>{appID && <AppRunner appID={appID}></AppRunner>}</>
}
