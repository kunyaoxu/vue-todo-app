<script lang="tsx">
import { Component, Prop, Vue, Model } from 'vue-property-decorator';
import {
  State,
  Action,
  Mutation,
} from 'vuex-class';

@Component
export default class Item extends Vue {
  @Prop({required: true})
  private text!: string;

  @Prop({required: true})
  private name!: string;

  @Prop({required: true})
  private valueStr!: string;

  @State('navState')
  private navState!: string;

  @Mutation('setNavState') setNavState: any;

  public render() {
    console.log(this.navState)
    return (
      <label class='item_container'>
        <input
          onChange={() => this.setNavState(this.valueStr)}
          class='hidden_radio'
          type='radio'
          name={this.name}
          value={this.valueStr}
          checked={(this.navState === this.valueStr)}
        />
        <label>{this.text}</label>
      </label>
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .item_container{
    position: relative;
    display: flex;
    width: 100px;
    label {
      font-weight: bold;
      margin: auto;
    }
    .hidden_radio {
      left: 0;
      top: 0;
      margin: 0;
      position: absolute;
      appearance: none;
      height: 100%;
      width: 100%;

      &:checked ~ label {
        color: white;
      }
    }
  }


</style>
