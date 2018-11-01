<template>
  <van-swipe class="swipe" :autoplay="3000">
    <van-swipe-item v-for="(item, index) in topList" :key="index"
      class="swipe-item"
      v-lazy:background-image="item.img">
    </van-swipe-item>
  </van-swipe>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { TopItem } from '../types';

@Component
export default class MainBanner extends Vue {
  @Getter private topList!: TopItem[];
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
