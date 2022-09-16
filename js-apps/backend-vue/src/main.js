import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.css';
import router from './router';
import store from './store';
import api from './services/api';
import 'tw-elements';

const token = localStorage.getItem('access_token');

(async () => {
  const app = createApp(App).use(store);
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await store.dispatch('system/loadUser');
  } else {
    router.go('/');
  }

  app.use(router).mount('#app');
})();
