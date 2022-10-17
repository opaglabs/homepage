import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Default',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Início',
        component: () => import('@/pages/index.vue'),
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
  routes,
});
