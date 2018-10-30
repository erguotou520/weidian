import Vue from 'vue';
import { Button, NavBar, Popup, List, Cell, Swipe, SwipeItem, Lazyload } from 'vant';
import HeaderPage from './HeaderPage.vue'

const components = {
  Button, NavBar, Popup, List, Cell, Swipe, SwipeItem, Lazyload
};

Object.keys(components).forEach(key => {
  Vue.use(components[key]);
});

const myComponents = {
  HeaderPage
}

Object.keys(myComponents).forEach(key => {
  Vue.component(key, myComponents[key])
});