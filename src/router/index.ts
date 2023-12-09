// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  
  {
    path: '/InspeccionMuestreoAceite',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'InspeccionMuestreoAceite',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/InspeccionMuestroAceiteView.vue'),
      },
    ],
  },
  {
    path: '/despachoAceite',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'IdespachooAceite',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/DespachoAceiteView.vue'),
      },
    ],
  },
  {
    path: '/InspeccionHarinaPescado',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'InspeccionHarinaPescado',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/InspeccionHarinaPescadoView.vue'),
      },
    ],
  },
  {
    path: '/InspeccionSuperficies',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'InspeccionSuperficies',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/InspeccionSuperficiesView.vue'),
      },
    ],
  },
  {
    path: '/despachoHarina',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'IdespachooHarina',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/DespachoHarinaView.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Servicios',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/ServiciosView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
