<template>
  <swipe :autoplay="3000" :height="120">
    <swipe-item v-for="n in 3" :key="n">{{n+1}}</swipe-item>
  </swipe>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Swipe, SwipeItem } from 'vant';

@Component({
  components: {
    Swipe, SwipeItem
  }
})
export default class MainBanner extends Vue {}
</script>
