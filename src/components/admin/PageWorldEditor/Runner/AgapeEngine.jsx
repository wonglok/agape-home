import { Background, Joystick, PPSwitch, SceneStateManager } from 'agape-sdk'
import { GameModeAdapter } from './GameModeAdapter'
import { RESTLoader } from './RESTLoader'

export function AgapeEngine({ tRunner }) {
  return (
    <>
      <SceneStateManager
        ReadyCompos={function ReadyCompos({ useStore }) {
          let ready = useStore((r) => r.ready)

          return (
            <>
              {/*  */}
              {/* <Loader projectID={projectID} useStore={useStore}></Loader> */}
              <RESTLoader useStore={useStore}></RESTLoader>

              {ready && (
                <>
                  <GameModeAdapter useStore={useStore}></GameModeAdapter>
                  <Background useStore={useStore}></Background>
                  <PPSwitch useStore={useStore}></PPSwitch>
                </>
              )}

              <tRunner.In>
                <div id='guilayer'></div>
                <JoyStickHTML useStore={useStore}></JoyStickHTML>
              </tRunner.In>
            </>
          )
        }}
      ></SceneStateManager>
    </>
  )
}

function JoyStickHTML({ useStore }) {
  let gameMode = useStore((r) => r.gameMode)
  return <>{gameMode === 'room' && <Joystick></Joystick>}</>
}
