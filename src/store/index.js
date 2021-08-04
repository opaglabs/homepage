import { createStore } from 'vuex'
// import system from './modules/system'


export default createStore({
  state: {
    color: 'pink'
  },
  mutations: {
    color(state, color) {
      state.color = color;
    }
  },
  getters: {
    color(state) {
      return state.color;
    }
  },
  // strict: false
})