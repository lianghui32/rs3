import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import Resume from '../views/Resume.vue';
import Test from '../views/Test.vue';
import Aiweb from '../views/Aiweb.vue';
import Skills from '@/components/Skills.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/resume',
    name: 'Resume',
    // component: Resume,
  },
  {
    path: '/ai',
    name: 'Ai',
    component: Aiweb,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === 'Resume') {
    window.open ('http://116.198.228.5/', '_blank');
  }
  else {
    next()
  }
});

  export default router;