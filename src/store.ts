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
    id: 'qweqwe789',
    text: 'i am inital todo',
    isFinished: false,
  },
  {
    id: 'qweqwe78910',
    text: 'i am inital todo 2',
    isFinished: true,
  },
  {
    id: 'qweqwe78911',
    text: 'i am inital todo 3',
    isFinished: false,
  },
];

export default new Vuex.Store({
  state: {
    navState: '0',
    isOpenNewTodo: false,
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
    onOpenNewTodo(state) {
      state.isOpenNewTodo = true;
    },
    onCloseNewTodo(state) {
      state.isOpenNewTodo = false;
    },
  },
  actions: {

  },
});
