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
    episodes: null,
    contacts: null
  },
  mutations: {
    SET_EPISODES(state,payload){
      state.episodes = payload;
    },
    SET_CONTACTS(state,payload){
      state.contacts = payload;
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
          const payload = data.episodes;
          this.commit('SET_EPISODES',payload);
        })
        .catch((error) => console.log(error));
    },
    fetchContacts(){
      fetch('./data/db.json')
        .then((res)=>{
          if(!res.ok)
            throw Error('Could not get contacts from database');
          
            return res.json();
        })
        .then((data)=> {
          const payload = data.contacts;
          this.commit('SET_CONTACTS',payload);
        })
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
    allContacts(state){
      return state.contacts;
    },
    getAllFriends(state){
      return state.contacts.filter((contact) => contact.category === 'Friends');
    },
    getAllBestFriends(state){
      return state.contacts.filter((contact) => contact.category === 'Best Friends');
    },
    getContactsByCategory(state){
      if(state.contacts !== null){
        const categories = state.contacts
          .map((contact)=>contact.category)
          .filter((value,index,array) => array.indexOf(value) === index);
        
        return categories.map((category)=>{
          return {category: category, users: state.contacts.filter((contact) => contact.category === category)};
        })
      }
    }
  },
});
