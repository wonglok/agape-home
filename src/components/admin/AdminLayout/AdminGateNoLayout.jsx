import { signIn, useSession } from 'next-auth/react'
import { AdminLayout } from './AdminLayout'
import { Triangle } from './Triangle'

export function AdminGateNoLayout({ children }) {
  //
  let sess = useSession()

  // console.log(sess?.data?.user?.role)

  //
  return (
    <>
      {sess.status === 'loading' && (
        <>
          <Triangle></Triangle>
        </>
      )}

      {sess.status === 'authenticated' && <>{children}</>}

      {sess.status === 'unauthenticated' && (
        <>
          <div className='flex h-full w-full items-center justify-center'>
            <button
              className='btn-primary btn'
              onClick={() => {
                signIn()
              }}
            >
              Plaese Login
            </button>
          </div>
        </>
      )}
    </>
  )
}
