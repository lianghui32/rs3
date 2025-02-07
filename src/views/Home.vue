<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        id: 1,
        title: '项目一',
        description: '这是一个关于前端开发的项目，使用了 Vue 和 Bootstrap 5。',
        image: '',
        link: 'https://'
    },
    {
        id: 2,
        title: '项目二',
        description: '这是一个关于后端开发的项目，使用了 Node.js 和 Express。',
        image: '',
        link: 'https://'
    },
    {
        id: 3,
        title: '基于Django的股票预测系统',
        description: '这是一个关于全栈开发的项目，结合了前端和后端技术。',
        image: '',
        link: 'http://116.198.228.5/stock/'
    }
]);
</script>

<template>


    <div class="container py-5">
        <!-- 个人简介 -->
        <div class="text-center mb-5">
            <h1 class="display-5 fw-bold">欢迎来到我的作品集</h1>
            <p class="lead">这里是我的作品集导航页面，展示了我的精选项目和功能介绍。</p>
        </div>

        <!-- 功能页介绍 -->
        <div class="row mb-5">
            <div class="col-md-4">
                <div class="card shadow-sm mb-4">
                    <div class="card-body">
                        <h5 class="card-title">个人简介</h5>
                        <p class="card-text text-truncate">
                            毕业于广西科技大学的数据科学与大数据技术专业的本科毕业生。我对技术充满热情，尤其擅长使用Python进行数据分析和Web开发。此外，我还具备丰富的Linux系统操作经验，以及Docker和Kubernetes容器化技术的应用能力。我致力于应用技术解决实际问题，欢迎来到我的作品集，了解我的专业技能和项目经验。
                        </p>
                        <router-link to="/resume" class="btn btn-primary">了解更多</router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm mb-4">
                    <div class="card-body">
                        <h5 class="card-title">技能展示</h5>
                        <p class="card-text text-truncate">
                            熟悉多种技术栈，包括Python编程、Linux系统操作、前端框架（uni-app、Vue3.js等）、后端框架（Flask、Django）、数据库管理（MySQL、MongoDB）、容器化技术（Docker、K8s）、监控工具（Zabbix、Prometheus）以及CI/CD工作流程。此外，我还善于利用AI工具（如ChatGPT）辅助工作，提高效率。
                        </p>
                        <router-link to="/skills" class="btn btn-primary">了解更多</router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm mb-4">
                    <div class="card-body">
                        <h5 class="card-title">AI导航</h5>
                        <p class="card-text text-truncate">
                            展示热门的 AI 项目和技术网站。
                        </p>
                        <router-link to="/ai" class="btn btn-primary">了解更多</router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- 作品集展示 -->
        <div class="row mb-5">
            <h2 class="text-center mb-4">精选作品集</h2>
            <div class="col-md-4" v-for="item in projects" :key="item.id">
                <div class="card shadow-sm mb-4">
                    <!-- <img :src="item.image" class="card-img-top" :alt="item.title" /> -->
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.description }}</p>
                    </div>
                    <div class="card-footer">
                        <a :href="item.link" class="btn btn-primary w-100">查看作品</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style>
body {
    background-color: #f8f9fa;
    font-family: 'Arial', sans-serif;
}

.card {
    border-radius: 10px;
    transition: transform 0.3s ease;
}

/* 控制卡片高度和文字显示 */
.card-body {
    padding: 1.25rem;
    height: 200px;
    /* 设置卡片高度 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-text {
    flex: 1;
    /* 让文字区域占据剩余空间 */
    overflow: hidden;
    text-overflow: ellipsis;
    /* 文字溢出时省略号 */

}

.btn-primary {
    margin-top: 1rem;
    /* 调整按钮位置 */
}

.card:hover {
    transform: scale(1.02);
}

.card-footer {
    background-color: #f8f9fa;
    border-top: none;
}

.btn-primary {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.btn-primary:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
}
</style>