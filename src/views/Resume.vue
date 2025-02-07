<template>
  <div class="container mx-auto p-4">
    <div style="display: flex;">
      <button @click="printDocument" type="button" class="btn btn-success"
        style="height: 50px; margin-left: 20px;">打印</button>
      <button @click="openCertificate" type="button" class="btn btn-info" style="height: 50px; margin-left: 20px;">{{
        showIframe ? '学历认证' : '查看简历' }}</button>
    </div>
    <iframe id="rs" ref="resumeIframe" :src=url width="100%" height="2300" frameborder="0" scrolling="auto"
      >
    </iframe>
    <!-- <iframe id="rs" ref="resumeIframe" src="http://116.198.228.5/pdf.html" width="100%" height="2300"
      frameborder="0" scrolling="auto" v-show="!showIframe">
    </iframe> -->
  </div>
</template>

<script setup>
import printJS from 'print-js';
import { ref } from 'vue';

const url = ref('http://116.198.228.5/resume.html');
const showIframe = ref(true);
function openCertificate() {
  showIframe.value = !showIframe.value;
  if (showIframe.value) {
    url.value = 'http://116.198.228.5/resume.html';
  } else {
    url.value = 'http://116.198.228.5/pdf.html';
  }
}

function printDocument() {
  printJS({
    printable: 'rs', // 打印的元素id
    type: 'html', // 打印类型为 HTML
    // style: `
    //       @page {
    //         size: A4;
    //         margin: 1cm;
    //       }
    //       body {
    //         font-family: Arial, sans-serif;
    //         font-size: 12pt;
    //         line-height: 1.5;
    //       }
    //       iframe {
    //       width: 100%;
    //           height: 100%;
    //           border: none;
    //       }
    //     `
  });
}

</script>