<template>
  <list>
    <cell v-for="n in 10" :key="n">{{n+1}}</cell>
  </list>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { List, Cell } from 'vant';

@Component({
  components: {
    List, Cell
  }
})
export default class MainProducts extends Vue {
  @Prop() private msg!: string;
}
</script>
