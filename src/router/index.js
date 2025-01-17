import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
const Coffee = () => import('../components/Coffee.vue')
const Register = () => import('../components/Register.vue')
const CommUser = () => import('../components/CommUser.vue')
const CommModity = () => import('../components/Commodity.vue')
const ForME = () => import('../components/ForME.vue')
const Import = () => import('../components/Import.vue')
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Coffee',
      component: Coffee
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/CommUser',
      name: 'CommUser',
      component: CommUser
    },
    {
      path: '/CommModity',
      name: 'CommModity',
      component: CommModity
    },
    {
      path: '/ForME',
      name: 'ForME',
      component: ForME
    },
    {
      path: '/Import',
      name: 'Import',
      component: Import
    }
  ],
  base: '/hot/'
})
