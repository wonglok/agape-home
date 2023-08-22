import { create } from 'zustand'
import { applyDrag, generateItems } from './util'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const columnNames = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod']

const cardColors = [
  'azure',
  'beige',
  'bisque',
  'blanchedalmond',
  'burlywood',
  'cornsilk',
  'gainsboro',
  'ghostwhite',
  'ivory',
  'khaki',
]
const pickColor = (e) => {
  let rand = Math.floor(e * 10)
  return cardColors[rand]
}

export const useDD = create((set, get) => {
  return {
    //

    // operationBlocks: [
    //   {
    //     id: `column000`,
    //     type: 'container',
    //     name: 'name000',
    //     props: {
    //       orientation: 'vertical',
    //       className: 'card-container',
    //     },
    //     children: generateItems((0).toFixed() + 5, (j) => ({
    //       type: 'draggable',
    //       id: `000${j}`,
    //       props: {
    //         className: 'card',
    //         style: { backgroundColor: pickColor(0 / 5) },
    //       },
    //       data: lorem.slice(0, Math.floor((0 / 5) * 150) + 30),
    //     })),
    //   },
    // ],

    activeOperations: generateItems((0).toFixed() + 5, (j) => ({
      type: 'draggable',
      id: `001${j}`,
      props: {
        className: 'card',
        style: { backgroundColor: pickColor(0 / 5) },
      },
      data: lorem.slice(0, Math.floor((0 / 5) * 150) + 30),
    })),

    operationBlocks: generateItems((0).toFixed() + 5, (j) => ({
      type: 'draggable',
      id: `002${j}`,
      props: {
        className: 'card',
        style: { backgroundColor: pickColor(0 / 5) },
      },
      data: lorem.slice(0, Math.floor((0 / 5) * 150) + 10),

      children: generateItems((0).toFixed() + 2, (j) => ({
        type: 'draggable',
        id: `003${j}`,
        props: {
          className: 'card',
          style: { backgroundColor: pickColor(0 / 5) },
        },
        data: lorem.slice(0, Math.floor((0 / 5) * 150) + 10),
      })),
    })),

    getCardPayload(columnId, index) {
      return get().board.children.filter((p) => p.id === columnId)[0].children[index]
    },

    onColumnDrop(dropResult) {
      const board = Object.assign({}, get().board)
      board.children = applyDrag(board.children, dropResult)
      set({
        board,
      })
    },

    onCardDrop(columnId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const board = Object.assign({}, get().board)
        const column = board.children.filter((p) => p.id === columnId)[0]
        const columnIndex = board.children.indexOf(column)

        const newColumn = Object.assign({}, column)
        newColumn.children = applyDrag(newColumn.children, dropResult)
        board.children.splice(columnIndex, 1, newColumn)

        set({
          board,
        })
      }
    },
  }
})
