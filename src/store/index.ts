import Vue from 'vue';
import Vuex, { MutationTree, ActionTree, StoreOptions } from 'vuex';

interface RootState {
  topList: any[],
  recommandList: any[],
  detailProduct: any
}

const state = {
  topList: [],
  recommandList: [],
  detailProduct: {}
}

const mutations: MutationTree<RootState> = {
  SET_TOP_LIST (state, list) {
    state.topList = list
  },
  SET_RECOMMAND_LIST (state, list) {
    state.recommandList = list
  },
  SET_DETAIL_PRODUCT (state, product) {
    state.detailProduct = product
  }
}

const actions: ActionTree<> = {
  async requestHomeList () {

  },
  setDetailProduct ({ commit }, product) {
    commit('SET_DETAIL_PRODUCT', product)
  }
}

const getters = {}

const store: StoreOptions<RootState> = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV === 'development'
})

export default store