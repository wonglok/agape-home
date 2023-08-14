import { useProfiles } from './useProfiles'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'

export function CreateAdminUser() {
  //

  let router = useRouter()
  let displayName = useRef()
  let username = useRef()
  let password = useRef()

  let [st, setSt] = useState('')
  let [obj, setObj] = useState('')
  return (
    <div>
      <div className='w-full max-w-sm'>
        <div className='mb-6 md:flex md:items-center'>
          <div className='md:w-1/3'>
            <label className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' htmlFor='inline-full-name'>
              Display Name
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              required
              className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
              type='text'
              ref={displayName}
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

        <div className='mb-6 md:flex md:items-center'>
          <div className='md:w-1/3'>
            <label className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' htmlFor='inline-full-name'>
              Password
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
              type='password'
              ref={password}
              placeholder='mybusiness.com'
            />
          </div>
        </div>

        <div className='mb-4 md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              onClick={async () => {
                try {
                  let data = await useProfiles.getState().createProfile({
                    displayName: displayName.current.value,
                    username: username.current.value,
                    password: password.current.value,

                    // holoJsonUrl: form.holoJsonUrl || '',
                    // holoPosterUrl: form.holoPosterUrl || '',
                    // holoVideoUrl: form.holoVideoUrl || '',
                    // holoGUIConfig: form.holoGUIConfig || holoGUIConfig,

                    // readyPlayerMeUrl: '',
                  })

                  // console.log(data)

                  setSt('✅')
                  setObj(data)
                } catch (e) {
                  setSt(' ❌ ')
                  setTimeout(() => {
                    setSt('')
                  }, 1500)
                  // console.log(e)
                }
              }}
              className=' focus:shadow-outline mb-3 mr-3 rounded bg-blue-500 px-4 py-2 font-bold text-white shadow hover:bg-blue-400 focus:outline-none'
            >
              Create {st}
            </button>
            {/*  */}

            {/*  */}
            {obj && (
              <button
                onClick={async () => {
                  router.push(`/system/user/${obj._id}`)
                }}
                className='focus:shadow-outline rounded bg-green-500 px-4 py-2 font-bold text-white shadow hover:bg-green-400 focus:outline-none'
              >
                Edit User
              </button>
            )}
          </div>
        </div>

        {/* <div className='mb-6 md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <label className='block font-bold text-gray-500 md:w-2/3'>
            <input className='mr-2 leading-tight' type='checkbox' />
            <span className='text-sm'>Send me your newsletter!</span>
          </label>
        </div> */}
      </div>
    </div>
  )
}

// ;<UpdateProfile></UpdateProfile>
//
