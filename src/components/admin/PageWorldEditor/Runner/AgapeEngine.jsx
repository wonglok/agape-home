import { Background, Joystick, PPSwitch } from 'agape-sdk'
import { GameModeAdapter } from './GameModeAdapter'
import { useAgapeStore } from './useAgapeStore'

export function AgapeEngine({ tunnelRun }) {
  return (
    <>
      <GameModeAdapter useStore={useAgapeStore}></GameModeAdapter>
      <Background useStore={useAgapeStore}></Background>
      <PPSwitch useStore={useAgapeStore}></PPSwitch>

      <tunnelRun.In>
        <div id='guilayer'></div>
        <JoyStickHTML useStore={useAgapeStore}></JoyStickHTML>
      </tunnelRun.In>
    </>
  )
}

function JoyStickHTML({ useStore }) {
  let gameMode = useStore((r) => r.gameMode)
  return <>{gameMode === 'room' && <Joystick></Joystick>}</>
}

//
