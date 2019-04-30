<script lang="tsx">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { State, Action, Mutation } from 'vuex-class';
  import { ITodo } from '@/store';

  @Component
  export default class extends Vue {
    @Prop()
    public todo!: ITodo;

    @Mutation
    public onChangeFinished!: (id: string) => void;

    public constructor(arg: any) {
      super(arg);
      this.onChangeFinished = this.onChangeFinished.bind(this, this.todo.id);
    }

    public render() {
      console.log(this.todo.id)
      return (
        <div class='TodoItem'>
          <input type='checkbox' checked={this.todo.isFinished} onClick={this.onChangeFinished}/>
          <span>{this.todo.text}</span>
        </div>
      );
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .TodoItem {
    margin-bottom: 32px;
  }
</style>