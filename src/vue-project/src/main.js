import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

createApp(App).use(store).use(router).mixin(mixins).mount('#app')

window.Kakao.init("0a844250b8fff1808087d99154793976");
