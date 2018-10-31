<template>
  <div id="app">
    <main-banner :list="topList"/>
    <divider-title title="推荐产品"/>
    <main-products :list="recommandList"/>
    <van-button type="primary" class="request-btn">我要申请添加产品</van-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { TopItem, Product } from '../types';

import MainBanner from '../modules/MainBanner.vue';
import MainProducts from '../modules/MainProducts.vue';
import DividerTitle from '../components/DividerTitle.vue';

@Component({
  components: {
    MainBanner, MainProducts, DividerTitle
  }
})
export default class App extends Vue {
  @Getter private topList!: TopItem[];
  @Getter private recommandList!: Product[];
}
</script>
<style>
.request-btn {
  height: 80px;
  width: 84%;
  margin: 30px 8%;
  border-radius: 40px;
  font-size: 24px;
}
</style>
