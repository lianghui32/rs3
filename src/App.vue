<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './layout/Header.vue';
import Site from './components/Site.vue';
import Footer from './layout/Footer.vue';

</script>
<template>
  <div style="display: flex; flex-direction: column; min-height: 100vh;">
    <Navbar />
    <div style="flex: 1;">
      <RouterView />
      <Site />
    </div>
    <Footer />
  </div>
</template>
