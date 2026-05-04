import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

// Template assets (CSS)
import './assets/css/bootstrap.css'
import './assets/css/fonts.css'
import './assets/css/style.css'

// Project overrides (palette + small tweaks)
import './style.css'

createApp(App).use(router).mount('#app')
