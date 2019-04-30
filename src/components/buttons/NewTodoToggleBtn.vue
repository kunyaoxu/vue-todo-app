<script lang="tsx">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { State, Action, Mutation } from 'vuex-class';

  @Component
  export default class extends Vue {
    @State
    public isOpenNewTodo!: boolean;

    @Mutation
    public onOpenNewTodo!: () => void;

    @Mutation
    public onCloseNewTodo!: () => void;

    public render() {
      const rotate = this.isOpenNewTodo ? 'rotate' : '';
      return (
        <button
          class={`btn-add ${rotate}`}
          onClick={this.isOpenNewTodo ? this.onCloseNewTodo : this.onOpenNewTodo}
        >+</button>
      );
    }
  }
</script>

<style scoped lang="scss">
  .btn-add {
    &:hover {
      filter: grayscale(20%);
    }
    &.rotate {
      transform: translateX(calc(-50% + 75px)) rotate(45deg);
    }
    transition: .3s transform;
    position: fixed;
    border: 0;
    background-color: red;
    cursor: pointer;
    width: 50px;
    height: 50px;
    bottom: 36px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 32px;
    border-radius: 50%;
  }
</style>
