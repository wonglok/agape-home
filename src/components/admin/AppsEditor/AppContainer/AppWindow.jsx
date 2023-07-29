import { useEffect, useRef } from 'react'
import { useContainer } from './useContainer'

export function AppWindow() {
  let iFrameSRC = useContainer((r) => r.iFrameSRC)
  let ref = useRef()
  useEffect(() => {
    let fnc = () => {
      // ref.current.src = ''
      // setTimeout(() => {
      //   ref.current.src = iFrameSRC
      // }, 1)
    }

    window.addEventListener('savedFile', fnc)

    return () => {
      window.removeEventListener('savedFile', fnc)
    }
    ///
  }, [iFrameSRC])

  return <>{<iframe ref={ref} className='h-full w-full' src={iFrameSRC || 'about:blank'}></iframe>}</>
}
