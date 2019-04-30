<script lang="tsx">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { State, Action, Mutation } from 'vuex-class';

  @Component
  export default class extends Vue {
    @State
    public isOpenNewTodo!: boolean;

    public render() {
      return this.isOpenNewTodo ? (
        <div class='editform-outer'>
          <div class='editform'>
            <textarea class='editform-content' placeholder='write something'/>
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
