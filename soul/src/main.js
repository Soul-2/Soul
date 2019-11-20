import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import myPlugins from './components/index'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(myPlugins)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// 开始跳转
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  next()
})
// 结束跳转
router.afterEach(() => {
  NProgress.done()
})
