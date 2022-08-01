import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/customers',
      name: 'customers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/modules/customers/components/CustomersDashboard.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/modules/products/components/ProductsDashboard.vue'),
      children: [
        {path: '', name: 'list', component: () => import('@/modules/products/components/ProductsList.vue')},
        {path: 'new', component: () => import('@/modules/products/components/NewProduct.vue')},
        {path: ':productId/edit', name: 'editProduct', component: () => import('@/modules/products/components/EditProduct.vue'), props: true}
      ]
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('@/modules/inventory/components/InventoryDashboard.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/modules/orders/components/OrdersDashboard.vue')
    },
    {
      path: '/permissions',
      name: 'permissions',
      component: () => import('@/modules/permissions/components/PermissionsDashboard.vue')
    }
  ]
})

export default router
