import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'projects',
      component: () => import(/* webpackChunkName: "about" */ './views/Projects.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue'),
    },
  ],
  linkExactActiveClass: 'header__link--active',
});
