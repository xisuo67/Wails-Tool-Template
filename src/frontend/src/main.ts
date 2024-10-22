import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/styles/index.css' // global css
import '@/styles/utils.scss'
import '@/styles/theme.scss'
import '@/styles/entry.css'
import '@/styles/element-plus.scss'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
