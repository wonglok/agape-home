import { SessionProvider } from 'next-auth/react'
import '../src/css/global.css'

export default function Page({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Component {...pageProps}></Component>
      </SessionProvider>
    </>
  )
}
