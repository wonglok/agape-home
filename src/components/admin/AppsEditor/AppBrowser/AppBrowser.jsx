import { useRouter } from 'next/router'

export function AppBrowser() {
  let router = useRouter()
  let { appID } = router.query
  return (
    <>
      {/*  */}
      <iframe src={`/admin/editor-runner/${appID}`} style={{ width: '100%', height: '100%' }} />
      {/*  */}
    </>
  )
}
