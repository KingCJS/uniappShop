import Vue from 'vue'
import App from './App'
import {MyRequest} from './utils/api.js'

Vue.prototype.$myRequest = MyRequest;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
