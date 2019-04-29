<script lang="tsx">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { State, Action, Mutation } from 'vuex-class';
  import { ITodo } from '@/store';

  @Component
  export default class extends Vue {
    public constructor(arg: any) {
      super(arg);
      this.onChangeFinished = this.onChangeFinished.bind(this, this.todo.id);
    }

    @Prop()
    private todo!: ITodo;

    @Mutation
    private onChangeFinished!: (id: string) => void;

    public render() {
      return (
        <div>
          <input type='checkbox' checked={this.todo.isFinished} onClick={this.onChangeFinished}/>
          <span>{this.todo.text}</span>
        </div>
      );
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>