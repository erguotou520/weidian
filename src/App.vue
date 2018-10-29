<template>
  <div id="app">
    <main-banner />
    <main-products />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainBanner from './modules/MainBanner.vue';
import MainProducts from './modules/MainProducts.vue';

@Component({
  components: {
    MainBanner, MainProducts
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
