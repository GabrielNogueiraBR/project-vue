import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    applicationTitle: "Projeto de Desenvolvimento de Aplicações Web",
    menuItems: [
      {
        title: "Home",
        icon: "home",
        path: "/",
      },
      {
        title: "Contacts",
        icon: "account-group",
        path: "/contacts",
      },
      {
        title: "Welcome to Vuetify",
        icon: "vuetify",
        path: "/welcome",
      },
      {
        title: "About",
        icon: "information-variant",
        path: "/about",
      },
    ],
    episodes: null
  },
  mutations: {
    SET_EPISODES(state,payload){
      state.episodes = payload;
    }
  },
  actions: {
    fetchEpisodes() {
      fetch('./data/db.json')
        .then((res) => {
          if(!res.ok)
            throw Error('Could not get episodes');
          
          return res.json();
        })
        .then((data) => {
          const payload = data;
          this.commit('SET_EPISODES',payload);
        })
        .catch((error) => console.log(error));
    }
  },
  modules: {},
  getters: {
    bigTitle(state) {
      return state.applicationTitle.toUpperCase();
    },
    getMenuItems(state) {
      return state.menuItems;
    },
    allEpisodes(state) {
      return state.episodes;
    },
  },
});
