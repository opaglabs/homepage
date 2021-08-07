import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import ripple from './directives/ripple'

const app = createApp(App)

app.use(router)
app.use(store)
app.directive('ripple', ripple)
app.config.globalProperties.$config = () => ({ripple})

app.mount('#app')
