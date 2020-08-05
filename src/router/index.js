import Vue from 'vue';
import VueRouter from 'vue-router';
import { isLoggedIn } from './../auth/index';

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
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('./../views/Signup.vue'),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: '/forget',
    name: 'ForgetPassword',
    component: () => import('./../views/ForgetPassword.vue'),
    meta: {
      hideNavbar: true,
    },
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

// check for validating routes beforeEach redirect
router.beforeEach((to, from, next) => {
  if (to.name == 'Login' && isLoggedIn()) {
    next({
      path: '/',
    });
  } else if (to.name == 'Signup' && isLoggedIn()) {
    next({
      path: '/',
    });
  } else if (
    to.name != 'Login' &&
    to.name != 'Signup' &&
    to.name != 'ForgetPassword' &&
    !isLoggedIn()
  ) {
    next({
      path: '/login',
    });
  } else {
    next();
  }
});

export default router;
