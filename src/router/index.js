import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../Views/HomeView.vue';
import PublishView from '../Views/PublishView.vue';
import ReadView from '../Views/ReadView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/publish-blogs',
      name: 'publish',
      component: PublishView
    },
    {
      path: '/read-blogs',
      name: 'read',
      component: ReadView
    },
  ]
})

export default router