import { useEffect, useRef } from 'react'
// import { Terminal } from 'xterm'
// import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import { useContainer } from './useContainer'

export function AppTerminal() {
  let terminalRef = useRef()

  useEffect(() => {
    const terminalEl = terminalRef.current

    if (!terminalEl) {
      return
    }

    let work = () => {}
    let resize = () => {
      work()
    }

    Promise.resolve().then(async () => {
      let { Terminal } = await import('xterm')
      const terminal = new Terminal({
        convertEol: true,
      })

      const { FitAddon } = await import('xterm-addon-fit')

      const fitAddon = new FitAddon()

      terminal.loadAddon(fitAddon)
      terminal.open(terminalEl)

      fitAddon.fit()

      work = () => {
        fitAddon.fit()
      }

      useContainer.setState({ terminal })
    })

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])
  return (
    <>
      <div ref={terminalRef} className='h-full w-full'></div>
    </>
  )
}
