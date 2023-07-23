/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Input, Tree } from 'antd'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useApps } from '../../Apps/useApps'
import { usePackages } from '../../Apps/usePackages'
import { useModules } from '../../Apps/useModules'
import { useCodeGroups } from '../../Apps/useCodeGroups'
import { useCoreFiles } from './useCoreFiles'
import { useCodeFiles } from '../../Apps/useCodeFiles'

//
export function FileBrowser() {
  let activeApp = useApps((r) => r.activeApp)
  let appPackages = useCoreFiles((r) => r.appPackages)
  let appModules = useCoreFiles((r) => r.appModules)
  let appCodeGroups = useCoreFiles((r) => r.appCodeGroups)
  let appCodeFiles = useCoreFiles((r) => r.appCodeFiles)

  let activePackageID = useCoreFiles((r) => r.activePackageID)
  let activeModuleID = useCoreFiles((r) => r.activeModuleID)
  let activeCodeGroupID = useCoreFiles((r) => r.activeCodeGroupID)
  let activeCodeFileID = useCoreFiles((r) => r.activeCodeFileID)

  let load = useCallback(async ({ activeAppID }) => {
    let appPackages = await usePackages.getState().findByAppID({ appLoaderID: activeAppID })
    let appModules = await useModules.getState().findByAppID({ appLoaderID: activeAppID })
    let appCodeGroups = await useCodeGroups.getState().findByAppID({ appLoaderID: activeAppID })
    let appCodeFiles = await useCodeFiles.getState().findByAppID({ appLoaderID: activeAppID })

    appPackages = appPackages.slice().sort((a, b) => {
      let da = new Date(a.createdAt).getTime()
      let db = new Date(b.createdAt).getTime()

      if (da > db) {
        return 1
      } else if (da < db) {
        return -1
      } else {
        return 0
      }
    })

    appPackages = appPackages.slice().sort((a, b) => {
      let da = a.packageName === 'app-loader'
      let db = b.packageName === 'app-loader'

      if (da || db) {
        return -1
      } else {
        return 0
      }
    })

    useCoreFiles.setState({ appPackages, appModules, appCodeGroups, appCodeFiles })

    return { appPackages, appModules, appCodeGroups, appCodeFiles }
  }, [])

  useEffect(() => {
    if (!activeApp._id) {
      return
    }

    load({ activeAppID: activeApp._id }).then(({ appPackages, appModules, appCodeGroups, appCodeFiles }) => {
      let pid = appPackages[0]?._id

      useCoreFiles.setState({ activePackageID: pid })

      let mid = appModules.find((r) => r.appPackageID === pid)?._id

      useCoreFiles.setState({ activeModuleID: mid })

      let gid = appCodeGroups.find((r) => r.appModuleID === mid)?._id

      useCoreFiles.setState({ activeCodeGroupID: gid })

      let fid = appCodeFiles.find((r) => r.appCodeGroupID === gid)?._id

      useCoreFiles.setState({ activeCodeFileID: fid })
    })

    return () => {
      //!SECTION
    }
  }, [activeApp._id, load])

  useEffect(() => {
    return () => {
      useCoreFiles.setState({
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
    await load({ activeAppID: activeApp._id })
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
                    useCoreFiles.setState({ activePackageID: ap._id })
                  }}
                  key={ap._id}
                >
                  <Input
                    key={ap._id + 'package'}
                    className={`mb-1 ${activePackageID === ap._id ? `bg-lime-300` : ``}`}
                    defaultValue={ap.packageName}
                    onChange={(ev) => {
                      //

                      let value = ev.target.value
                      ap.packageName = value

                      useCoreFiles.setState({ appPackages: [...appPackages] })

                      clearTimeout(ev.target.timer)
                      ev.target.timer = setTimeout(async () => {
                        usePackages.getState().updateOne({ object: ap })
                      }, 1000)
                    }}
                    onFocus={() => {
                      let pid = ap._id
                      let mid = appModules.find((r) => r.appPackageID === pid)?._id
                      let gid = appCodeGroups.find((r) => r.appModuleID === mid)?._id
                      let fid = appCodeFiles.find((r) => r.appCodeGroupID === gid)?._id

                      useCoreFiles.setState({
                        activePackageID: pid,
                        activeModuleID: mid,
                        activeCodeGroupID: gid,
                        activeCodeFileID: fid,
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
                        await load({ activeAppID: activeApp._id })
                        useCoreFiles.setState({
                          activePackageID: false,
                          activeModuleID: false,
                          activeCodeGroupID: false,
                          activeCodeFileID: false,
                        })
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

                    await load({ activeAppID: activeApp._id })
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
                            className={`mb-1 ${activeModuleID === am._id ? `bg-lime-300` : ``}`}
                            defaultValue={am.moduleName}
                            onChange={(ev) => {
                              //
                              let value = ev.target.value
                              am.moduleName = value

                              useCoreFiles.setState({ appModules: [...appModules] })

                              clearTimeout(ev.target.timer)
                              ev.target.timer = setTimeout(async () => {
                                useModules.getState().updateOne({ object: am })
                              }, 1000)
                            }}
                            onFocus={() => {
                              // //
                              // useCoreFiles.setState({
                              //   activePackageID: activePackageID,
                              //   activeModuleID: am._id,
                              //   // activeCodeGroupID: false,
                              //   // activeCodeFileID: false,
                              // })

                              let pid = activePackageID
                              let mid = am._id
                              let gid = appCodeGroups.find((r) => r.appModuleID === mid)?._id
                              let fid = appCodeFiles.find((r) => r.appCodeGroupID === gid)?._id

                              useCoreFiles.setState({
                                activePackageID: pid,
                                activeModuleID: mid,
                                activeCodeGroupID: gid,
                                activeCodeFileID: fid,
                              })
                            }}
                          ></Input>
                        </>

                        <img
                          key={am._id + 'del'}
                          className='mb-1 hidden h-6 w-6 group-hover:inline-block'
                          onClick={async () => {
                            //
                            //
                            if (window.prompt('remove module?', am.moduleName) === am.moduleName) {
                              await useModules.getState().deleteOne({ object: am })
                              await load({ activeAppID: activeApp._id })
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

                      await load({ activeAppID: activeApp._id })
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
                            className={`mb-1 ${activeCodeGroupID === acg._id ? `bg-lime-300` : ``}`}
                            defaultValue={acg.groupName}
                            onChange={(ev) => {
                              //

                              let value = ev.target.value
                              acg.groupName = value

                              useCoreFiles.setState({ appCodeGroups: [...appCodeGroups] })

                              clearTimeout(ev.target.timer)
                              ev.target.timer = setTimeout(async () => {
                                useCodeGroups.getState().updateOne({ object: acg })
                              }, 1000)
                            }}
                            onFocus={() => {
                              //
                              // useCoreFiles.setState({
                              //   activePackageID: activePackageID,
                              //   activeModuleID: activeModuleID,
                              //   activeCodeGroupID: acg._id,
                              //   // activeCodeFileID: false,
                              // })

                              let pid = activePackageID
                              let mid = activeModuleID
                              let gid = acg._id
                              let fid = appCodeFiles.find((r) => r.appCodeGroupID === gid)?._id

                              useCoreFiles.setState({
                                activePackageID: pid,
                                activeModuleID: mid,
                                activeCodeGroupID: gid,
                                activeCodeFileID: fid,
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
                              await load({ activeAppID: activeApp._id })
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

          {
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

                    await load({ activeAppID: activeApp._id })
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
                            className={`mb-1 ${activeCodeFileID === acf._id ? `bg-lime-300` : ``}`}
                            defaultValue={acf.fileName}
                            onChange={(ev) => {
                              //

                              let value = ev.target.value
                              acf.fileName = value

                              useCoreFiles.setState({ appCodeFiles: [...appCodeFiles] })

                              clearTimeout(ev.target.timer)
                              ev.target.timer = setTimeout(async () => {
                                useCodeFiles.getState().updateOne({ object: acf })
                              }, 1000)
                            }}
                            onFocus={() => {
                              useCoreFiles.setState({
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
                              await load({ activeAppID: activeApp._id })
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
        </div>
      </div>
    </>
  )
}
