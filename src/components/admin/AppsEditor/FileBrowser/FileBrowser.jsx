/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Input, Tree } from 'antd'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useApps } from '../../Apps/useApps'
import { usePackages } from '../../Apps/usePackages'
import { useModules } from '../../Apps/useModules'
import { useCodeGroups } from '../../Apps/useCodeGroups'
import { useOSFiles } from './useOSFiles'
import { useCodeFiles } from '../../Apps/useCodeFiles'

//
export function FileBrowser() {
  let activeApp = useApps((r) => r.activeApp)
  let appPackages = useOSFiles((r) => r.appPackages)
  let appModules = useOSFiles((r) => r.appModules)
  let appCodeGroups = useOSFiles((r) => r.appCodeGroups)
  let appCodeFiles = useOSFiles((r) => r.appCodeFiles)

  let activePackageID = useOSFiles((r) => r.activePackageID)
  let activeModuleID = useOSFiles((r) => r.activeModuleID)
  let activeCodeGroupID = useOSFiles((r) => r.activeCodeGroupID)
  let activeCodeFileID = useOSFiles((r) => r.activeCodeFileID)

  let load = useCallback(async ({ activeApp }) => {
    let appPackages = await usePackages.getState().findByAppID({ appLoaderID: activeApp._id })
    let appModules = await useModules.getState().findByAppID({ appLoaderID: activeApp._id })
    let appCodeGroups = await useCodeGroups.getState().findByAppID({ appLoaderID: activeApp._id })
    let appCodeFiles = await useCodeFiles.getState().findByAppID({ appLoaderID: activeApp._id })

    useOSFiles.setState({ appPackages, appModules, appCodeGroups, appCodeFiles })

    return { appPackages, appModules, appCodeGroups, appCodeFiles }
  }, [])

  useEffect(() => {
    if (!activeApp) {
      return
    }

    load({ activeApp }).then(({ appPackages }) => {
      useOSFiles.setState({ activePackageID: appPackages[0]?._id })
    })

    return () => {
      //!SECTION
    }
  }, [activeApp, load])

  useEffect(() => {
    return () => {
      useOSFiles.setState({
        appPackages: [],
        appModules: [],
        appCodeGroups: [],
        appCodeFiles: [],
        activePackageID: '',
        activeModuleID: '',
        activeCodeGroupID: '',
        activeCodeFileID: '',
      })
    }
  }, [])

  let addEmptyPackage = async () => {
    let newAp = await usePackages
      .getState()
      .create({ object: { appLoaderID: activeApp._id, packageName: 'newPackage' } })

    let newM = await useModules.getState().create({
      object: { appLoaderID: activeApp._id, appPackageID: newAp._id, moduleName: 'newModule' },
    })

    let newCG = await useCodeGroups.getState().create({
      object: {
        appLoaderID: activeApp._id,
        appModuleID: newM._id,
        groupName: 'newCodeGroups',
      },
    })

    let newCF = await useCodeFiles.getState().create({
      object: {
        appLoaderID: activeApp._id,
        appCodeGroupID: newCG._id,
        fileName: 'newCode.js',
        content: '',
      },
    })

    // console.log(newCF)
    await load({ activeApp })
  }

  let scroller = useRef()
  return (
    <>
      <div
        onScrollCapture={(ev) => {
          ev.stopPropagation()
          ev.preventDefault()
        }}
        className='h-full w-full overflow-scroll bg-white'
        ref={scroller}
      >
        <div className='' style={{ width: `calc(280px * 4)` }}>
          <div
            className='inline-block overflow-scroll border-r'
            style={{ height: `280px`, width: `280px` }}
            onClick={() => {
              scroller.current.scrollTo(-140 + 280 * 0, 0)
            }}
            onScrollCapture={(ev) => {
              ev.stopPropagation()
              ev.preventDefault()
            }}
          >
            <div className=' mb-2 border border-gray-200 bg-gray-100 p-2 text-xs text-gray-500'>
              <span onClick={addEmptyPackage} className='cursor-pointer underline'>
                + Add Package
              </span>
            </div>

            {appPackages.map((ap, apIDX) => {
              //
              return (
                <div
                  className='group flex items-center px-2'
                  onClick={() => {
                    useOSFiles.setState({ activePackageID: ap._id })
                  }}
                  key={ap._id}
                >
                  <Input
                    key={ap._id + 'package'}
                    className='mb-1'
                    defaultValue={ap.packageName}
                    onChange={(ev) => {
                      //

                      let value = ev.target.value
                      ap.packageName = value

                      useOSFiles.setState({ appPackages: [...appPackages] })

                      clearTimeout(ev.target.timer)
                      ev.target.timer = setTimeout(async () => {
                        usePackages.getState().updateOne({ object: ap })
                      }, 1000)
                    }}
                    onFocus={() => {
                      //
                      useOSFiles.setState({
                        activePackageID: activePackageID,
                        activeModuleID: false,
                        activeCodeGroupID: false,
                        activeCodeFileID: false,
                      })
                    }}
                  ></Input>

                  <img
                    key={ap._id + 'del'}
                    className='mb-1 hidden h-6 w-6 group-hover:block'
                    onClick={async () => {
                      //
                      if (window.prompt('remove package?', ap.packageName) === ap.packageName) {
                        await usePackages.getState().deleteOne({ object: ap })
                        useOSFiles.setState({ activePackageID: '' })
                        await load({ activeApp })
                      }
                    }}
                    src={`/gui/remove.svg`}
                  ></img>
                </div>
              )
            })}
          </div>
          {
            <div
              className='inline-block overflow-scroll overflow-x-hidden border-r'
              style={{ height: `280px`, width: `280px` }}
              onClick={() => {
                scroller.current.scrollTo(-140 + 280 * 1, 0)
              }}
            >
              <div className=' mb-2 border border-gray-200 bg-gray-100 p-2 text-xs text-gray-500'>
                <span
                  onClick={async () => {
                    //
                    await useModules.getState().create({
                      object: { appLoaderID: activeApp._id, appPackageID: activePackageID, moduleName: 'newModule' },
                    })

                    await load({ activeApp })
                  }}
                  className='cursor-pointer underline'
                >
                  + Add Module
                </span>
              </div>

              {appModules
                .filter((r) => r.appPackageID === activePackageID)
                .map((am) => {
                  return (
                    <div key={am._id} className='px-1'>
                      <div className=' group flex items-center '>
                        <>
                          <Input
                            key={am._id + 'package'}
                            className='mb-1'
                            defaultValue={am.moduleName}
                            onChange={(ev) => {
                              //
                              let value = ev.target.value
                              am.moduleName = value

                              useOSFiles.setState({ appModules: [...appModules] })

                              clearTimeout(ev.target.timer)
                              ev.target.timer = setTimeout(async () => {
                                useModules.getState().updateOne({ object: am })
                              }, 1000)
                            }}
                            onFocus={() => {
                              //
                              useOSFiles.setState({
                                activePackageID: activePackageID,
                                activeModuleID: am._id,
                                activeCodeGroupID: false,
                                activeCodeFileID: false,
                              })
                            }}
                          ></Input>
                        </>

                        <img
                          key={am._id + 'del'}
                          className='mb-1 hidden h-6 w-6 group-hover:inline-block'
                          onClick={async () => {
                            //
                          }}
                          src={`/gui/remove.svg`}
                        ></img>
                      </div>
                    </div>
                  )
                })}
            </div>
          }

          {
            <div
              className='inline-block overflow-scroll border-r'
              style={{ height: `280px`, width: `280px` }}
              onClick={() => {
                scroller.current.scrollTo(-140 + 280 * 2, 0)
              }}
            >
              {
                <div className=' mb-2 border border-gray-200 bg-gray-100 p-2 text-xs text-gray-500'>
                  <span
                    onClick={async () => {
                      //
                      await useCodeGroups.getState().create({
                        object: {
                          appLoaderID: activeApp._id,
                          appModuleID: activeModuleID,
                          groupName: 'newCodeGroups',
                        },
                      })

                      await load({ activeApp })
                    }}
                    className='cursor-pointer underline'
                  >
                    + Add Code Group
                  </span>
                </div>
              }

              {appCodeGroups
                .filter((r) => r.appModuleID === activeModuleID)
                .map((acg) => {
                  return (
                    <div key={acg._id} className='px-1'>
                      <div className=' group flex items-center '>
                        <>
                          <Input
                            key={acg._id + 'package'}
                            className='mb-1'
                            defaultValue={acg.groupName}
                            onChange={(ev) => {
                              //

                              let value = ev.target.value
                              acg.groupName = value

                              useOSFiles.setState({ appCodeGroups: [...appCodeGroups] })

                              clearTimeout(ev.target.timer)
                              ev.target.timer = setTimeout(async () => {
                                useCodeGroups.getState().updateOne({ object: acg })
                              }, 1000)
                            }}
                            onFocus={() => {
                              //
                              useOSFiles.setState({
                                activePackageID: activePackageID,
                                activeModuleID: activeModuleID,
                                activeCodeGroupID: acg._id,
                                activeCodeFileID: false,
                              })
                            }}
                          ></Input>
                        </>
                        {/*  */}
                        <img
                          key={acg._id + 'del'}
                          className='mb-1 hidden h-6 w-6 group-hover:inline-block'
                          onClick={async () => {
                            //
                            if (window.prompt('remove group?', acg.groupName) === acg.groupName) {
                              await useCodeGroups.getState().deleteOne({ object: acg })
                              await load({ activeApp })
                            }
                          }}
                          src={`/gui/remove.svg`}
                        ></img>
                      </div>
                    </div>
                  )
                })}
            </div>
          }

          {appCodeFiles.some((r) => r.appCodeGroupID === activeCodeGroupID) && (
            <div
              className='inline-block overflow-scroll border-r'
              style={{ height: `280px`, width: `280px` }}
              onClick={() => {
                scroller.current.scrollTo(-140 + 280 * 3, 0)
              }}
            >
              <div className=' mb-2 border border-gray-200 bg-gray-100 p-2 text-xs text-gray-500'>
                <span
                  onClick={async () => {
                    //

                    await useCodeFiles.getState().create({
                      object: {
                        appLoaderID: activeApp._id,
                        appCodeGroupID: activeCodeGroupID,
                        fileName: 'newCodeFile.js',
                        content: "console.log('hi')",
                      },
                    })

                    await load({ activeApp })
                  }}
                  className='cursor-pointer underline'
                >
                  + Add Code File
                </span>
              </div>

              {appCodeFiles
                .filter((r) => r.appCodeGroupID === activeCodeGroupID)
                .map((acf) => {
                  return (
                    <div key={acf._id} className='px-1'>
                      <div className=' group flex items-center '>
                        <>
                          <Input
                            key={acf._id + 'package'}
                            className='mb-1'
                            defaultValue={acf.fileName}
                            onChange={(ev) => {
                              //

                              let value = ev.target.value
                              acf.fileName = value

                              useOSFiles.setState({ appCodeFiles: [...appCodeFiles] })

                              clearTimeout(ev.target.timer)
                              ev.target.timer = setTimeout(async () => {
                                useCodeFiles.getState().updateOne({ object: acf })
                              }, 1000)
                            }}
                            onFocus={() => {
                              useOSFiles.setState({
                                activePackageID: activePackageID,
                                activeModuleID: activeModuleID,
                                activeCodeGroupID: activeCodeGroupID,
                                activeCodeFileID: acf._id,
                              })
                            }}
                          ></Input>
                        </>

                        {/*  */}
                        <img
                          key={acf._id + 'del'}
                          className='mb-1 hidden h-6 w-6 group-hover:inline-block'
                          onClick={async () => {
                            //
                            if (window.prompt('remove group?', acf.fileName) === acf.fileName) {
                              await useCodeFiles.getState().deleteOne({ object: acf })
                              await load({ activeApp })
                            }
                          }}
                          src={`/gui/remove.svg`}
                        ></img>
                      </div>
                    </div>
                  )
                })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
