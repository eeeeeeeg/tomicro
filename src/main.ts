import './public-path'
import { useService } from './assets/useService'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
useService(app)
app.use(ElementPlus).use(store).use(router).mount('#app1')
