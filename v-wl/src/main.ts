import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import install from '@/utils/install';
import components from '@/components/antd/config'
// import '@/components/antd/index'
import '@/public-path'

const app = createApp(App);
// 注册 antd 组件
Object.values(components).map(com => install(app, com));

console.log(app, 'hgvhgvgh');


app.use(store).use(router).mount('#app');

export default app;
