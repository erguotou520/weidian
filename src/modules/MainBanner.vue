<template>
  <van-swipe class="swipe" :autoplay="3000">
    <van-swipe-item v-for="(item, index) in list" :key="index"
      class="swipe-item"
      v-lazy:background-image="item.img">
    </van-swipe-item>
  </van-swipe>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MainBanner extends Vue {
  @Prop(Array) private list!: any[];
}
</script>
<style scoped>
.swipe {
  height: 26vh;
}
.swipe-item {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
