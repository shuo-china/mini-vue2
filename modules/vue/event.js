import { eventPool } from './pools'

const event = vm => {
  for (const [node, { type, handler }] of eventPool) {
    vm[handler.name] = handler
    node.addEventListener(type, vm[handler.name], false)
  }
}

export default event
