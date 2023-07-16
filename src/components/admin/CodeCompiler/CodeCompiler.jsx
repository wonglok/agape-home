import { WebContainer } from '@webcontainer/api'
import { getFiles } from './getFiles'
import nProgress from 'nprogress'

export function CodeCompiler({}) {
  return (
    <>
      <button
        onClick={async () => {
          //

          if (!window.webcontainerInstanceLoaded) {
            window.webcontainerInstanceLoaded = true

            nProgress.set(0.2)
            let newInst = WebContainer.boot()
            window.webcontainerInstancePromise = newInst
          }

          let webcontainerInstance = await window.webcontainerInstancePromise
          nProgress.set(0.3)
          await webcontainerInstance.mount(await getFiles())

          nProgress.set(0.5)
          const exitCode = await installDependencies({ webcontainerInstance })

          if (exitCode !== 0) {
            throw new Error('Installation failed')
          }

          nProgress.set(0.6)
          await buildCode({ webcontainerInstance })
          nProgress.set(1)
        }}
      >
        Test
      </button>
    </>
  )
}

async function buildCode({ webcontainerInstance }) {
  const buildProcess = await webcontainerInstance.spawn('npm', ['run', 'build'])

  buildProcess.output.pipeTo(
    new WritableStream({
      async write(data) {
        // console.log(data)
      },
    }),
  )

  await buildProcess.exit
  await buildProcess.kill()

  const files = await webcontainerInstance.fs.readdir('/dist')

  for (let fileName of files) {
    const fileContent = await webcontainerInstance.fs.readFile(`./dist/${fileName}`, 'utf8')

    console.log(fileName, fileContent)
  }
}

async function installDependencies({ webcontainerInstance }) {
  // Install dependencies
  const installProcess = await webcontainerInstance.spawn('npm', ['install'])
  installProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        console.log(data)
      },
    }),
  )

  //
  // Wait for install command to exit
  return installProcess.exit
}
