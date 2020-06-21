import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'
import classfiyRouter from './classfiy'
import shoppingRouter from './shopping'
import loginSuccessRouter  from './loginSuccess'
import meRouter from './me'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes:[
    homeRouter,
    classfiyRouter,
    shoppingRouter,
    meRouter,
    loginSuccessRouter,
    {
      path:'/*',
      redirect:'/home'
    }
  ]
})