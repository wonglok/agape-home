import { useEffect, useRef } from 'react'
import { useApps } from '../Apps/useApps'
import { useSlug } from './useSlug'

export function LinkForCode3D({ data }) {
  let apps = useApps((r) => r.apps)
  let refSel = useRef()

  useEffect(() => {
    if (refSel.current) {
      refSel.current.value = data.defaultLinkID
    }
  }, [data, apps])

  useEffect(() => {
    useApps
      .getState()
      .findAll({})
      .then((res) => {
        console.log(res)
        useApps.setState({ apps: res })
        //
      })
  }, [])

  return (
    <>
      <select
        ref={refSel}
        defaultValue={data.defaultLinkID}
        onChange={(ev) => {
          //
          data.defaultLinkID = ev.target.value
          useSlug.getState().updateOne({ object: data })
          useSlug.getState((s) => {
            return { ...s }
          })
        }}
        className=' focus:shadow-outline mr-2 inline-block cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white shadow hover:bg-blue-400 focus:outline-none'
      >
        <option value={undefined}>Select 3D Code</option>

        {apps &&
          apps.map((app) => {
            return (
              <option key={app._id} value={app._id}>
                {/*  */}

                {app.slug}

                {/*  */}
              </option>
            )
          })}
      </select>
    </>
  )
}
