<script lang="tsx">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import TodoItem from './TodoItem.vue';
  import { State, Action, Mutation } from 'vuex-class';

  import { ITodo } from '@/store';

  @Component
  export default class extends Vue {
    @State('todoList')
    private todoList!: ITodo[];

    public render() {
      return (
        <div>
          {this.todoList.map((todo) => {
            return <TodoItem props={{todo}}/>;
          })}
        </div>
      );
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>