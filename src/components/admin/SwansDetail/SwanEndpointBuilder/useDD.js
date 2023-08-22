import { create } from 'zustand'
import { applyDrag, generateItems } from './util'
import { v4 } from 'uuid'

export const useDD = create((set, get) => {
  return {
    activeOperations: [],

    // operationBlocksOld: generateItems((0).toFixed() + 5, (j) => ({
    //   _id: v4(),
    //   type: 'ops',
    //   method: 'operation unit',

    //   children: generateItems(3, (j) => ({
    //     _id: v4(),
    //     groupName: 'ops',
    //     method: 'sub operations ' + j,
    //   })),
    // })),

    operationBlocks: [
      {
        _id: v4(),
        type: 'database',
        method: 'createDatabaseDocument',
        args: [],
      },

      {
        _id: v4(),
        type: 'database',
        method: 'readDatabaseDocument',
        args: [],
      },

      {
        _id: v4(),
        type: 'database',
        method: 'udpateDatabaseDocument',
        args: [],
      },

      {
        _id: v4(),
        type: 'database',
        method: 'deleteDatabaseDocument',
        args: [],
      },

      {
        _id: v4(),
        type: 'database',
        method: 'listAllDatabaseDocument',
        args: [],
      },

      {
        _id: v4(),
        type: 'database',
        method: 'queryDatabaseDocument',
        args: [],
      },

      {
        _id: v4(),
        type: 'booleanLogic',
        method: 'booleanLogic',
        args: [],
      },
    ],
  }
})
