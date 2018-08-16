import { GetterTree, MutationTree } from 'vuex';
import { State } from '@/types/State';
import { Movie } from '@/types/Movie';

export const state: State = {
  movies: [],
};

export const getters: GetterTree<State, any> = {
    movies: state => state.movies,
    movieById: state => (id: number) => {
        return state.movies.find((movie: Movie) => movie.id === id);
    },
};

export const mutations: MutationTree<State> = {
    addMovie(state: any, newMovie: Movie) {
        state.movies = [
            ...state.movies,
            newMovie,
        ];
    },
    loadMovies(state, movies: Movie[]) {
      state.movies = movies;
    },
    loadNextMovies(state, movies: Movie[]) {
        state.movies = [
            ... state.movies,
            ...movies,
        ];
    },
};

