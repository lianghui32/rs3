<script setup>
import { ref } from 'vue'
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


const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="footer">
    <div class="footer-content">© {{ currentYear }} Lianghui. 保留所有权利.</div>
    <hr>
    <div class="social-icons">
      <div v-for="(icon, index) in socialIcons" :key="index" class="social-icon" @click="openLink(icon.link)"
        :title="icon.name">
        <img :src="icon.image" :alt="icon.name" />
      </div>
    </div>
  </div>

</template>


<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  /* z-index: -100; */
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


.social-icons {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
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