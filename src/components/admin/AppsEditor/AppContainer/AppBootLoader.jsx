import { useContainer } from './useContainer'
import { useEffect } from 'react'

export function AppBootLoader() {
  useEffect(() => {
    let clean = () => {}
    Promise.resolve().then(async () => {
      await useContainer.getState().onInit()
      await useContainer.getState().startShell()
      await useContainer.getState().installDependencies()
      let cleanup = await useContainer.getState().startDevServer()

      clean = () => {
        //
        cleanup()
        //
      }
    })

    return () => {
      clean()
    }
  }, [])

  return <></>
}
