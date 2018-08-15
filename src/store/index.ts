import Vue from 'vue';
import Vuex from 'vuex';
import { getters, mutations, state } from '@/store/movies';

// export const LOAD_MOVIE = 'LOAD_MOVIE';
// export const LOAD_NEXT_MOVIE = 'LOAD_NEXT_MOVIE';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
});

// export default new Vuex.Store(Movies)

// export default new Vuex.Store({
//     state: {
//         movies: [],
//     },
//     mutations: {
//         LOAD_MOVIE(state, movies) {
//             state.movies = movies;
//         },
//         LOAD_NEXT_MOVIE(state, movies) {
//             state.movies = {
//                 ...state.movies,
//                 ...movies,
//             };
//         },
//     },
//     actions: {
//         loadMovie({commit}, movies: Movie[]) {
//             commit(LOAD_MOVIE, movies);
//         },
//         loadNextMovie({commit}, movies: Movie[]) {
//             commit(LOAD_NEXT_MOVIE, movies);
//         },
//     },
//     getters: {
//         movies(state) {
//             return state.movies;
//         },
//     },
// });
