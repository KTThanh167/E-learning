import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'element-plus/dist/index.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUser,
  faLock,
  faBars,
  faAngleDown,
  faX,
  faAngleLeft,
  faAngleRight,
  faEye,
  faCheck,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUser,
  faLock,
  faBars,
  faAngleDown,
  faX,
  faAngleLeft,
  faAngleRight,
  faEye,
  faCheck,
  faCartShopping,
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.use(createPinia())

app.use(Antd)

app.mount('#app')
