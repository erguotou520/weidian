<template>
  <div class="header-page" :class="{'fixed-header':fixed}">
    <van-nav-bar
      :title="title"
      :fixed="fixed"
      :right-text="rightText"
      @click-left="back"
    >
      <slot name="title" slot="title"></slot>
      <slot name="right" slot="right"></slot>
    </van-nav-bar>
    <div class="page-container">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class HeaderPage extends Vue {
  @Prop(String)
  private title!: string;

  @Prop({ type: Boolean, default: true })
  private fixed?: boolean;

  @Prop(String)
  private rightText?: string;

  public back() {
    this.$router.go(-1);
  }
}
</script>
<style lang="postcss">
.header-page {
  &.fixed-header {
    & .page-container {
      padding-top: 107.8125px;
    }
  }
}
</style>
