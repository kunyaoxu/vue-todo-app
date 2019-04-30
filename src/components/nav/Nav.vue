<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Item from './Item.vue';

@Component
export default class Nav extends Vue {
  public itemName: string = 'nav';

  public render() {
    return (
      <div class='nav_container'>
        <Item props={{
          text: 'All',
          name: this.itemName,
          valueStr: '0',
        }}/>
        <Item props={{
          text: 'In progress',
          name: this.itemName,
          valueStr: '1',
        }}/>
        <Item props={{
          text: 'Finished',
          name: this.itemName,
          valueStr: '2',
        }}/>
      </div>
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav_container {
    display: flex;
    justify-content: center;
    height: 50px;
    background-color: #cccccc;

    & > * {
      margin: 0 16px;
    }
  }
</style>
