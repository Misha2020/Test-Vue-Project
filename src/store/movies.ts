import { GetterTree } from 'vuex';
import { State } from '@/types/State';

export const state: State = {
  movies: [{
      id: 1,
      name: 'Avengers',
  }],
};

export const getters: GetterTree<State, any> = {
    movies: state => state.movies,
};

// export const Movies = {
//     state,
// };


