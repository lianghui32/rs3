<script setup>
import { ref } from 'vue'
const navItems = ref([
  { label: '首页', path: '/' },
  { label: '简历', path: '/resume' },
  { label: '博客', path: '/blog' },
  { label: 'test', path: '/test' },

])


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


</style>
