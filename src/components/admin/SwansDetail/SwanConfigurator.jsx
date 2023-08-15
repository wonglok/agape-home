import { useEffect } from 'react'
import { useSwanProject } from '../Swans/useSwanProject'

export function SwanConfigurator({ swanID }) {
  useEffect(() => {
    useSwanProject
      .getState()
      .findOne({ object: { _id: swanID } })
      .then((r) => {
        useSwanProject.setState({ activeSwanID: r._id })
        useSwanProject.setState({ activeSwan: r })
      })
  }, [swanID])

  let activeSwan = useSwanProject((r) => r.activeSwan)

  let update = () => {
    useSwanProject.getState().updateOne({ object: activeSwan })
  }

  //
  return (
    <>
      {activeSwan && (
        <>
          {/*  */}

          {/*  */}
        </>
      )}

      <pre className='text-xs'>{JSON.stringify(activeSwan, null, '  ')}</pre>
      {/*  */}
    </>
  )
}
