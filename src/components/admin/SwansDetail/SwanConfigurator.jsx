import { useEffect, useRef } from 'react'
import { useSwanProject } from '../Swans/useSwanProject'
import nprogress from 'nprogress'

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

  let tt = useRef(0)
  let update = () => {
    nprogress.start()
    clearTimeout(tt.current)
    tt.current = setTimeout(() => {
      useSwanProject
        .getState()
        .updateOne({ object: activeSwan })
        .then((r) => {
          nprogress.done()
        })
    }, 100)
  }

  //
  return (
    <>
      {activeSwan && (
        <>
          {/*  */}
          <div className='flex'>
            <input
              className='bg-gray-200'
              defaultValue={activeSwan.developmentURL}
              onChange={(ev) => {
                useSwanProject.setState((st) => {
                  return {
                    ...st,
                    activeSwan: {
                      ...st.activeSwan,
                      developmentURL: ev.target.value || '',
                    },
                  }
                })
                update()
              }}
            ></input>
            <input
              className='bg-gray-200'
              defaultValue={activeSwan.developmentSlug}
              onChange={(ev) => {
                useSwanProject.setState((st) => {
                  return {
                    ...st,
                    activeSwan: {
                      ...st.activeSwan,
                      developmentSlug: ev.target.value || '',
                    },
                  }
                })
                update()
              }}
            ></input>
          </div>
          {/*  */}
        </>
      )}

      <pre className='text-xs'>{JSON.stringify(activeSwan, null, '  ')}</pre>
      {/*  */}
    </>
  )
}
