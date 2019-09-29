import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Result from '../views/result.vue'
import Pass from '../views/pass.vue'
import First from '../views/first.vue'
import Second from '../views/second.vue'
import Third from '../views/third.vue'
import Four from '../views/fourth.vue'


//解决vue中的NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/pass',
    name: 'pass',
    component: Pass,
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
  },
  {
    path: '/first',
    name: 'first',
    component: First
  },
  {
    path: '/second',
    name: 'second',
    component: Second
  },
  {
    path: '/third',
    name: 'third',
    component: Third
  },
  {
    path: '/fourth',
    name: 'fourth',
    component: Four
  },


  ]


})