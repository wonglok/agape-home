import { signIn, signOut, useSession } from 'next-auth/react'
import { AdminLayoutDeveloper } from './AdminLayoutDeveloper'
import { Triangle } from './Triangle'

export function DeveloperGate({ children }) {
  //
  let sess = useSession()

  console.log(sess?.data?.user?.role)

  //
  return (
    <>
      {sess.status === 'loading' && (
        <>
          <Triangle></Triangle>
        </>
      )}

      {sess.status === 'authenticated' && (
        <>
          {sess?.data?.user?.role === 'devroot' && (
            <>
              <AdminLayoutDeveloper>{children}</AdminLayoutDeveloper>
            </>
          )}

          {sess?.data?.user?.role !== 'devroot' && (
            <>
              <div className='flex h-full w-full items-center justify-center'>
                <button
                  className='btn-primary btn'
                  onClick={() => {
                    signOut().then(
                      () => {
                        signIn()
                      },
                      () => {
                        signIn()
                      },
                    )
                  }}
                >
                  Plaese Login with right account
                </button>
              </div>
            </>
          )}
        </>
      )}

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
