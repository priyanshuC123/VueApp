import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue';
import SigninView from '../views/Signin.vue';
import RegisterView from '../views/Register.vue';
import DashboardView from '../views/Dashboard.vue'
import { auth } from '../main';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      beforeEnter: (to, from, next) => {
        if (!auth.currentUser) {
          next('/signin');
        } else {
          next();
        }
      },
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
  ]
})


export default router
