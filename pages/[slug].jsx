// import { AppRunner } from '@/components/admin/AppsEditor/AppBrowser/AppRunner'
// import { useSlug } from '@/components/admin/URLs/useSlug'
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'

// export default function Page() {
//   let router = useRouter()
//   let asPath = router.asPath
//   let [appID, setAppID] = useState(false)
//   useEffect(() => {
//     let slug = asPath.replace('/', '')

//     useSlug
//       .getState()
//       .findSlug({ slug: slug })
//       .then((r) => {
//         if (!r) {
//           return
//         }
//         if (r.linkType === 'code3d') {
//           setAppID(r.defaultLinkID)
//         }
//       })
//   }, [asPath])

//   return <>{appID && <AppRunner appID={appID}></AppRunner>}</>
// }

// //

// //

// //
import { DynamicPage } from '@/components/loader/DynamicPage'

export default DynamicPage
