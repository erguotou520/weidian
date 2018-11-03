<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="app-router-container"/>
    </transition>
  </div>
</template>
<script lang="ts">
import { Action } from 'vuex-class';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class App extends Vue {
  @Action public requestHomeList!: () => void;
  private transitionName: string = 'slide-left';
  @Watch('$route')
  public onRouteChanged(to: Route, from: Route) {
    if (to.meta.direction) {
      return this.transitionName = to.meta.direction > 0 ? 'slide-left' : 'slide-right';
    }
    if (from.meta.direction) {
      return this.transitionName = from.meta.direction < 0 ? 'slide-left' : 'slide-right';
    }
    const fromOrder = from.meta.order || -1;
    const toOrder = to.meta.order || -1;
    this.transitionName = fromOrder > toOrder ? 'slide-right' :
      (fromOrder < toOrder || toOrder !== -1 ? 'slide-left' : '');
  }
  private mounted() {
    this.requestHomeList();
  }
}
</script>
<style>
@import "./assets/styles/transition.css";
#app {
  position: relative;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
.app-router-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
}
</style>
