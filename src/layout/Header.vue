<script setup>
import { ref } from 'vue'
const navItems = ref([
  { label: '首页', path: '/' },
  { label: '简历', path: '/resume' },
  { label: 'test', path: '/test' }
])

import github from '@/assets/img/github.png'
import gitee from '@/assets/img/Gitee.png'
import CSDN from '@/assets/img/CSDN.png'
import newcoder from '@/assets/img/newcoder.png'
const activeIndex = ref('1')

const socialIcons = ref([
  {
    name: 'GitHub',
    link: 'https://github.com/lianghui32?tab=repositories',
    image: github,
  },
  {
    name: 'Gitee',
    link: 'https://gitee.com/lianghui2333',
    image: gitee,
  },
  {
    name: 'CSDN',
    link: 'https://blog.csdn.net/qq_52313022',
    image: CSDN,
  },
  {
    name: 'newcoder',
    link: 'https://www.nowcoder.com/users/925753281',
    image: newcoder,
  },
  // 可以添加更多社交图标
])

function openLink(url) {
  window.open(url, '_blank')
}

</script>

<template>

  <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg navbar-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand font-bold">Hui`s Tools</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="(item, index) in navItems" :key="index" class="nav-item">
            <router-link :to="item.path" class="nav-link" :class="{ 'active': $route.path === item.path }">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="social-icons">
        <div v-for="(icon, index) in socialIcons" :key="index" class="social-icon" @click="openLink(icon.link)"
          :title="icon.name">
          <img :src="icon.image" :alt="icon.name" />
        </div>
      </div>
    </div>
  </nav>
</template>
<style>
.nav-link.active {
  color: #ffffff;
  /* 或你想要的颜色 */
  background-color: #0e63edce;
  /* 或你想要的颜色 */
  /* border-radius: 15%; */
  padding-left: 10px;
  font-weight: bolder;
}


.social-icons {
  display: flex;
  gap: 10px;
}

.social-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}

.social-icon:hover {
  transform: scale(1.1);
}

.social-icon img {
  width: 100%;
  height: 100%;
}
</style>
