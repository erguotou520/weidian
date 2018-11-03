<template>
  <div id="app">
    <main-banner/>
    <divider-title title="推荐产品"/>
    <main-products/>
    <van-button type="primary" class="request-btn"
      @click="$router.push({name:'apply'})">
      我要申请添加产品
    </van-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MainBanner from '../modules/MainBanner.vue';
import MainProducts from '../modules/MainProducts.vue';
import DividerTitle from '../components/DividerTitle.vue';

@Component({
  components: {
    MainBanner, MainProducts, DividerTitle
  }
})
export default class ViewHome extends Vue {

}
</script>
<style>
.request-btn {
  height: 40px;
  width: 84%;
  margin: 15px 8%;
  border-radius: 20px;
  font-size: 12px;
}
</style>
