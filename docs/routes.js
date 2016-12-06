export default [
  {
    path: '/',
    component: resolve => require(['./pages/Home.vue'], resolve)
  },
  {
    path: '/button',
    component: resolve => require(['./pages/Button.vue'], resolve)
  },
  {
    path: '/icon',
    component: resolve => require(['./pages/Icon.vue'], resolve)
  },
  {
    path: '/grid',
    component: resolve => require(['./pages/Grid.vue'], resolve)
  },
  {
    path: '/alert',
    component: resolve => require(['./pages/Alert.vue'], resolve)
  }
]
