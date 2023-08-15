import { useGLTF } from '@react-three/drei'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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

      <div className='p-4 '>
        <div className='daysfont text-2xl'>Welcome to Swan Lake 🦢 </div>
        <div className='daysfont  text-sm text-gray-500'>
          Your FullStack Integrated Development Envrionment for Swan Extensions
        </div>

        {swanID && <div className='text-sm text-gray-400'>SwanID: {swanID}</div>}
      </div>

      {/*  */}
    </>
  )
}
