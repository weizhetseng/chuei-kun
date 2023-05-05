import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueCookies from 'vue-cookies'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

//引入 vee-validate 套件
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min, regex, confirmed } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 定義驗證規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('regex', regex)
defineRule('confirmed', confirmed)

configure({
  // 載入繁體中文語系
  generateMessage: localize({ zh_TW: zhTW }),
  // 當輸入任何內容直接進行驗證
  validateOnInput: true
})

setLocale('zh_TW')

const language = navigator.language;

if (language === "zh-TW") {
  $cookies.set("Lang", "tw", 0);
}


const app = createApp(App)

app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('VueDatePicker', VueDatePicker);

app.use(createPinia())
app.use(router)
app.use(VueCookies)

app.provide('$http', axios)
router.isReady().then(() => app.mount('#app'))
