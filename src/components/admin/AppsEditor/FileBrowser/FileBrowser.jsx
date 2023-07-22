import { Input, Tree } from 'antd'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useApps } from '../../Apps/useApps'
import { usePackages } from '../../Apps/usePackages'
import { useModules } from '../../Apps/useModules'
import { useCodeGroups } from '../../Apps/useCodeGroups'
import { useFileBrowser } from './useFileBrowser'
import { useCodeFiles } from '../../Apps/useCodeFiles'

//
export function FileBrowser() {
  let activeApp = useApps((r) => r.activeApp)
  let appPackages = useFileBrowser((r) => r.appPackages)
  let appModules = useFileBrowser((r) => r.appModules)
  let appCodeGroups = useFileBrowser((r) => r.appCodeGroups)
  let appCodeFiles = useFileBrowser((r) => r.appCodeFiles)

  let load = useCallback(async ({ activeApp }) => {
    let appPackages = await usePackages.getState().findByAppID({ appLoaderID: activeApp._id })
    let appModules = await useModules.getState().findByAppID({ appLoaderID: activeApp._id })
    let appCodeGroups = await useCodeGroups.getState().findByAppID({ appLoaderID: activeApp._id })
    let appCodeFiles = await useCodeFiles.getState().findByAppID({ appLoaderID: activeApp._id })

    useFileBrowser.setState({ appPackages, appModules, appCodeGroups, appCodeFiles })

    //

    return { appPackages, appModules, appCodeGroups, appCodeFiles }
  }, [])
  let activePackageID = useApps((r) => r.activePackageID)

  useEffect(() => {
    if (!activeApp) {
      return
    }
    load({ activeApp }).then(({ appPackages }) => {
      useApps.setState({ activePackageID: appPackages[0]?._id })
    })
  }, [activeApp, load])

  return (
    <>
      <div className=''>
        <div className='border-l pl-3'>
          <div
            className='mb-3 text-xs text-gray-500'
            onClick={async () => {
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
                  fileName: 'newCodeFile',
                  content: '',
                },
              })

              // console.log(newCF)
              await load({ activeApp })
            }}
          >
            + Add Package
          </div>

          {appPackages.map((ap, apIDX) => {
            //
            return (
              <div
                className='px-2'
                onClick={() => {
                  useApps.setState({ activePackageID: ap._id })
                }}
                style={{
                  backgroundColor: activePackageID === ap._id ? '#aaffff' : '',
                }}
                key={ap._id}
              >
                {/*  */}
                {ap.packageName}
                {/*  */}
              </div>
            )
          })}

          <div className='mt-3'>
            {/*  */}
            {appPackages
              .filter((r) => r._id === activePackageID)
              .map((ap) => {
                return (
                  <div key={ap._id}>
                    <Input
                      key={ap._id}
                      className='mb-1'
                      defaultValue={ap.packageName}
                      onChange={(ev) => {
                        //

                        let value = ev.target.value
                        ap.packageName = value

                        useFileBrowser.setState({ appPackages: [...appPackages] })

                        clearTimeout(ev.target.timer)
                        ev.target.timer = setTimeout(async () => {
                          usePackages.getState().updateOne({ object: ap })
                        }, 1000)
                      }}
                    ></Input>
                  </div>
                )
              })}
          </div>

          <div className='border-l pl-3'>
            <div
              className='mt-3 text-xs text-gray-500'
              onClick={async () => {
                //
                await useModules.getState().create({
                  object: { appLoaderID: activeApp._id, appPackageID: ap._id, moduleName: 'newModule' },
                })

                await load({ activeApp })
              }}
            >
              + Add Module
            </div>

            <div className=''>
              {appModules
                .filter((r) => r.appPackageID === activePackageID)
                .map((am) => {
                  return (
                    <div key={am._id}>
                      <Input
                        key={am._id}
                        className='mb-1'
                        defaultValue={am.moduleName}
                        onChange={(ev) => {
                          //

                          let value = ev.target.value
                          am.moduleName = value

                          useFileBrowser.setState({ appModules: [...appModules] })

                          clearTimeout(ev.target.timer)
                          ev.target.timer = setTimeout(async () => {
                            useModules.getState().updateOne({ object: am })
                          }, 1000)
                        }}
                      ></Input>
                      {/* <div>{am.moduleName}</div> */}

                      <div className='border-l pl-3'>
                        <div
                          className='mt-3 text-xs text-gray-500'
                          onClick={async () => {
                            //
                            await useCodeGroups.getState().create({
                              object: {
                                appLoaderID: activeApp._id,
                                appModuleID: am._id,
                                groupName: 'newCodeGroups',
                              },
                            })

                            await load({ activeApp })
                          }}
                        >
                          + Add Code Group
                        </div>

                        {appCodeGroups
                          .filter((acg) => {
                            return acg.appModuleID === am._id
                          })
                          .map((acg) => {
                            return (
                              <div key={acg._id}>
                                <Input
                                  key={acg._id}
                                  className='mb-1'
                                  defaultValue={acg.groupName}
                                  onChange={(ev) => {
                                    //

                                    let value = ev.target.value
                                    acg.groupName = value

                                    useFileBrowser.setState({ appModules: [...appModules] })

                                    clearTimeout(ev.target.timer)
                                    ev.target.timer = setTimeout(async () => {
                                      useCodeGroups.getState().updateOne({ object: acg })
                                    }, 1000)
                                  }}
                                ></Input>
                                {/* <div className=''>{acg.groupName}</div> */}

                                <div className='mt-3 border-l pl-3 '>
                                  <div
                                    className='text-xs text-gray-500'
                                    onClick={async () => {
                                      //
                                      await useCodeFiles.getState().create({
                                        object: {
                                          appLoaderID: activeApp._id,
                                          appCodeGroupID: acg._id,
                                          fileName: 'newCodeFile',
                                          content: '',
                                        },
                                      })

                                      await load({ activeApp })
                                    }}
                                  >
                                    + Add Code File
                                  </div>

                                  <div className=''>
                                    {appCodeFiles
                                      .filter((acf) => {
                                        return acf.appCodeGroupID === acg._id
                                      })
                                      .map((acf) => {
                                        return (
                                          <div className='' key={acf._id}>
                                            {/* <div className=''>{acf.fileName}</div> */}
                                            <Input
                                              key={acf._id}
                                              className='mb-1'
                                              defaultValue={acf.fileName}
                                              onChange={(ev) => {
                                                //

                                                let value = ev.target.value
                                                acf.fileName = value

                                                // useFileBrowser.setState({ appModules: [...appModules] })

                                                clearTimeout(ev.target.timer)
                                                ev.target.timer = setTimeout(async () => {
                                                  useCodeFiles.getState().updateOne({ object: acf })
                                                }, 1000)
                                              }}
                                            ></Input>
                                          </div>
                                        )
                                      })}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
          {/*  */}

          {/* {appPackages.map((ap) => {
            return (
              <div key={ap._id}>
                {ap.packageName}

                <div className='border-l pl-3'>
                  <div
                    className='text-xs text-gray-500'
                    onClick={async () => {
                      //
                      await useModules.getState().create({
                        object: { appLoaderID: activeApp._id, appPackageID: ap._id, moduleName: 'newModule' },
                      })

                      await load({ activeApp })
                    }}
                  >
                    + Add Module
                  </div>

                  <div className=''>
                    {appModules
                      .filter((r) => r.appPackageID === ap._id)
                      .map((am) => {
                        return (
                          <div key={am._id}>
                            <div>{am.moduleName}</div>

                            <div className='border-l pl-3'>
                              <div
                                className=' text-xs text-gray-500'
                                onClick={async () => {
                                  //
                                  await useCodeGroups.getState().create({
                                    object: {
                                      appLoaderID: activeApp._id,
                                      appModuleID: am._id,
                                      groupName: 'newCodeGroups',
                                    },
                                  })

                                  await load({ activeApp })
                                }}
                              >
                                + Add Code Group
                              </div>

                              {appCodeGroups
                                .filter((acg) => {
                                  return acg.appModuleID === am._id
                                })
                                .map((acg) => {
                                  return (
                                    <div key={acg._id}>

                                      <div className=''>{acg.groupName}</div>

                                      <div className='border-l pl-3'>
                                        <div
                                          className='text-xs text-gray-500'
                                          onClick={async () => {
                                            //
                                            await useCodeFiles.getState().create({
                                              object: {
                                                appLoaderID: activeApp._id,
                                                appCodeGroupID: acg._id,
                                                fileName: 'newCodeFile',
                                                content: '',
                                              },
                                            })

                                            await load({ activeApp })
                                          }}
                                        >
                                          + Add Code File
                                        </div>

                                        <div className=''>
                                          {appCodeFiles
                                            .filter((acf) => {
                                              return acf.appCodeGroupID === acg._id
                                            })
                                            .map((acf) => {
                                              return (
                                                <div className='' key={acf._id}>

                                                  <div className=''>{acf.fileName}</div>

                                                </div>
                                              )
                                            })}
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>

              </div>
            )
          })} */}
        </div>
      </div>
    </>
  )
}
