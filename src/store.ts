import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navState: '0',
  },
  mutations: {
    setNavState(state, newNavState) {
      state.navState = newNavState;
    },
  },
  actions: {

  },
});
