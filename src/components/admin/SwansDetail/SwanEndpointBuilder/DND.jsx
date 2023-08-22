import React, { Component, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { useDD } from './useDD'
import { applyDrag } from './util'

// class Cards extends Component {
//   constructor({ ...props }) {
//     super()

//     this.onColumnDrop = this.onColumnDrop.bind(this)
//     this.onCardDrop = this.onCardDrop.bind(this)
//     this.getCardPayload = this.getCardPayload.bind(this)
//     this.state = {}
//   }

//   render() {
//     return (

//     )
//   }
// }

function Operations({ behaviour = 'move', list, onSave }) {
  return (
    <>
      <Container
        behaviour={behaviour}
        groupName='col'
        onDragStart={(e) => console.log('drag started', e)}
        onDragEnd={(e) => console.log('drag end', e)}
        onDrop={(e) => {
          onSave({ list: applyDrag([...list], e) })
        }}
        getChildPayload={(index) => {
          return list[index]
        }}
        // dragClass='card-ghost'
        // dropClass='card-ghost-drop'
        onDragEnter={() => {
          // console.log('drag enter:', block.id)
        }}
        onDragLeave={() => {
          // console.log('drag leave:', block.id)
        }}
        onDropReady={(p) => console.log('Drop ready: ', p)}
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'drop-preview',
        }}
        dropPlaceholderAnimationDuration={200}
      >
        {list.map((card) => {
          return (
            <Draggable key={card.id}>
              <div className=''>
                <p>{card.data}</p>

                <div className='ml-2'>
                  {card.children && (
                    <>
                      <Operations
                        behaviour={behaviour}
                        list={card.children}
                        onSave={({ list: sublist }) => {
                          card.children = [...sublist]
                          onSave({ list: [...list] })
                        }}
                      ></Operations>
                    </>
                  )}
                </div>
              </div>
            </Draggable>
          )
        })}
      </Container>
    </>
  )
}

export function DND() {
  // let board = useDD((s) => s.board)
  // let cards = useDD((r) => r.cards)
  // let onColumnDrop = useDD((s) => s.onColumnDrop)
  let operationBlocks = useDD((r) => r.operationBlocks)
  let activeOperations = useDD((r) => r.activeOperations)
  return (
    <>
      <div className='h-full w-full'>
        <div className='h-full w-full'>
          <div className='bg-gray-300' style={{ width: `100%`, height: `80px` }}>
            <div className=''>Swan Endpoint Builder</div>
          </div>

          <div className='flex bg-gray-100' style={{ width: `100%`, height: `calc(100% - 80px)` }}>
            <div className='bg-gray-200' style={{ width: `280px`, height: `calc(100%)` }}>
              Left menu
            </div>
            <div className='bg-gray-200' style={{ width: `calc((100% - 280px) / 2)`, height: `calc(100%)` }}>
              <div className='' style={{ height: `100%`, width: `100%` }}>
                <div className='bg-gray-100' style={{ width: `100%`, height: `calc(100%)` }}>
                  <div className='h-full w-full bg-gray-50'>
                    {activeOperations && (
                      <>
                        <Operations
                          behaviour={'move'}
                          list={activeOperations}
                          onSave={({ list }) => {
                            useDD.setState({ activeOperations: list })
                          }}
                        ></Operations>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className='border-l border-gray-500 bg-gray-200'
              style={{ width: `calc((100% - 280px) / 2)`, height: `calc(100%)` }}
            >
              <div className='flex-col bg-gray-400' style={{ width: `100%`, height: `calc(100%)` }}>
                <div className='flex pl-1 pt-1' style={{ height: `28px`, width: `100%` }}>
                  <div className='relative mr-2 inline-flex h-full items-center rounded-t bg-gray-100 px-2 text-xs'>
                    AGAPE
                  </div>

                  <div className='mr-2 inline-flex h-full items-center rounded-t bg-gray-200 px-2 text-xs text-gray-400'>
                    Database Schema
                  </div>

                  <div className='mr-2 inline-flex h-full items-center rounded-t bg-gray-200 px-2 text-xs text-gray-400'>
                    Database Insepction
                  </div>
                </div>
                <div className='' style={{ height: `calc(100% - 28px)`, width: `100%` }}>
                  <div className='h-full w-full bg-gray-100  text-sm'>
                    {operationBlocks && (
                      <>
                        {operationBlocks && (
                          <>
                            <Operations
                              behaviour={'copy'}
                              list={operationBlocks}
                              onSave={({ list }) => {
                                useDD.setState({ operationBlocks: list })
                              }}
                            ></Operations>
                          </>
                        )}
                      </>
                    )}

                    {/*  */}
                    {/* <div className='mr-2 inline-flex cursor-grab bg-gray-200 px-5 py-2 text-xs'>Read DB</div>
                    <div className='mr-2 inline-flex cursor-grab bg-gray-200 px-5 py-2 text-xs'>Read DB</div>
                    <div className='mr-2 inline-flex cursor-grab bg-gray-200 px-5 py-2 text-xs'>Read DB</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
