import { Suspense, useEffect, useRef, useState } from 'react'
import { useProfiles } from './useProfiles'
import { S3Store } from './S3Store'
// import { Canvas } from '@react-three/fiber'
// import { HologramV7WrapperProfile } from '@/components/Hologram/HologramV7'
// import { Box, OrbitControls } from '@react-three/drei'

export function EditAdminUser({ profile }) {
  let displayName = useRef()
  let username = useRef()

  let [_, reload] = useState(0)

  useEffect(() => {
    displayName.current.value = profile.displayName
    username.current.value = profile.username
  }, [profile])

  //
  let newPassword = useRef()

  return (
    <div>
      <div className='w-full max-w-xl'>
        <div className='mb-6 md:flex md:items-center'>
          <div className='md:w-1/3'>
            <label className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' htmlFor='inline-full-name'>
              Business Name
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
              type='text'
              ref={displayName}
              placeholder='Meta Chicken'
            />
          </div>
        </div>

        <div className='mb-6 md:flex md:items-center'>
          <div className='md:w-1/3'>
            <label className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' htmlFor='inline-full-name'>
              Username
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
              type='text'
              ref={username}
              placeholder='Username'
            />
          </div>
        </div>

        {/* <div className='mb-6 md:flex md:items-start'>
          <div className='mt-5 md:w-1/3'>
            <label className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' htmlFor='inline-full-name'>
              Profile Pic Upload
            </label>
          </div>
          <div className='md:w-2/3'>
            <UploadFile
              text='Profile Picture'
              username={profile.username}
              data={profile.profilePicS3}
              onDone={async ({ url, result }) => {
                if (result) {
                  result.url = url
                }
                profile.profilePicS3 = result

                let data = await useProfiles.getState().updateProfile({
                  profile: profile,
                })

                console.log(data)

                reload((x) => x + 1)
              }}
            ></UploadFile>
          </div>
        </div> */}

        <div className='mb-4 md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              onClick={async () => {
                profile.displayName = displayName.current.value
                profile.username = username.current.value

                let data = await useProfiles.getState().updateProfile({
                  profile: profile,
                })
                console.log(data)
              }}
              className='focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none'
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <div className='w-full max-w-xl'>
        {/*  */}
        <div className='mb-6 md:flex md:items-center'>
          <div className='md:w-1/3'>
            <label className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' htmlFor='inline-full-name'>
              New Password
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
              type='text'
              ref={newPassword}
              placeholder='new password'
            />
          </div>
        </div>

        <div className='mb-4 md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              onClick={async () => {
                profile.displayName = displayName.current.value
                profile.username = username.current.value

                let data = await useProfiles.getState().updatePassword({
                  profile: profile,
                  newPassword: newPassword.current.value,
                })

                console.log(data)

                //
              }}
              className='focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none'
            >
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
