import { create } from 'zustand'

export const useApps = create(() => {
  let url = `/api/apps`
  return {
    activeTab: 'code',
    activeApp: false,

    apps: [],
    create: ({ object = {} }) => {
      try {
        return (
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              action: 'create',
              payload: {
                object: object,
              },
            }),
            withCredentials: true,
            credentials: 'same-origin',
            mode: 'same-origin',
          })
            //
            .then(async (r) => {
              if (r.ok) {
                return await r.json()
              } else {
                throw await r.text()
              }
            })
            //
            .then((r) => {
              return r.data
            })
        )
      } catch (e) {
        console.error(e)
      }
    },
    find: () => {
      try {
        return (
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              action: 'find',
              payload: {},
            }),
            withCredentials: true,
            credentials: 'same-origin',
            mode: 'same-origin',
          })
            //
            .then(async (r) => {
              if (r.ok) {
                return await r.json()
              } else {
                throw await r.text()
              }
            })
            //
            .then((r) => {
              return r.data
            })
        )
      } catch (e) {
        console.error(e)
      }
    },
    findAll: () => {
      try {
        return (
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              action: 'findAll',
              payload: {},
            }),
            withCredentials: true,
            credentials: 'same-origin',
            mode: 'same-origin',
          })
            //
            .then(async (r) => {
              if (r.ok) {
                return await r.json()
              } else {
                throw await r.text()
              }
            })
            //
            .then((r) => {
              return r.data
            })
        )
      } catch (e) {
        console.error(e)
      }
    },
    findOne: ({ object }) => {
      try {
        return (
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              action: 'findOne',
              payload: { object },
            }),
            withCredentials: true,
            credentials: 'same-origin',
            mode: 'same-origin',
          })
            //
            .then(async (r) => {
              if (r.ok) {
                return await r.json()
              } else {
                throw await r.text()
              }
            })
            //
            .then((r) => {
              return r.data
            })
        )
      } catch (e) {
        console.error(e)
      }
    },
    updateOne: ({ object }) => {
      try {
        return (
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              action: 'updateOne',
              payload: { object },
            }),
            withCredentials: true,
            credentials: 'same-origin',
            mode: 'same-origin',
          })
            //
            .then(async (r) => {
              if (r.ok) {
                return await r.json()
              } else {
                throw await r.text()
              }
            })
            //
            .then((r) => {
              return r.data
            })
        )
      } catch (e) {
        console.error(e)
      }
    },

    deleteOne: ({ object }) => {
      try {
        return (
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              action: 'deleteOne',
              payload: { object },
            }),
            withCredentials: true,
            credentials: 'same-origin',
            mode: 'same-origin',
          })
            //
            .then(async (r) => {
              if (r.ok) {
                return await r.json()
              } else {
                throw await r.text()
              }
            })
            //
            .then((r) => {
              return r.data
            })
        )
      } catch (e) {
        console.error(e)
      }
    },

    cloneOne: ({ object }) => {
      try {
        return (
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              action: 'cloneOne',
              payload: { object },
            }),
            withCredentials: true,
            credentials: 'same-origin',
            mode: 'same-origin',
          })
            //
            .then(async (r) => {
              if (r.ok) {
                return await r.json()
              } else {
                throw await r.text()
              }
            })
            //
            .then((r) => {
              return r.data
            })
        )
      } catch (e) {
        console.error(e)
      }
    },
  }
})
