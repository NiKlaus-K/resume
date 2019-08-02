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
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
    el: '#app',
    router,
    store,
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
new Vuex.Store({
    
})
store.registerModule('vux', { // 名字自己定义
    state: {
      isLoading: false
    },
    mutations: {
      updateLoadingStatus (state, payload) {
        state.isLoading = payload.isLoading
      }
    }
})

router.beforeEach(function (to, from, next) {
    store.commit('updateLoadingStatus', {isLoading: true})
    next()
  })
  
router.afterEach(function (to) {
    store.commit('updateLoadingStatus', {isLoading: false})
})