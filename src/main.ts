import '@/assets/css/index.css';
import { RouterView } from 'vue-router';
import { createApp } from 'vue';
import ripple from '@/directives/ripple';
import router from '@/router';
const app = createApp(RouterView);

app.use(router);
app.directive('ripple', ripple);
app.config.globalProperties.$config = () => ({ ripple });

app.mount('#app');
