<template>
  <div class="not-found-page">
    <div class="container">
      <div class="content">
        <h1>404</h1>
        <h2>页面未找到</h2>
        <p>你访问的页面不存在或已被移除。</p>
        <router-link to="/" class="btn btn-primary">返回主页</router-link>
      </div>
      <!-- <img src="/path/to/404-image.svg" alt="404 Not Found" class="image"> -->
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  color: #333;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  padding: 20px;
}

.content {
  margin-bottom: 20px;
}

h1 {
  font-size: 100px;
  color: #6c757d;
}

h2 {
  font-size: 36px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}

.image {
  max-width: 100%;
  height: auto;
}
</style>
