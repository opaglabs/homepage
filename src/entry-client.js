  
import { createApp } from './main'
import { sync } from 'vuex-router-sync';

const { app, router, store } = createApp()

sync(store, router);

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')
})