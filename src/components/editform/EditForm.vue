<script lang="tsx">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { State, Action, Mutation } from 'vuex-class';
  import { ITodo } from '../../store';

  @Component
  export default class extends Vue {
    @State
    public isOpenNewTodo!: boolean;

    @State
    public currentEditTodo!: ITodo;

    @Mutation
    public onChangeContent!: (newValue: string) => void;

    public onInput(e: Event) {
      if (null !== e.target) {
        const target = e.target as HTMLTextAreaElement;
        this.onChangeContent(target.value);
      }
    }

    public render() {
      return this.isOpenNewTodo ? (
        <div class='editform-outer'>
          <div class='editform'>
            <textarea
              value={this.currentEditTodo.text}
              class='editform-content'
              placeholder='write something'
              onInput={this.onInput}
            />
          </div>
        </div>
      ) :
      null;
    }
  }
</script>

<style scoped lang="scss">
  .editform-outer{
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(128, 128, 128, .3);
    .editform {
      position: relative;
      display: flex;
      margin: auto auto 120px auto;
      width: 80%;
      height: 20%;
      .editform-content {
        padding: 8px;
        border-radius: 6px;
        width: 100%;
        border: 0;
        resize: none;
      }
    }
  }
</style>
