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
    episodes: [
      {
        id: 1,
        title: "Episódio 1",
        img: "./thumbs/jujutsu-kaisen-episodio-1.jpg",
      },
      {
        id: 2,
        title: "Episódio 2",
        img: "./thumbs/jujutsu-kaisen-episodio-2.jpg",
      },
      {
        id: 3,
        title: "Episódio 3",
        img: "./thumbs/jujutsu-kaisen-episodio-3.jpg",
      },
      {
        id: 4,
        title: "Episódio 4",
        img: "./thumbs/jujutsu-kaisen-episodio-4.jpg",
      },
      {
        id: 5,
        title: "Episódio 5",
        img: "./thumbs/jujutsu-kaisen-episodio-5.jpg",
      },
      {
        id: 6,
        title: "Episódio 6",
        img: "./thumbs/jujutsu-kaisen-episodio-6.jpg",
      },
      {
        id: 7,
        title: "Episódio 7",
        img: "./thumbs/jujutsu-kaisen-episodio-7.jpg",
      },
      {
        id: 8,
        title: "Episódio 8",
        img: "./thumbs/jujutsu-kaisen-episodio-8.jpg",
      },
      {
        id: 9,
        title: "Episódio 9",
        img: "./thumbs/jujutsu-kaisen-episodio-9.jpg",
      },
      {
        id: 10,
        title: "Episódio 10",
        img: "./thumbs/jujutsu-kaisen-episodio-10.jpg",
      },
      {
        id: 11,
        title: "Episódio 11",
        img: "./thumbs/jujutsu-kaisen-episodio-11.jpg",
      },
      {
        id: 12,
        title: "Episódio 12",
        img: "./thumbs/jujutsu-kaisen-episodio-12.jpg",
      },
      {
        id: 13,
        title: "Episódio 13",
        img: "./thumbs/jujutsu-kaisen-episodio-13.jpg",
      },
      {
        id: 14,
        title: "Episódio 14",
        img: "./thumbs/jujutsu-kaisen-episodio-14.jpg",
      },
      {
        id: 15,
        title: "Episódio 15",
        img: "./thumbs/jujutsu-kaisen-episodio-15.jpg",
      },
      {
        id: 16,
        title: "Episódio 16",
        img: "./thumbs/jujutsu-kaisen-episodio-16.jpg",
      },
      {
        id: 17,
        title: "Episódio 17",
        img: "./thumbs/jujutsu-kaisen-episodio-17.jpg",
      },
      {
        id: 18,
        title: "Episódio 18",
        img: "./thumbs/jujutsu-kaisen-episodio-18.jpg",
      },
      {
        id: 19,
        title: "Episódio 19",
        img: "./thumbs/jujutsu-kaisen-episodio-19.jpg",
      },
      {
        id: 20,
        title: "Episódio 20",
        img: "./thumbs/jujutsu-kaisen-episodio-20.jpg",
      },
      {
        id: 21,
        title: "Episódio 21",
        img: "./thumbs/jujutsu-kaisen-episodio-21.jpg",
      },
      {
        id: 22,
        title: "Episódio 22",
        img: "./thumbs/jujutsu-kaisen-episodio-22.jpg",
      },
      {
        id: 23,
        title: "Episódio 23",
        img: "./thumbs/jujutsu-kaisen-episodio-23.jpg",
      },
      {
        id: 24,
        title: "Episódio 24",
        img: "./thumbs/jujutsu-kaisen-episodio-24.jpg",
      },
    ],
  },
  mutations: {},
  actions: {},
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
