import { update } from './render'

const reactive = (vm, data) => {
  vm.$data = data()

  for (const key in vm.$data) {
    Object.defineProperty(vm, key, {
      get() {
        return vm.$data[key]
      },
      set(value) {
        vm.$data[key] = value
        update(vm, key)
      }
    })
  }
}

export default reactive
