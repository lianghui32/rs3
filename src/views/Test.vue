<template>
    <div class="container">
      <h1 class="my-4">Vue与Bootstrap结合示例</h1>
  
      <button class="btn btn-primary" @click="showAlert">点击我</button>
  
      <form @submit.prevent="handleSubmit" class="mt-4">
        <div class="mb-3">
          <label for="username" class="form-label">用户名</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="username"
          />
        </div>
        <button type="submit" class="btn btn-success">提交</button>
      </form>
  
      <div v-if="submitted" class="alert alert-success mt-4" role="alert">
        提交成功！
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        submitted: false
      };
    },
    methods: {
      showAlert() {
        alert('你点击了按钮！');
      },
      handleSubmit() {
        this.submitted = true;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  