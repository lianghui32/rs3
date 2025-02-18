import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
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
    name: 'About',
    component: About,
  },{
    path: '/blog',
    name: 'Blog',
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
  if (to.name === 'Blog') {
    window.open('https://blog.csdn.net/qq_52313022', '_blank');
  }
  else {
    next()
  }
});

export default router;