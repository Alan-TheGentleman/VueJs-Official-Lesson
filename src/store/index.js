import Vue from 'vue';
import Vuex from 'vuex';
import { state as ChatState, mutations as ChatMutations } from '../chat/state/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coins: Array(),
    user: null,
    ...ChatState
  },
  mutations: {
    addCoin(state, payload) {
      state.coins = [...state.coins, payload];
    },
    addCoins(state, payload) {
      state.coins = payload;
    },
    deleteCoin(state, payload) {
      state.coins = state.coins.filter(c => c.name !== payload);
    },
    addUser(state, payload) {
      state.user = payload;
    },
    ...ChatMutations
  },
  getters: {
    coins(state) {
      return state.coins;
    },
    user(state) {
      return state.user;
    }
  },
  actions: {
    addUser(newUser) {
      this.state.commit('addUser', newUser);
    },
    addCoin(state, newCoin) {
      state.commit('addCoin', newCoin);
    },
    addCoins(state, newCoin) {
      state.commit('addCoins', newCoin);
    },
    deleteCoin(state, coinName) {
      state.commit('deleteCoin', coinName);
    }
  },
  modules: {}
});
