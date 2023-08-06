import { AppRunner } from '@/components/admin/AppsEditor/AppBrowser/AppRunner'
import { useSlug } from '@/components/admin/URLs/useSlug'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function DynamicPage() {
  let router = useRouter()
  let asPath = router.asPath
  let slug = asPath.replace('/', '')
  let [appID, setAppID] = useState(false)
  useEffect(() => {
    useSlug
      .getState()
      .findSlug({ slug: slug })
      .then((r) => {
        if (!r) {
          return
        }
        if (r.linkType === 'code3d') {
          setAppID(r.defaultLinkID)
        }
      })
  }, [slug])

  return <>{appID && <AppRunner appID={appID}></AppRunner>}</>
}

//

//

//
