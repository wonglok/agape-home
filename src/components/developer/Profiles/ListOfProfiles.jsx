import { useEffect } from 'react'
import { useProfiles } from './useProfiles'
import { useRouter } from 'next/router'
import { S3Store } from './S3Store'

export function ListOfProfiles() {
  let profiles = useProfiles((r) => r.profiles)
  let router = useRouter()

  //
  useEffect(() => {
    useProfiles.getState().loadProfiles()
  }, [])

  return (
    <>
      {profiles.map((r) => {
        return (
          <div key={r._id}>
            <button className='mb-3 mr-3 cursor-default rounded-lg border p-3'>{r.displayName}</button>
            <button
              className='mb-3 mr-3 rounded-lg bg-blue-200 p-3'
              onClick={() => {
                router.push(`/developer/user/${r._id}`)
              }}
            >
              Edit
            </button>

            <button
              className='mb-3 mr-3 rounded-lg bg-red-300 p-3'
              onClick={async () => {
                if (!window.confirm('Delete?')) {
                  return
                }

                await S3Store.deleteFile({
                  file: r.profilePicS3,
                })

                useProfiles.getState().removeProfile(r._id)
              }}
            >
              Remove
            </button>

            {/*  */}
          </div>
        )
      })}
      {/*  */}

      {/*  */}

      {/*  */}
    </>
  )
}
