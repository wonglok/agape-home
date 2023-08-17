import { useGLTF } from '@react-three/drei'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AdminGateNoLayout } from '../AdminLayout/AdminGateNoLayout'
import Link from 'next/link'
import { SwanConfigurator } from './SwanConfigurator'
import { useSwanProject } from '../Swans/useSwanProject'

export function SwansDetail() {
  let query = useRouter()?.query || {}
  let swanID = query.swanID || false

  return (
    <>
      {/*  */}
      <style
        dangerouslySetInnerHTML={{
          __html: /* css */ `

@font-face {
  font-family: 'daysregular';
  src: url('/font/days_regular_macroman/Days-webfont.eot');
  src: url('/font/days_regular_macroman/Days-webfont.eot?#iefix') format('embedded-opentype'),
    url('/font/days_regular_macroman/Days-webfont.woff') format('woff'),
    url('/font/days_regular_macroman/Days-webfont.ttf') format('truetype'),
    url('/font/days_regular_macroman/Days-webfont.svg#daysregular') format('svg');
  font-weight: normal;
  font-style: normal;
}

.daysfont {
  font-family: 'daysregular', 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
}

      `,
        }}
      ></style>
      <AdminGateNoLayout>
        {swanID && (
          <div className='m-4 '>
            <div className='daysfont text-2xl'>Welcome to Swan Lake 🦢 </div>
            <div className='daysfont text-sm text-gray-500'>
              Your FullStack Integrated Development Envrionment for Swan Extensions
            </div>

            <div className='text-sm text-gray-400'>SwanID: {swanID}</div>

            <Link href={'/admin/swan'}>
              <div className=' daysfont mt-1 flex  items-center text-gray-800 '>
                <svg
                  className='inline-block h-6 w-6 fill-gray-800'
                  clipRule='evenodd'
                  fillRule='evenodd'
                  strokeLinejoin='round'
                  strokeMiterlimit='2'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z'
                    fillRule='nonzero'
                  />
                </svg>
                Back
              </div>
            </Link>
            <div className='h-3'></div>
            <hr></hr>
            <div className='h-3'></div>
            <div>
              <div className='daysfont text-xl'>Configure Swan Front End</div>
              <div>
                <SwanConfigurator swanID={swanID}></SwanConfigurator>
              </div>
            </div>
          </div>
        )}
      </AdminGateNoLayout>

      {/*  */}
    </>
  )
}
