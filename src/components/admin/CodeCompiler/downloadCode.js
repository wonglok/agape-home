import { WebContainer } from '@webcontainer/api'
import { getFiles } from './getFiles'
import nProgress from 'nprogress'
import 'xterm/css/xterm.css'
// import { FitAddon } from 'xterm-addon-fit'
import { useRef } from 'react'

export function CodeCompiler({}) {
  let terminalEl = useRef()
  let iframeEl = useRef()
  return (
    <>
      <div ref={iframeEl}></div>
      <div ref={terminalEl}></div>
    </>
  )
}

export async function downloadCode({ name = 'three', version = '' }) {
  //

  // if (ev.target.isLoading) {
  //   return
  // }
  // ev.target.innerText = 'Loading...'
  // ev.target.isLoading = true

  // let reset = () => {
  //   ev.target.innerText = 'Test'
  //   ev.target.isLoading = false
  // }
  try {
    nProgress.set(0.6)

    return buildCode({ name: name, version: version }).then((outputs) => {
      nProgress.set(1)

      nProgress.done()

      return outputs
    })
  } catch (e) {
    nProgress.done()
    console.log(e)
  }
  nProgress.done()
}

// async function startDevServer({ webcontainerInstance, onURL }) {
//   // Run `npm run start` to start the Express app
//   await webcontainerInstance.spawn('npm', ['run', 'dev'])
//   // Wait for `server-ready` event
//   webcontainerInstance.on('server-ready', (port, url) => {
//     console.log(port, url)
//     onURL({ url, port })
//   })
// }

// /**
//  * @param {Terminal} terminal
//  */
// async function startShell({ webcontainerInstance, terminal }) {
//   const shellProcess = await webcontainerInstance.spawn('jsh', {
//     terminal: {
//       cols: terminal.cols,
//       rows: terminal.rows,
//     },
//   })
//   shellProcess.output.pipeTo(
//     new WritableStream({
//       write(data) {
//         terminal.write(data)
//       },
//     }),
//   )

//   const input = shellProcess.input.getWriter()

//   terminal.onData((data) => {
//     input.write(data)
//   })

//   return shellProcess
// }

async function buildCode({ name = 'three', version = false }) {
  if (!window.webcontainerInstanceLoaded) {
    window.webcontainerInstanceLoaded = true
    nProgress.set(0.2)

    window.webcontainerInstancePromise = new Promise(async (resolve) => {
      let webcontainerInstance = await WebContainer.boot()
      // let FitAddon = (await import('xterm-addon-fit')).FitAddon
      // let Terminal = (await import('xterm')).Terminal

      // const fitAddon = new FitAddon()

      // const terminal = new Terminal({
      //   convertEol: true,
      // })

      // terminal.loadAddon(fitAddon)
      // terminalEl.current.innerHTML = ''
      // terminal.open(terminalEl.current)

      // fitAddon.fit()

      // const shellProcess = await startShell({ webcontainerInstance, terminal })
      // window.addEventListener('resize', () => {
      //   fitAddon.fit()
      //   shellProcess.resize({
      //     cols: terminal.cols,
      //     rows: terminal.rows,
      //   })
      // })

      resolve({ webcontainerInstance })
    })
  }

  let { webcontainerInstance } = await window.webcontainerInstancePromise

  nProgress.set(0.3)

  // let name = 'three'
  // let version = '0.150.0'

  await webcontainerInstance.mount(await getFiles({ name: name }))

  //
  nProgress.set(0.5)
  await installDependencies({ webcontainerInstance })
  await installDependencies({ name: name, version: version, webcontainerInstance })

  const buildProcess = await webcontainerInstance.spawn('npm', ['run', 'build'])

  // buildProcess.output.pipeTo(
  //   new WritableStream({
  //     async write(data) {
  //       console.log(`${data}`)
  //     },
  //   }),
  // )

  await buildProcess.exit
  await buildProcess.kill()

  const files = await webcontainerInstance.fs.readdir('/dist')

  let output = []
  for (let fileName of files) {
    const fileContent = await webcontainerInstance.fs.readFile(`./dist/${fileName}`, 'utf8')
    // console.log(fileName, fileContent)

    output.push({
      fileName,
      content: fileContent,
    })
  }

  return output
}

async function installDependencies({ terminal, name, version, webcontainerInstance }) {
  // Install dependencies
  let args = ['install']
  if (name) {
    if (version) {
      args.push(`${name}@${version}`)
    } else {
      args.push(name)
    }
    args.push('--save')
  }

  const installProcess = await webcontainerInstance.spawn('npm', args)
  // installProcess.output.pipeTo(
  //   new WritableStream({
  //     write(data) {
  //       console.log(data)
  //       // terminal.write(data)
  //     },
  //   }),
  // )

  // Wait for install command to exit
  let exitCode = await installProcess.exit

  if (exitCode !== 0) {
    throw new Error('Installation failed')
  }
}
