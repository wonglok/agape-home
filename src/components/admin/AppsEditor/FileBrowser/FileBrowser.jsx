import { Tree } from 'antd'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useApps } from '../../Apps/useApps'
import { DownOutlined, FrownFilled, FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons'
import { usePackages } from '../../Apps/usePackages'

//
export function FileBrowser() {
  let activeApp = useApps((r) => r.activeApp)

  const [treeData, setTreeData] = useState(false)

  let getPackages = async ({ activeApp }) => {
    //
    //
    //

    let packages = await usePackages.getState().findByAppID({ appLoaderID: activeApp._id })

    return packages.map((r) => {
      return {
        key: r._id,
        title: r.packageName,
        original: r,
      }
    })
  }
  let load = useCallback(async ({ activeApp }) => {
    setTreeData([
      {
        title: 'Add Package',
        key: 'addAppPackage',
      },
      {
        title: 'Packages',
        key: 'packages',
        children: await getPackages({ activeApp }),
      },
    ])
  }, [])

  useEffect(() => {
    if (!activeApp) {
      return
    }
    load({ activeApp })
  }, [activeApp, load])

  return (
    <>
      <div className='pt-2'>
        {treeData && (
          <Tree
            onRightClick={async ({ event, node }) => {
              //node
            }}
            onSelect={async (keys, info) => {
              console.log(keys, info)
              if (keys[0] === 'addAppPackage') {
                //

                await usePackages
                  .getState()
                  .create({ object: { appLoaderID: activeApp._id, packageName: 'newPackage' } })

                load({ activeApp })
              }
            }}
            defaultExpandAll
            treeData={treeData}
          />
        )}
      </div>
    </>
  )
}
