import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface ITodo {
  id: string;
  text: string;
  isFinished: boolean;
}

const todoList: ITodo[] = [
  {
    id: 'qweqwe789789',
    text: 'i am inital todo',
    isFinished: false,
  },
];

export default new Vuex.Store({
  state: {
    navState: '0',
    todoList,
  },
  mutations: {
    setNavState(state, newNavState: string) {
      state.navState = newNavState;
    },
    onChangeFinished(state, id: string) {
      state.todoList.forEach((el) => {
        if (el.id === id) {
          el.isFinished = !el.isFinished;
        }
      });
    },
  },
  actions: {

  },
});
