import { WebContainer } from '@webcontainer/api'

export const getDone = ({ set, get }) => {
  return {
    //

    //
    /** @type {import('@webcontainer/api').WebContainer}  */
    webcontainerInstance: false,
    onInit: async () => {
      let files = get().files
      // textareaEl.value = files['index.js'].file.contents
      // textareaEl.addEventListener('input', (e) => {
      //   writeIndexJS(e.currentTarget.value)
      // })
      if (window.booted) {
        set({ bootPromise: window.booted })
      }
      if (!get().bootPromise) {
        window.booted = WebContainer.boot()
        set({ bootPromise: window.booted })
      }

      let webcontainerInstance = await get().bootPromise

      await webcontainerInstance.mount(files)
    },
    installDependencies: async () => {
      let webcontainerInstance = await get().bootPromise
      let args = [`install`]
      const installProcess = await webcontainerInstance.spawn('yarn', args)
      installProcess.output.pipeTo(
        new WritableStream({
          write(data) {
            let terminal = get().terminal
            if (terminal) {
              terminal.write(data)
            }
          },
        }),
      )

      // Wait for install command to exit
      let exitCode = await installProcess.exit

      return exitCode
    },
    startShell: async () => {
      /**
       * @param {Terminal} terminal
       */
      let terminal = get().terminal

      let webcontainerInstance = await get().bootPromise
      const shellProcess = await webcontainerInstance.spawn('jsh', {
        terminal: {
          cols: terminal.cols,
          rows: terminal.rows,
        },
      })
      shellProcess.output.pipeTo(
        new WritableStream({
          write(data) {
            terminal.write(data)
          },
        }),
      )

      const input = shellProcess.input.getWriter()

      terminal.onData((data) => {
        input.write(data)
      })

      return shellProcess
    },
    startDevServer: async () => {
      let webcontainerInstance = await get().bootPromise
      // Run `npm run start` to start the Express app
      let process = await webcontainerInstance.spawn('yarn', ['start'])

      // Wait for `server-ready` event
      webcontainerInstance.on('server-ready', (port, url) => {
        set({ iFrameSRC: url, port })
      })

      return () => {
        //
      }
    },

    writeToFS: async ({ path, contents }) => {
      let webcontainerInstance = await get().bootPromise
      await webcontainerInstance.fs.writeFile(path, contents)
    },

    //
  }
}
