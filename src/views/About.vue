<script setup>
import { ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import Resume from './Resume.vue';
import Xueli from './Xueli.vue';

const isprint = ref(true);

// import html2pdf from 'html2pdf.js';

// const downloadPdf = () => {
//   const element = document.getElementById('resume-container');
//   const options = {
//     margin: 0,
//     filename: '梁慧_运维开发_广科大_2024.pdf',
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: {
//       scale: 2, onclone: (clonedDoc) => {
//         // 在克隆的文档中处理超链接
//         const links = clonedDoc.querySelectorAll('a[data-href]');
//         links.forEach((link) => {
//           link.textContent = link.getAttribute('data-href'); // 显示链接地址
//         });
//       }
//     },
//     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//   };

//   html2pdf().from(element).set(options).save();

// };
</script>

<template>
  <div id="resume">
    <div class="button-container">
      <!-- <button class="btn-print" style="background-color: gray;" @click="downloadPdf" v-show="isprint">下载 PDF</button> -->
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
