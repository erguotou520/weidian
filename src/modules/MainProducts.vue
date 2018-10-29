<template>
  <van-list>
    <van-cell v-for="(item, index) in list" :key="index" class="product-item">
      <div class="icon" slot="icon" v-lazy:background-image="item.img"></div>
      <div class="info" slot="title">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.description}}</div>
      </div>
    </van-cell>
  </van-list>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MainProducts extends Vue {
  @Prop(Array) private list!: any[];
}
</script>
<style scoped>
.product-item {
  padding: 30px 20px;
}
.icon {
  width: 130px;
  height: 130px;
  background-size: cover;
  background-repeat: no-repeat;
}
.info {
  margin-left: 20px;
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.desc {
  margin-top: 20px;
  color: #666;
}
</style>
