import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import CourseView from '@/views/CourseView.vue'
import MembershipView from '@/views/MembershipView.vue'
import CourseDetailView from '@/views/CourseDetailView.vue'
import SearchView from '@/views/SearchView.vue'

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'membership',
        name: 'membership',
        component: MembershipView,
      },
      {
        path: 'course',
        name: 'course',
        component: CourseView,
      },
      {
        path: 'coursedetail',
        name: 'coursedetail',
        component: CourseDetailView,
      },
      {
        path: 'search',
        name: 'search',
        component: SearchView,
      },
    ],
  },
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginView,
      },
      {
        path: 'register',
        name: 'register',
        component: RegisterView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
