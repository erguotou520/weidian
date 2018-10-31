import Vue from 'vue';
import Vuex, { MutationTree, ActionTree, Store, GetterTree } from 'vuex';
import { RootState, Product, TopItem } from '../types';

Vue.use(Vuex);

const state = {
  topList: [],
  recommandList: [],
  detailProduct: null
};

const mutations: MutationTree<RootState> = {
  SET_TOP_LIST(state, list: TopItem[]) {
    state.topList = list;
  },
  SET_RECOMMAND_LIST(state, list: Product[]) {
    state.recommandList = list;
  },
  SET_DETAIL_PRODUCT(state, product: Product | null) {
    state.detailProduct = product;
  }
};

const actions: ActionTree<RootState, RootState> = {
  async requestHomeList({ commit }) {
    const res = await fetch(`${process.env.BASE_URL}home.json`);
    const json = await res.json()
    commit('SET_TOP_LIST', json.topList);
    commit('SET_RECOMMAND_LIST', json.recommandList);
  },
  setDetailProduct({ commit }, product: Product) {
    commit('SET_DETAIL_PRODUCT', product);
  }
};

const getters: GetterTree<RootState, RootState> = {
  topList: (state) => state.topList,
  recommandList: (state) => state.recommandList
};

const store: Store<RootState> = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV === 'development'
});

export default store;
