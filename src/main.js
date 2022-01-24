import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Markdown from 'vue3-markdown-it'

library.add(fab, fas)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(Markdown)
  .use(router)
  .mount('#app')
