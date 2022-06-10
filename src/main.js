import { createApp } from 'vue'
//Librerias que se usaran de fontawesomes
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router/router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
library.add(fas);
//Router y fontawesome montados en la app
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
