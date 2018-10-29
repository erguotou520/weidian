<template>
  <div class="divider-title">
    <span>{{title}}</span>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class DividerTitle extends Vue {
  @Prop({ type: String, default: '' }) private title?: string;
}
</script>
<style>
.divider-title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  font-size: 30px;
  color: #000;
}
.divider-title::before,
.divider-title::after {
  content: '';
  width: 40px;
  height: 2px;
  margin: 0 26px;
  background-color: #999;
}
</style>
