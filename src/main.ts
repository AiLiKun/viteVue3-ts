import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { createPinia } from "pinia";
// 创建store实例
const store = createPinia();

const app = createApp(App);

app.use(store);

createApp(App).use(router).mount('#app')