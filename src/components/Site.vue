<template>
    <div>
        <!-- 回到顶部按钮 -->
        <button class="back-to-top" @click="scrollToTop" v-if="showBackToTop">回到顶部</button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)

// 监听滚动事件
const handleScroll = () => {
    showBackToTop.value = window.scrollY > 200
}

// 滚动到顶部的方法
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.back-to-top {
    position: fixed;
    bottom: 80px;
    right: 80px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000;
    /* 确保按钮在其他内容之上 */
}

.back-to-top:hover {
    background-color: #0056b3;
}
</style>
