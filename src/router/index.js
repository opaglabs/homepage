import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Default',
    component: () => import('../layouts/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Início',
        component: () => import('../pages/index.vue')
      },
      {
        path: '/sobre',
        name: 'Sobre',
        component: () => import('../pages/sobre/index.vue')
      },
      {
        path: '/projetos',
        name: 'Projetos',
        component: () => import('../pages/projetos/index.vue')
      },
      {
        path: '/contato',
        name: 'Contato',
        component: () => import('../pages/contato/index.vue')
      }
    ]
  }
]

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
