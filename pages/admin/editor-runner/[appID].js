import { AdminGateNoLayout } from '@/components/admin/AdminLayout/AdminGateNoLayout'
import { AppRunner } from '@/components/admin/AppsEditor/AppBrowser/AppRunner'
import { useRouter } from 'next/router'
import { Component } from 'react'

export default function Page() {
  let router = useRouter()

  return (
    <AdminGateNoLayout>
      {router?.query?.appID && <AppRunner appID={router?.query?.appID}></AppRunner>}
    </AdminGateNoLayout>
  )
}
