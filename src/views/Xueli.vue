<template>
    <div>
        <h4>学历修改文档展示</h4>
        <div class="document-container">
            <div class="document" v-for="item in documents" :key="item.title">
                <h2>{{ item.title }}</h2>
                <img :src="item.image" :alt="item.alt" width="100%" />
                <!-- <p>{{ item.text }}：<a :href="item.href" download>下载</a></p> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const documents = ref([
    {
        title: '学信网 文档',
        image: new URL('@/assets/img/学信网.jpg', import.meta.url).href, // 使用import.meta.url
        alt: '学信网文档',
        // text: '学信网.jpg：更详细',
        // href: './img/学信网.jpg',
    },
    {
        title: '双证 文档',
        image: new URL('@/assets/img/双证.jpg', import.meta.url).href, // 使用import.meta.url
        alt: '双证文档',
        // text: '双证.jpg：更详细',
        // href: './img/双证.jpg',
    },
    {
        title: '成绩单 文档',
        image: new URL('@/assets/img/成绩单.jpg', import.meta.url).href, // 使用import.meta.url
        alt: '成绩单',
        // text: '成绩单.jpg：更详细',
        // href: './img/成绩单.jpg',
    },
    {
        title: '成绩单1 文档',
        image: new URL('@/assets/img/成绩单1.jpg', import.meta.url).href, // 使用import.meta.url
        alt: '成绩单1',
        // text: '成绩单1.jpg：更详细',
        // href: './img/成绩单1.jpg',
    }, {
        title: '绩点说明 文档',
        image: new URL('@/assets/img/绩点说明.jpg', import.meta.url).href, // 使用import.meta.url
        alt: '绩点说明文档',
        // text: '绩点说明.jpg：更详细',
        // href: './img/绩点说明.jpg',
    },
]);
</script>

<style>
h4 {
    text-align: center;
    color: #333;
}

.document-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
    justify-content: center;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.document {
    margin: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
}

.document img {
    width: 100%;
    height: auto;
}

.btn {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.btn:hover {
    background-color: #0056b3;
}

@media (max-width: 425px) {
    .document-container {
        grid-template-columns: 1fr;
    }

    .document {
        margin: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        max-width: 100%;
    }

    .document img {
        max-height: 400px;
    }
}
</style>