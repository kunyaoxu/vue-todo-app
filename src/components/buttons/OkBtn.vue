<script lang="tsx">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { State, Action, Mutation } from 'vuex-class';

  @Component
  export default class extends Vue {
    @State
    public isOpenNewTodo!: boolean;

    @Mutation
    public onSaveTodo!: () => void;

    public render() {
      const move = this.isOpenNewTodo ? 'move' : '';
      return (
        <button
          class={`btn-ok ${move}`}
          onClick={this.onSaveTodo}
        >&#x2713;</button>
      );
    }
  }
</script>

<style scoped lang="scss">
  .btn-ok {
    &.move {
      transform: translateX(calc(-50% - 75px));
      visibility: visible;
    }
    visibility: hidden;
    transition: .3s transform, .3s visibility;
    position: fixed;
    background-color: green;
    color: white;
    cursor: pointer;
    width: 50px;
    height: 50px;
    bottom: 36px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    border-radius: 50%;
  }
</style>
