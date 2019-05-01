import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface ITodo {
  id: string;
  text: string;
  isFinished: boolean;
}

const currentEditTodo: ITodo = {
  id: '',
  text: '',
  isFinished: false,
};

const todoList: ITodo[] = [
  {
    id: 'qweqwe789',
    text: 'i am todo 1',
    isFinished: false,
  },
  {
    id: 'qweqwe78910',
    text: 'i am todo 2',
    isFinished: true,
  },
];

export default new Vuex.Store({
  state: {
    navState: '0',
    isOpenNewTodo: false,
    currentEditTodo,
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
      // 下面也許可以拆成獨立的 mutation
      state.currentEditTodo.text = '';
    },
    onChangeContent(state, newValue: string) {
      state.currentEditTodo.text = newValue;
    },
    onSaveTodo(state) {
      const newTodo: ITodo = {
        ...state.currentEditTodo,
        id: (Math.random() * Math.pow(10, 8)).toString().split('.')[0] + Date.now().toString(36),
        isFinished: false,
      };
      state.todoList.push(newTodo);
      // 下面也許可以拆成獨立的 mutation, 因為跟其他 mutation 有類似的程式碼
      state.isOpenNewTodo = false;
      state.currentEditTodo.text = '';
    },
  },
  actions: {

  },
});
