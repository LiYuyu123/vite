import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './permission'
import './assets/less/normalize.less'

const app = createApp(App)

app.use(store).use(router).mount('#app')
