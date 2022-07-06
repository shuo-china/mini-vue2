import { exprPool } from './pools'

const render = vm => {
  exprPool.forEach((info, node) => {
    _render(vm, node, info)
  })
}

export const update = (vm, key) => {
  exprPool.forEach((info, node) => {
    if (info.key === key) {
      _render(vm, node, info)
    }
  })
}

const _render = (vm, node, { expression }) => {
  const r = new Function(
    'vm',
    'node',
    `with (vm) {
      node.textContent = ${expression}
    }`
  )
  r(vm, node)
}

export default render
