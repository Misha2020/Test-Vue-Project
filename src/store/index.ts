import Vue from 'vue';
import Vuex from 'vuex';
import { getters, mutations, state } from '@/store/movies';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
});
