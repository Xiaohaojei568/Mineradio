import { createApp } from 'vue';
import App from './App.vue';
import './styles/mineradio.css';

try {
  document.documentElement.classList.add(localStorage.getItem('mineradio-diy-player-mode-v1') === '1' ? 'diy-mode-preload' : 'simple-mode-preload');
} catch (e) {
  document.documentElement.classList.add('simple-mode-preload');
}

createApp(App).mount('#app');
