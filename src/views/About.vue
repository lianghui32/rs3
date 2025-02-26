<script setup>
import { ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import Resume from './Resume.vue';
import Xueli from './Xueli.vue';

const isprint = ref(true);

import axios from 'axios';

// 定义加载状态
const isLoading = ref(false);

// 下载 PDF 的方法
const downloadPdf = async () => {
  try {
    // 开始加载
    isLoading.value = true;

    const response = await axios({
      url: 'https://pythonhui.pythonanywhere.com/rs-pdf', // 后端地址
      method: 'GET',
      responseType: 'blob' // 以二进制流接收响应
    });

    // 创建下载链接并触发下载
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = '梁慧_运维开发_广科大_2024.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error('下载失败:', error);
    alert('下载失败，请稍后再试！');
  } finally {
    // 结束加载
    isLoading.value = false;
  }
};
</script>

<template>
  <div id="resume">
    <div class="button-container">
      <!-- 下载按钮 -->
      <button class="btn-print" :disabled="isLoading" @click="downloadPdf">
        <span v-if="!isLoading">下载 PDF</span>
        <span v-else class="loading-dots">加载中<dot></dot>
          <dot></dot>
          <dot></dot>
        </span>
      </button>
      <button class="btn-print" v-print="isprint ? '#resume-container' : null" v-show="isprint">电脑打印</button>
      <button class="btn-print" style="background-color:brown;" @click="isprint = !isprint">{{ isprint ? '学历认证' :
        '查看简历' }}</button>
    </div>
    <Resume v-show="isprint"></Resume>
  </div>

  <Xueli v-show="!isprint"></Xueli>
</template>

<style scoped>
/* 在这里保留原始的CSS样式 */
#resume {
  font-family: Arial, sans-serif;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.resume-container {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.btn-print {
  background-color: #215bc7;
  color: white;
  /* padding: 10px 20px; */
  text-align: center;
  margin-right: 10px;
}


.info-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.info-table {
  flex: 1;
  margin-right: 20px;
}

.image-container {
  display: flex;
  align-items: center;
}

.image-container img {
  height: 80px;
  width: auto;
  margin-left: 10px;
}

/* 加载动画样式 */
.loading-dots {
  font-size: 16px;
  position: relative;
}

.loading-dots dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 0 2px;
  background-color: white;
  border-radius: 50%;
  animation: blink 1.5s infinite;
}

.loading-dots dot:nth-child(2) {
  animation-delay: 0.3s;
}

.loading-dots dot:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes blink {

  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}

@media (max-width: 375px) {
  #resume {
    font-size: 10px;
  }


  .info-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .image-container {
    margin-top: 10px;
  }

  .image-container img {
    height: 40px;
    margin-left: 5px;
  }
}

@media (max-width: 700px) {
  #resume {
    font-size: 10px;
    margin: 0px;
  }

  .resume-container {
    width: 95%;
    margin: 0;
    padding: 10px;
    background-color: #fff;
    box-shadow: none;
  }


  .info-container {
    align-items: flex-start;
  }

  .image-container img {
    height: 50px;
    margin-left: 5px;
  }
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 5px;
}

td {
  padding: 2px;
  vertical-align: top;
}

h1,
h3 {
  text-align: left;
  border-bottom: 1px solid #000;
  padding-bottom: 1px;
  width: 100%;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

ol li {
  line-height: 1.5;
}

/* 打印样式 */
@media print {
  @page {
    size: A4;
    margin: 10mm;
    page-break-inside: avoid;
  }

  body>* {
    display: none;
  }

  .resume-container {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  /* .container {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: none;
  } */

  .info-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  .info-table {
    flex: 1;
    margin-right: 0;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 5px;
  }

  .info-table td {
    padding: 2px;
    vertical-align: top;
  }

  .image-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .image-container img {
    height: 60px;
    width: auto;
    margin-left: 5px;
  }

  .resume-container h1,
  .resume-container h3 {
    margin: 0;
    padding: 0;
    width: 100%;
    border-bottom: 1px solid #000;
    padding-bottom: 1px;
  }

  .resume-container a {
    color: #007bff;
    text-decoration: none;
  }

  .resume-container a:hover {
    text-decoration: underline;
  }

  .resume-container table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 5px;
  }

  .resume-container td {
    padding: 2px;
    vertical-align: top;
  }

  /* .resume-container ol {
    margin: 0;
    padding: 0;
    list-style-type: decimal;
  } */

  .resume-container ol li {
    line-height: 1.3;
    margin: 2px 0;
    padding: 0;
  }


  .page-break {
    page-break-after: always;
  }

  .no-print {
    display: none;
  }
}
</style>
