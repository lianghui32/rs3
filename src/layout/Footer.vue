<template>
    <div class="footer fixed-bottom">
      <div class="footer-content">© {{ currentYear }} Lianghui. 保留所有权利.</div>
    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const currentYear = new Date().getFullYear()
  </script>
  
  <style scoped>
  .footer {
    text-align: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    z-index: -1;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    .footer {
      padding: 15px;
      font-size: 14px;
    }
  }
  </style>
  