import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Import custom CSS
import '@/scss/styles.scss'


import App from './App.vue'
import router from './router'

import './assets/main.css'
import * as bootstrap from 'bootstrap'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
