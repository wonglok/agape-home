export function GetLibTest() {
  return (
    <button
      onClick={(ev) => {
        getLib({
          name: '@react-three/fiber',
          version: 'latest',
          onProgress: (progress) => {
            ev.target.innerText = `${progress * 100}%`
            console.log(progress)
          },
        }).then((r) => {
          console.log(r)
        })
      }}
    >
      Get Lib
    </button>
  )
}

export async function getLib({ name, version, onProgress }) {
  return new Promise((resolve, reject) => {
    let bc = new BroadcastChannel(`${name}/${version}`)
    onProgress(0.05)

    bc.onmessage = ({ data }) => {
      if (data.type === 'progress') {
        onProgress(data.progress)
      }
      if (data.type === 'done' && data.name === name && data.version === version) {
        bc.close()
        iframe.src = 'about:blank'
        iframe.onmessage = () => {}
        iframe.remove()
        resolve(data)
      }
    }
    let iframe = document.createElement('iframe')
    iframe.src = `/apm/${name}/${version}`
    iframe.style.display = 'none'

    document.body.appendChild(iframe)
  })
}
