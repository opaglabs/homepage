import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import './assets/css/index.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
