import { createApp } from 'vue'
import App from './App.vue'

import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'
import { fas } from '../node_modules/@fortawesome/free-solid-svg-icons'
library.add(fas)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
