<template>
  <van-list>
    <van-cell v-for="(product, index) in recommandList" :key="index"
      class="product-item"
      @click.native="toDetail(product)">
      <div class="icon" slot="icon" v-lazy:background-image="product.img"></div>
      <div class="info" slot="title">
        <div class="title">{{product.title}}</div>
        <div class="desc">{{product.description}}</div>
      </div>
    </van-cell>
  </van-list>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { Product } from '../types'

@Component
export default class MainProducts extends Vue {
  @Getter private recommandList!: Product[];
  toDetail (product: Product) {
    this.$router.push({ name: 'product', params: { id: product.id } })
  }
}
</script>
<style scoped>
.product-item {
  padding: 15px 10px;
}
.icon {
  width: 65px;
  height: 65px;
  background-size: cover;
  background-repeat: no-repeat;
}
.info {
  margin-left: 10px;
}
.title {
  font-size: 15px;
  font-weight: bold;
}
.desc {
  margin-top: 10px;
  color: #666;
}
</style>
