import { useContainer } from './useContainer'

export function AppWindow() {
  let iFrameSRC = useContainer((r) => r.iFrameSRC)
  return <>{<iframe className='h-full w-full' src={iFrameSRC || 'about:blank'}></iframe>}</>
}
