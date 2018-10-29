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
import MainBanner from './modules/MainBanner.vue';
import MainProducts from './modules/MainProducts.vue';
import DividerTitle from './components/DividerTitle.vue';

@Component({
  components: {
    MainBanner, MainProducts, DividerTitle
  }
})
export default class App extends Vue {
  public topList: any[] = [];
  public recommandList: any[] = [];

  private async mounted() {
    const res = await fetch(`${process.env.BASE_URL}home.json`);
    const json = await res.json();
    this.topList = json.topList;
    this.recommandList = json.recommandList;
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
.request-btn {
  height: 80px;
  width: 84%;
  margin: 30px 8%;
  border-radius: 40px;
}
.w-100p {
  width: 100%;
}
</style>
