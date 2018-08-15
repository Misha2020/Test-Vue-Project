import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import {API_BASE_URL} from '@/constants';

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
      component: () => import('./components/login/Login.vue'),
      beforeEnter: (to, from, next) => {
          if (localStorage.getItem('api_key')) {
              next({
                  path: '/popular',
              });
          } else {
              next();
          }
      },
    },
      {
          path: '/popular',
          name: 'popular',
          component: () => import('./components/popular/popular.vue'),
          beforeEnter: (to, from, next) => {
              if (!localStorage.getItem('api_key')) {
                  next({
                      path: '/login',
                  });
              } else {
                  if (!sessionStorage.getItem('session_id')) {
                      // const apiKey = localStorage.getItem('api_key');
                      // const requestToken = localStorage.getItem('request_token');
                      //
                      // axios.post(
                      //     `${API_BASE_URL}/3/authentication/session/new?api_key=${apiKey}`,
                      //     { request_token: requestToken })
                      //     .then((response: any) => {
                      //         console.log(response);
                      //         sessionStorage.setItem('session_id', response.session_id);
                      //     })
                      //     .catch((error) => {
                      //         console.log(error);
                      //     });
                      next();
                  } else {
                      next();
                  }
              }
          },
      },
      {
          path: '/recommendations',
          name: 'recommendations',
          component: () => import('./components/recommendations/Recommendations.vue'),
          beforeEnter: (to, from, next) => {
              if (!localStorage.getItem('api_key')) {
                  next({
                      path: '/login',
                  });
              } else {
                  if (!sessionStorage.getItem('session_id')) {
                      // const apiKey = localStorage.getItem('api_key');
                      // const requestToken = localStorage.getItem('request_token');
                      //
                      // axios.post(
                      //     `${API_BASE_URL}/3/authentication/session/new?api_key=${apiKey}`,
                      //     { request_token: requestToken })
                      //     .then((response: any) => {
                      //         console.log(response);
                      //         sessionStorage.setItem('session_id', response.session_id);
                      //     })
                      //     .catch((error) => {
                      //         console.log(error);
                      //     });
                      next();
                  } else {
                      next();
                  }
              }
          },
      },
  ],
});
