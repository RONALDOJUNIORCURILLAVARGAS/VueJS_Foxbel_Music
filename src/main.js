import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
//Instalado correctamente para vue 3.0
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router/router'
library.add(fas);
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
