// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入jquery
/* eslint-disable no-unused-vars */
import $ from 'jquery'
// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/icon/css/all.min.css'
import VueResource from 'vue-resource'
import Utils from './utils/resume'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    data(){
        return{
            res:"",//创建res对象
        }
    },
    mounted() {
    },
    methods: {
    },
})