import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入全局样式
import './styles/index.scss'
// 导入 svgIcon
import installIcons from '@/icons'
// 导入路由守卫
import './permission'
// filter
import installFilter from '@/filters'
const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)
app.use(store).use(router).mount('#app')
