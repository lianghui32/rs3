<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './layout/Header.vue';
import Site from './components/Site.vue';
import Footer from './layout/Footer.vue';

</script>
<template>
  <div id="app">
    <Navbar />

    <router-view />
    <Site />
    
  </div>
  <Footer />
</template>

