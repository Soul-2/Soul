import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('../views/login')
const Home = () => import('../views/home')
const Register = () => import('../views/register')
const Image = () => import('../components/image')
Vue.use(Router)
const router = new Router({
  routes: [
    { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      component: Home,
      children: [{
        path: '/image', component: Image
      }]
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
// ================导航守卫
// router.beforeEach((to, from, next) => {
//   const val = store.getUser()
//   if (to.path !== '/login' && !val.token) {
//     return next('/login')
//   }
//   next()
// })
export default router
