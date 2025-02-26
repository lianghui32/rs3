<script setup>
import { ref } from 'vue';
import printJS from 'print-js';


import imageSrc from '@/assets/img/bytx.jpg';
import qrCodeSrc from '@/assets/img/qrcode.png';

const name = ref('梁慧');
const gender = ref('男');
const birthDate = ref('2001年04月25日');
const education = ref('本科');
const wechat = ref('TD_lianghui');
const email = ref('hui@lianghui.vip');
const emailHref = ref('mailto:hui@lianghui.vip');

const educationPeriod = ref('2020.09 - 2024.07');
const university = ref('广西科技大学');
const major = ref('数据科学与大数据技术');
const degree = ref('本科');
const gpa = ref('7.41');
const verificationLink = ref('https://www.lianghui.vip/');



const skills = ref([
  '熟悉 Linux CentOS7 系统的使用操作，具有虚拟机和云服务器使用经验。',
  '熟悉 Python 编程语言，能够熟练使用 Python 进行爬虫、数据处理、数据分析、数据挖掘、Web 开发等。',
  '了解 uni-app、Vue3.js、Element Plus、Layui、Bootstrap、Echarts 等前端框架和组件及 Flask 和 Django 后端框架、具备一定的前后端开发经验。',
  '熟悉数据库管理，具备 MySQL、MongoDB 等数据库的安装、备份恢复和 SQL 查询等技能。了解数据库的常用架构设计，例如 MySQl 主从、MHA，Redis/MangoDB 集群架构。',
  '熟悉容器化技术，能够使用 Docker、K8s 进行镜像构建、容器部署和管理及容器编排。',
  '了解 Nginx、Haproxy、LVS 等负载均衡技术的基本配置和使用。',
  '具备 Zabbix、Prometheus 监控工具的基本部署和告警设置经验，了解 ELK/EFK 日志系统和 Git、Gitlab、Jenkins CI/CD 工作流程的搭建。',
  '熟练使用 ChatGPT 等 AI 工具辅助工作，提高工作效率。',
]);

const internshipPeriod = ref('2023.07-2023.12');
const internshipCompany = ref('广州尚观信息科技有限公司');

const projects = ref([
  {
    title: 'WordPress 博客、商城网站部署与运维',
    href: 'http://116.198.228.5:8088',
    overview: '负责从零搭建并维护一个基于 Nginx、MySQL 和 PHP 的 WordPress 网站，确保其在高流量下的稳定运行和数据安全。具有容器化部署、单机部署、多主机分离式部署经验。',
    techStack: [
      '数据库：MySQL，代理：Nginx，后端：PHP,应用：WordPress,容器化：Docker',
    ],
    mainTasks: [
      '环境搭建：成功部署并了 Nginx、MySQL 和 PHP 的 LNMP 堆栈，确保网站的可用性。',
      '性能优化：成功通过调整 Nginx 配置及插件配置，将页面加载时间减少了 50%。',
      '安全性增强：实施了防火墙规则、SSL 证书部署和定期的安全扫描，有效提升了网站的安全性。',
      '多主机部署：通过分布式架构（如多主机分离式部署），实现了负载均衡和高可用性',
    ],
  },
  {
    title: '基于 Django 的股票预测系统开发与部署',
    href: 'http://116.198.228.5/stock/',
    overview: '负责开发并部署一个基于 Django 框架的股票预测系统，该系统能够提供用户账户管理、数据获取与预处理、股票价格预测以及实时行情展示等功能。',
    techStack: [
      '后端：Django, Python',
      '前端：Bootstrap, Echarts',
      '数据处理：Tushare API, 数据清洗，数据归一化，特征工程',
      '机器学习：随机森林，LSTM',
      '部署：Docker',
    ],
    mainTasks: [
      '后端开发：搭建 Django 后端框架，实现用户注册、登录、登出等账户信息管理功能。',
      '前端开发：使用 Bootstrap 和 Echarts 构建响应式前端页面，提升用户体验。',
      '数据处理：从 Tushare 获取股票数据，执行数据清洗、归一化和特征工程，为模型训练准备数据。',
      '模型训练与调优：应用随机森林和 LSTM 算法进行股票价格预测，调整模型参数以优化预测准确率。',
      '结果可视化：设计并实现预测结果和模型评价指标的可视化展示，便于用户理解模型性能。',
      '系统部署：利用 Docker 实现系统的容器化部署，提高系统的可移植性和稳定性。',
    ],
  },

  {
    title: 'MySQL 数据库备份与恢复',
    href: '',
    overview: '负责实施 MySQL 数据库的数据备份与恢复策略，确保数据的安全性和高可用性。',
    techStack: [
      '数据库：MySQL',
      '工具：SQL, mysqldump, xtrabackup',
    ],
    mainTasks: [
      '数据导入导出：利用 SQL 语句 OUTFILE 和 LOAD DATA INFILE 实现特定数据的高效导入导出。',
      '数据备份与恢复：运用 mysqldump 工具完成本地及远程数据库的备份与恢复操作。',
      '热备份实现：使用 xtrabackup 工具执行热备份，包括完全备份和增量备份，以减少系统停机时间。',
      '备份验证与测试：定期进行备份数据的完整性验证和恢复测试，确保备份方案的可靠性和有效性。',
    ],
  },
  {
    title: 'Docker 容器化部署 Prometheus+Grafana+node-exporter 监控系统',
    href: '',
    overview: '设计并部署了一个基于 Docker 的监控系统，整合 Prometheus、node-exporter 和 Grafana，实现对本地及远程云主机的性能监控和数据可视化。',
    techStack: [
      '容器化：Docker',
      '监控工具：Prometheus, Grafana, node-exporter',
    ],
    mainTasks: [
      'Docker 网络配置：配置 Docker 网络，确保服务间的无缝通信。',
      'Prometheus 配置：自定义 Prometheus 配置文件，实现自动发现并监控节点指标。',
      '系统级指标收集：部署并配置 node-exporter，收集关键系统级性能指标。',
      '数据可视化：在 Grafana 中设置数据源，创建定制仪表板展示关键性能指标。',
      '警报规则配置：配置 Prometheus 警报规则，并集成 Grafana 通知机制，实现实时监控告警。',
      '权限管理：管理组织和用户权限，确保监控数据的安全访问。',
    ],
  },
]);


