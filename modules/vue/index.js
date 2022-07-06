import { getFirstChildNode } from './shared/utils'
import reactive from './reactive'
import pools from './pools'
import event from './event'
import render from './render'

const createApp = component => {
  const vm = {}
  const { template, data, methods } = component

  vm.mount = mount
  vm.$node = createNode(template)

  const init = () => {
    reactive(vm, data)
    pools(vm, methods)
    event(vm)
    render(vm)
  }

  init()

  return vm
}

const createNode = tempalte => {
  const _template = document.createElement('div')
  _template.innerHTML = tempalte
  return getFirstChildNode(_template)
}

function mount(el) {
  document.querySelector(el).appendChild(this.$node)
}

const Vue = {
  createApp
}

export { createApp }

export default Vue
