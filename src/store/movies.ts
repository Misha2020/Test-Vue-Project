import { GetterTree, MutationTree } from 'vuex';
import { State } from '@/types/State';
import { Movie } from '@/types/Movie';

export const state: State = {
    movies: [],
};

export const getters: GetterTree<State, any> = {
    movies: (data) => data.movies,
};

export const mutations: MutationTree<State> = {
    addMovie(data: any, newMovie: Movie) {
        data.movies = [
            ...data.movies,
            newMovie,
        ];
    },
    loadMovies(data, movies: Movie[]) {
        data.movies = movies;
    },
    loadNextMovies(data, movies: Movie[]) {
        data.movies = [
            ... data.movies,
            ...movies,
        ];
    },
};

