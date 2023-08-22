// import { DragDrop } from './DragDrop'

import { DND } from './DND'
import { OperationBlock } from './OperationBlock'
import { useDD } from './useDD'

export function SwanEndpointBuilder({}) {
  let cards = useDD((r) => r.cards)

  return (
    <>
      <div className='h-full w-full'>
        <DND cards={cards}></DND>
      </div>
    </>
  )
}
