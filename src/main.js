import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
//5 vue中使用router
var app = createApp(App);
app.use(router);
app.mount('#app')

