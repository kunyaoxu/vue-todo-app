<script lang="tsx">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { State, Action, Mutation } from 'vuex-class';
  import { ITodo } from '@/store';

  @Component
  export default class extends Vue {
    @State
    public todoList!: ITodo[];

    public render() {
      const count = this.todoList.reduce((acc, cur ) => {
        if (cur.isFinished === false) {
          return acc + 1;
        }
        return acc;
      }, 0);

      return (
        <div class='dashboard'>
          <span>{count}</span>
          <div>&nbsp;in progress</div>
        </div>
      );
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .dashboard {
    display: flex;
    justify-content: flex-end;
    margin: 8px auto;
  }
</style>