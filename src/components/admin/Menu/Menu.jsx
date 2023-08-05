import Link from 'next/link'
import { useRouter } from 'next/router'
import { getMenuItems } from './MenuItems'
import { useSwanGroup } from '../Swans/useSwanGroup'
// import { useSwanGroup } from '../Swans/useSwanGroup'

export function Menu() {
  let router = useRouter()
  let swans = useSwanGroup((r) => r.swans)

  let getLinkClass = ({ path }) => {
    if (router.asPath === path) {
      return `mb-2 text-black bg-teal-300 rounded-xl`
    } else {
      return `mb-2 text-black bg-white rounded-xl`
    }
  }

  return (
    <ul className='menu rounded-box mb-3 w-full bg-base-100 px-2 pt-2 shadow-xl first-letter:p-2'>
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
      {/*  */}

      {/*  */}
      <li className='daysfont mb-2 flex items-center rounded-lg bg-gray-200 py-3 text-center text-3xl'>Swan Portal</li>

      {getMenuItems().map((it) => {
        return (
          <div key={it.id}>
            <li className={getLinkClass({ path: it.link }) + '  ' + (it.isSwan ? `ml-3 ` : ``)}>
              <Link href={it.link}>{it.content}</Link>
            </li>
          </div>
        )
      })}

      {/*
            {it.hasSwans && router.pathname.includes(it.link) && router.pathname.includes(`/admin/swan`) && (
              <>
                {swans?.map((sc) => {
                  return (
                    <div className='ml-3' key={sc._id + 'link'}>
                      <li className=''>
                        <Link href={`/admin/swan/${sc._id}`}>{sc.title}</Link>
                      </li>
                    </div>
                  )
                })}
              </>
            )} */}

      {/*  */}
    </ul>
  )
}
