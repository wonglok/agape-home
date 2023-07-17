import { useEffect } from 'react'
import { useSlug } from './useSlug'
import { UpdateSlug } from './UpdateSlug'

export function ListSlug() {
  let slugs = useSlug((r) => r.slugs)

  useEffect(() => {
    useSlug
      .getState()
      .find({})
      .then((data) => {
        useSlug.setState({ slugs: data })
      })
  }, [])
  return (
    <>
      {/*  */}

      {slugs.map((s, si) => {
        return (
          <div key={s.slug + si}>
            <UpdateSlug data={s}>{JSON.stringify(s.slug)}</UpdateSlug>
          </div>
        )
      })}

      {/*  */}
    </>
  )
}
