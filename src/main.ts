import '@/assets/css/index.css';
import { RouterView } from 'vue-router';
import { createApp } from 'vue';
import router from '@/router';
const app = createApp(RouterView);

app.use(router);

app.mount('#app');
