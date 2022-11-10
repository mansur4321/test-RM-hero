import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
