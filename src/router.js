import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/projects/:project',
      name: 'ProjectDetails',
      component: () => import(/* webpackChunkName: "projectdetails" */ './views/ProjectDetails/ProjectDetails.vue'),
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import(/* webpackChunkName: "projects" */ './views/Projects/Projects.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
    {
      path: '/',
      redirect: '/projects',
    },
  ],
  linkActiveClass: 'header__link--active',
});
