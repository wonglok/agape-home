import { useEffect } from 'react'
import { useContainer } from './useContainer'

export function AppWindow() {
  let iFrameSRC = useContainer((r) => r.iFrameSRC)

  useEffect(() => {
    let fnc = () => {
      let backup = iFrameSRC
      useContainer.setState({ iFrameSRC: 'about:blank' })
      setTimeout(() => {
        useContainer.setState({ iFrameSRC: backup })
      }, 10)
    }

    window.addEventListener('savedFile', fnc)

    return () => {
      window.removeEventListener('savedFile', fnc)
    }
    ///
  }, [iFrameSRC])

  return <>{<iframe className='h-full w-full' src={iFrameSRC || 'about:blank'}></iframe>}</>
}
