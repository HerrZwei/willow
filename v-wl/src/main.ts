import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/public-path'

createApp(App).use(store).use(router).mount('#app')
