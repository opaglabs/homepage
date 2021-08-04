import { createStore as _createStore } from 'vuex'
import system from './modules/system'


export function createStore () {
  return _createStore({
    modules: {
      system
    },
    strict: false
  })
}