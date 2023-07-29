import { useContainer } from './useContainer'

let getType = (node) => {
  let type = ''
  if (typeof node.directory !== 'undefined') {
    type = 'directory'
  }
  if (typeof node.file !== 'undefined') {
    type = 'file'
  }
  return type
}

let List = ({ node, nodePath = '' }) => {
  return (
    <div>
      {Object.keys(node).map((nodeKey) => {
        return (
          <TreeNode
            key={nodeKey + '-' + nodePath}
            type={getType(node[nodeKey])}
            nodeName={nodeKey}
            node={node[nodeKey]}
            nodePath={`${nodePath}/${nodeKey}`}
          ></TreeNode>
        )
      })}
    </div>
  )
}

let getIcon = ({ type }) => {
  if (type === 'directory') {
    return (
      <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'>
        <path d='M0 2h8l3 3h10v4h3l-4 13h-20v-20zm22.646 8h-17.907l-3.385 11h17.907l3.385-11zm-2.646-1v-3h-9.414l-3-3h-6.586v15.75l3-9.75h16z' />
      </svg>
    )
  }

  if (type === 'file') {
    return (
      <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'>
        <path d='M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm1 5h4.586l-4.586-4.586v4.586z' />
      </svg>
    )
  }
}

export function AppFileBrowser() {
  let files = useContainer((r) => r.files)
  files = files || {}

  return (
    <>
      {/*  */}
      <div className='mt-4'>
        <List node={files} nodePath={''}></List>
      </div>
      {/*  */}
    </>
  )
}

function TreeNode({ type = 'directory', nodeName, node, nodePath = '/' }) {
  return (
    <>
      <div className='ml-4 mt-2'>
        {/* <div>{nodePath}</div> */}
        <div
          className='mb-3 flex '
          onClick={() => {
            if (type === 'file') {
              useContainer.setState({
                activeNode: node,
                activeNodeType: type,
                activeNodeName: nodeName,
                activeNodePath: `${nodePath}`,
              })
            }
          }}
        >
          {getIcon({ type })} <span className='ml-1 inline-flex items-center text-sm'>{nodeName}</span>
        </div>

        <div>
          {type === 'directory' && (
            <>
              <List node={node.directory} nodePath={`${nodePath}`}></List>
            </>
          )}
        </div>
      </div>
    </>
  )
}
