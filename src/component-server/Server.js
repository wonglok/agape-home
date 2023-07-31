import { useDeferredValue, useState } from 'react'
import { Suspense, useEffect, useMemo } from 'react'

export function ServerRuntime({ writeContextValue, ensureContextValue, ensureWork, result, payload }) {
  let args = {
    writeContextValue: writeContextValue,
    ensureContextValue: ensureContextValue,
    ensureWork: ensureWork,
    result: result,
  }

  return (
    <>
      <OperationStep {...args} iKey={'a'} iVal={1} />

      <OperationStep {...args} iKey={'b'} iVal={2} />

      <OperationStep {...args} iKey={'c'} iVal={3} />

      <OperationStep {...args} iKey={'d'} iVal={4} />

      <OperationStep {...args} iKey={'e'} iVal={5} />
    </>
  )
}

function OperationStep({ ensureContextValue, writeContextValue, ensureWork, result, iKey, iVal }) {
  ensureWork(async () => {
    let obj = {}

    obj[iKey] = iVal

    obj.yo = iKey

    result.list = result.list || []
    result.list.push(obj)

    // if (iVal % 2 === 0) {
    //   throw { bug: iVal + '123', message: 'this is a bad bug' }
    // }
  })
  return null
}
