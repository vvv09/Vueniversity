import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'home'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/classrooms',
    name: 'classrooms',
    meta: {layout: 'main'},
    component: () => import('../views/ClassroomList.vue')
  },
  {
    path: '/groups',
    name: 'groups',
    meta: {layout: 'main'},
    component: () => import('../views/GroupList.vue')
  },
  {
    path: '/subjects',
    name: 'subjects',
    meta: {layout: 'main'},
    component: () => import('../views/SubjectList.vue')
  },
  {
    path: '/students',
    name: 'students',
    meta: {layout: 'main'},
    component: () => import('../views/StudentList.vue')
  },
  {
    path: '/schedule',
    name: 'schedule',
    meta: {layout: 'main'},
    component: () => import('../views/Schedule.vue')
  },
  {
    path: '/teachers',
    name: 'teachers',
    meta: {layout: 'main'},
    component: () => import('../views/TeacherList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
