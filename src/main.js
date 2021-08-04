import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync';
import './assets/css/index.css'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

//     "dep-import-type": "link:./dep-import-type",