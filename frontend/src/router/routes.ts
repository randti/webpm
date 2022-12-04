import { RouteRecordRaw } from "vue-router"
import Home from "@/views/Home.vue"
import Employees from '@/views/Teacher.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/teacher',
    component: Employees,
  },
  {
    path: '/contact',
    component: () => import('@/views/Contact.vue'),
  },
]

export default routes
