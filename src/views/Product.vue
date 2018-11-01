<template>
  <header-page title="项目介绍">
    <div class="v-product">
      <div class="product-pic" v-lazy:background-image="product.img"></div>
      <h5>{{product.title}}</h5>
      <article>{{product.description}}</article>
      <img src="../assets/qrcode.png" alt="微信二维码">
      <div class="wechat-tip">长按二维码识别，加好友联系</div>
    </div>
  </header-page>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import { Getter } from "vuex-class";
import { Product } from '../types';

@Component
export default class ViewProduct extends Vue {
  private str: string = "";
  @Getter private recommandList!: Product[];
  private get product () {
    return this.recommandList.find(product => product.id === this.$route.params.id)
  }
}
</script>
<style lang="postcss">
.v-product {
  width: 240px;
  margin: 32px auto;
  text-align: center;
  & .product-pic {
    width: 72px;
    height: 72px;
    margin: 0 auto;
    border-radius: 2px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  & h5 {
    margin: 16px 0 0;
    font-size: 18px;
    color: #000;
  }
  & article {
    margin-top: 16px;
    color: #999;
    text-align: left;
  }
  & img {
    margin-top: 32px;
    width: 160px;
    height: 160px;
  }
  & .wechat-tip {
    margin-top: 8px;
    color: #aaa;
  }
}
</style>
