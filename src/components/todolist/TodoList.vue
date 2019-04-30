<script lang="tsx">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import TodoItem from './TodoItem.vue';
  import Dashboard from './Dashboard.vue';
  import { State, Action, Mutation } from 'vuex-class';

  import { ITodo } from '@/store';

  @Component
  export default class extends Vue {
    @State('todoList')
    public todoList!: ITodo[];

    @State
    public navState!: string;

    public getTodoToShow() {
      switch (this.navState) {
        case '0':
          return this.todoList.map((todo, index) => {
            return <TodoItem key={index} props={{todo}}/>;
          });
          break;
        case '1':
          return this.todoList.map((todo, index) => {
            return todo.isFinished ? null : <TodoItem key={index} props={{todo}}/>;
          });
          break;
        case '2':
          return this.todoList.map((todo, index) => {
            return !todo.isFinished ? null : <TodoItem key={index} props={{todo}}/>;
          });
          break;
        default:
          return this.todoList;
      }
    }

    public render() {
      return (
        <div class='todo_list'>
          <Dashboard/>
          {this.getTodoToShow()}
        </div>
      );
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .todo_list {
    margin: 0 auto;
    padding: 0 16px;
    max-width: 576px;
  }
</style>