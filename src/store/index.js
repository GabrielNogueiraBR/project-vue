import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    applicationTitle: "Projeto de Desenvolvimento de Aplicações Web",
    menuItems:[
      {
        title: "Home",
        icon: "home",
        path: "/",
      },
      {
        title: "Welcome to Vuetify",
        icon: "vuetify",
        path: "/welcome"
      },
      {
        title: "About",
        icon: "information-variant",
        path: "/about",
      },
    ]
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
    },
    getMenuItems(state){
      return state.menuItems;
    }
  }
})
