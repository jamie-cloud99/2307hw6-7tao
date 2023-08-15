import './assets/main.css'
import './assets/icofont/icofont.min.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {getImageUrl } from './methods/format'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.globalProperties.$format = {
  getImageUrl
}

app.mount('#app')
