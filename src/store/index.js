import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allItems: [],
    albumIdList: [...Array(101).keys()],
  },
  mutations: {
    setAllItems(state, payload) {
      state.allItems = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getAllItems: (state) => state.allItems,
    getAlbumIdList: (state) => state.albumIdList,
  },
});
