import Vue from 'vue'
import App from './App.vue'
import './assets/common.css'
import '../public/font-awesome/css/font-awesome.min.css'
import store from './store'
import './mock/mock'
Vue.config.productionTip = false



new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
