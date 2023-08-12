import { CodeIcon } from './CodeIcon'
import { CloudIcon } from './CloudIcon'
import { HomeIcon } from './HomeIcon'
// import { StoreIcon } from './StoreIcon'
import { DatabaseIcon } from './DatabaseIcon'
// import { ContainerIcon } from './ContainerIcon'
export function IconBar() {
  return (
    <>
      <HomeIcon></HomeIcon>
      {/* <ContainerIcon></ContainerIcon> */}
      <CodeIcon></CodeIcon>
      <DatabaseIcon></DatabaseIcon>
      <CloudIcon></CloudIcon>
      {/* <StoreIcon></StoreIcon> */}
    </>
  )
}
