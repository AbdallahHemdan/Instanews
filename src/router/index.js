import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./../views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('./../views/Signup.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('./../views/Profile.vue'),
  },
  {
    path: '/inbox',
    name: 'Chat',
    component: () => import('./../views/Chat.vue'),
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import('./../views/Explore.vue'),
  },
  {
    path: '/liked',
    name: 'Liked',
    component: () => import('./../views/Liked.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('./../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
