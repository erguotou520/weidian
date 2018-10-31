<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  @Action public requestHomeList!: () => void;
  private mounted() {
    this.requestHomeList();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
