import Link from 'next/link'

export function HomeIcon() {
  return (
    <Link href={`/admin/3d-code`}>
      <div className=' mx-1  flex flex-col items-center justify-center '>
        <div
          className='flex flex-col items-center justify-center rounded-xl bg-gray-100 shadow-inner shadow-gray-300'
          style={{
            width: '55px',
            height: '55px',
          }}
        >
          <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'>
            <path d='M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z' />
          </svg>
          <div className='text-xs'>Home</div>
        </div>
        <div
          className=' '
          style={{
            visibility: 'hidden',
            boxShadow: '0px 0px 15px 0px cyan',
            marginTop: '2px',
            width: `30px`,
            height: `1px`,
            backgroundColor: 'cyan',
          }}
        ></div>
      </div>
    </Link>
  )
}
