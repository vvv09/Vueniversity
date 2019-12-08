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
    component: () => import('../views/Classrooms.vue')
  },
  {
    path: '/classrooms/:id',
    name: 'classroom',
    meta: {layout: 'main'},
    component: () => import('../views/Classroom.vue')
  },
  {
    path: '/groups',
    name: 'groups',
    meta: {layout: 'main'},
    component: () => import('../views/Groups.vue')
  },
  {
    path: '/groups/:id',
    name: 'group',
    meta: {layout: 'main'},
    component: () => import('../views/Group.vue')
  },
  {
    path: '/subjects',
    name: 'subjects',
    meta: {layout: 'main'},
    component: () => import('../views/Subjects.vue')
  },
  {
    path: '/subjects/:id',
    name: 'subject',
    meta: {layout: 'main'},
    component: () => import('../views/Subject.vue')
  },
  {
    path: '/students',
    name: 'students',
    meta: {layout: 'main'},
    component: () => import('../views/Students.vue')
  },
  {
    path: '/students/:id',
    name: 'student',
    meta: {layout: 'main'},
    component: () => import('../views/Student.vue')
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
    component: () => import('../views/Teachers.vue')
  },
  {
    path: '/teachers/:id',
    name: 'teacher',
    meta: {layout: 'main'},
    component: () => import('../views/Teacher.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
