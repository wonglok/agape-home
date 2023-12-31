import { signIn, useSession } from 'next-auth/react'
import { AdminLayout } from './AdminLayout'
import { Triangle } from './Triangle'

export function AdminGate({ children }) {
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

      {sess.status === 'authenticated' && <AdminLayout user={sess?.data?.user}>{children}</AdminLayout>}

      {sess.status === 'unauthenticated' && (
        <>
          <div className='flex h-full w-full items-center justify-center'>
            <button
              className='btn-primary btn'
              onClick={() => {
                signIn()
              }}
            >
              Please Login
            </button>
          </div>
        </>
      )}
    </>
  )
}
