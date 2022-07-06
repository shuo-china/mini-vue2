import { checkExpressionHasData, checkFunctionHasArgs } from './shared/utils'
import { vEvent } from './shared/propTypes'

//[[node, {type: 'click', expression: handler}], [node2, {type, expression}]]
export const eventPool = new Map()
//[[node, {key: 'count', expression: 'count + 1'}], [node2, {key, expression}]]
export const exprPool = new Map()

const regExpr = /\{\{(.+?)\}\}/

const pools = (vm, methods) => {
  const { $node, $data } = vm

  const allNodes = $node.querySelectorAll('*')
  const { vClick } = vEvent

  allNodes.forEach(node => {
    const vExpression = node.textContent
    // 匹配格式：{{xxx}}
    const exprMatched = vExpression.match(regExpr)

    if (exprMatched) {
      // 检测xxx中是否存在$data中的key
      const poolInfo = checkExpressionHasData($data, exprMatched[1].trim())
      poolInfo && exprPool.set(node, poolInfo)
    }

    const vClickVal = node.getAttribute(`@${vClick}`)

    if (vClickVal) {
      const fnInfo = checkFunctionHasArgs(vClickVal)
      const handler = fnInfo
        ? methods[fnInfo.methodName].bind(vm, ...fnInfo.args)
        : methods[vClickVal].bind(vm)

      eventPool.set(node, {
        type: vClick,
        handler
      })

      node.removeAttribute(`@${vClick}`)
    }
  })
}

export default pools
