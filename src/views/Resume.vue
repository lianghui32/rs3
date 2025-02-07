<template>
  <div class="container mx-auto p-4">
    <div style="display: flex;">
      <h1 class="text-3xl font-bold mb-4">梁慧的简历</h1>
      <button @click="printDocument"  type="button" class="btn btn-success" style="height: 50px; margin-left: 20px;">打印简历</button>
    </div>
    <div class="bg-white p-4 shadow-md rounded-md">
      <iframe id="rs" ref="resumeIframe" src="http://116.198.228.5/resume.html" width="100%" height="2400px" frameborder="0" scrolling="auto"></iframe>
    </div>
  </div>
</template>

<script>
import printJS from 'print-js';

export default {
  methods: {
    printDocument() {
      printJS({
        printable: 'rs', // 打印的元素id
        type: 'html', // 打印类型为 HTML
        style: `
          @page {
            size: A4;
            margin: 1cm;
          }
          body {
            font-family: Arial, sans-serif;
            font-size: 12pt;
            line-height: 1.5;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
        `
      });
    }
  }
};
</script>