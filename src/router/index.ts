import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from "@/components/MainComponent.vue";
// import testComponent from "@/components/testComponent.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainComponent
    },
  ]
})

export default router
