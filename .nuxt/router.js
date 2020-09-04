import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _30bc9d08 = () => interopDefault(import('..\\client\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1083b440 = () => interopDefault(import('..\\client\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _1dfa0e65 = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _30bc9d08,
    name: "login"
  }, {
    path: "/register",
    component: _1083b440,
    name: "register"
  }, {
    path: "/",
    component: _1dfa0e65,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
