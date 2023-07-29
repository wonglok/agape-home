import { useContainer } from './useContainer'
import { useEffect } from 'react'

export function AppBootLoader() {
  useEffect(() => {
    Promise.resolve().then(async () => {
      await useContainer
        .getState()
        .onInit()
        .then(() => {})
      await useContainer.getState().startShell()
      await useContainer.getState().installDependencies()
      await useContainer.getState().startDevServer()
    })
  }, [])

  return <></>
}
