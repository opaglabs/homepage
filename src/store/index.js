import { createStore } from 'vuex'
import system from './modules/system'


export default createStore({
  modules: {
    system
  },
  strict: false
})