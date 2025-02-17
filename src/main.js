// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Print from 'vue3-print-nb'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Print)

app.mount('#app')