</script>

<template>

  <div class="resume-container" id="resume-container" v-show="isprint">
    <h1>{{ name }}</h1>

    <div class="info-container">
      <table class="info-table">
        <tr>
          <td><strong>性别：</strong> {{ gender }}</td>
          <td><strong>出生日期：</strong> {{ birthDate }}</td>
        </tr>
        <tr>
          <td><strong>学历：</strong> {{ education }}</td>
          <td><strong>联系微信：</strong> {{ wechat }}</td>
        </tr>
        <tr>
          <td><strong>籍贯：</strong> {{ birthDate }}</td>
          <td><strong>电子邮箱：</strong> <a :href="emailHref" style="text-decoration: none;">{{ email }}</a></td>
        </tr>
      </table>

      <div class="image-container">
        <img :src="imageSrc" alt="个人照片" />
        <img :src="qrCodeSrc" alt="二维码" />
      </div>
    </div>
    <h3>教育经历</h3>
    <table>
      <tr>
        <td>{{ educationPeriod }}</td>
        <td>{{ university }}</td>
        <td>{{ major }}</td>
        <td>{{ degree }}</td>
      </tr>
      <tr>
        <td colspan="2">GPA: {{ gpa }}/10.0</td>
        <td colspan="4"><a :href="verificationLink" target="_blank">www.lianghui.vip认证</a></td>
      </tr>
    </table>

    <h3>专业技能</h3>
    <ol>
      <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
    </ol>

    <h3>实训经历</h3>
    <table>
      <tr>
        <td>{{ internshipPeriod }}</td>
        <td>{{ internshipCompany }}</td>
      </tr>
    </table>

    <h3>项目经历</h3>
    <div v-for="(project, index) in projects" :key="index" style="display: inline;padding-top: 10px">
      <div >
        <span>
          <a :href="project.href" target="_blank">{{ index + 1 }}、{{ project.title }}</a>
        </span>
        <a v-if="project.href" :href="project.href" target="_blank" style="float: right;">{{ project.href }}</a>
      </div>

      <div style="padding-left: 25px;">
        <h5>项目概述：</h5>
      <p>{{ project.overview }}</p>

      <h5>技术栈：</h5>
      <ol>
        <li v-for="(tech, techIndex) in project.techStack" :key="techIndex">{{ tech }}</li>
      </ol>

      <h5>主要工作：</h5>
      <ol>
        <li v-for="(task, taskIndex) in project.mainTasks" :key="taskIndex">{{ task }}</li>
      </ol>
      </div>
    </div>
  </div>

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
  padding: 10px 20px;
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
