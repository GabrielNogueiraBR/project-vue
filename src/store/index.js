import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    applicationTitle: "Projeto de Desenvolvimento de Aplicações Web"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    bigTitle(state){
      return state.applicationTitle.toUpperCase()
    }
  }
})
