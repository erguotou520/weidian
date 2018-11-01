<template>
  <header-page title="申请添加项目">
    <div class="v-apply">
      <img src="../assets/qrcode.png" alt="微信二维码">
      <div class="wechat-tip">长按二维码识别，加好友后将项目信息发给管理员</div>
    </div>
  </header-page>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ViewApply extends Vue {}
</script>
<style lang="postcss">
.v-apply {
  width: 240px;
  margin: 32px auto;
  text-align: center;
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
