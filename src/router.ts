import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';

import { API_BASE_URL } from '@/constants';
import { authService } from './services/auth.service';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'login' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/login/login.vue'),
      beforeEnter: (to, from, next) => {
          if (localStorage.getItem('api_key')) {
              next({
                  path: '/home',
              });
          } else {
              next();
          }
      },
    },
      {
        path: '/home',
        name: 'home',
        component: () => import('./components/home/home.vue'),
        redirect: { name: 'popular'},
        beforeEnter: (to, from, next) => {
            authService.checkIsAuth(to, from, next);
        },
        children: [
            {
                path: 'popular',
                name: 'popular',
                component: () => import('./components/popular/popular.vue'),
            },
            {
                path: 'upcoming',
                name: 'upcoming',
                component: () => import('./components/upcoming/upcoming.vue'),
            },
            {
                path: 'movie/:id',
                name: 'movieDetails',
                component: () => import('./components/movie-details/movie-details.vue'),
            },
        ],
      },
  ],
});
