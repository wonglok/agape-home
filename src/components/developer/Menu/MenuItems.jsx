const getID = () => {
  return '_' + Math.random().toString(36).slice(2, 9)
}
//

export const MenuItems = [
  {
    id: getID(),
    link: '/developer',
    content: (
      <>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='mr-1 h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
        My Site
      </>
    ),
  },
  {
    id: getID(),
    link: '/developer/user-create',
    content: (
      <>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='mr-1 h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
        Create Admin
      </>
    ),
  },
  {
    id: getID(),
    link: '/developer/user',
    content: (
      <>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='mr-1 h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
        Manage Admins
      </>
    ),
  },
]
