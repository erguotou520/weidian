import Vue from 'vue';
import { Button, Popup, List, Cell, Swipe, SwipeItem, Lazyload } from 'vant';

const components = {
  Button, Popup, List, Cell, Swipe, SwipeItem, Lazyload
};

Object.keys(components).forEach(key => {
  Vue.use(components[key]);
});