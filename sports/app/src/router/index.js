import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/index.vue'
import sy from '@/view/index/sY.vue'
import kf from '@/view/index/keFu.vue'
import car from '@/view/index/shopCar.vue'
import wd from '@/view/index/woDe.vue'
import sou from '@/view/index/sou.vue'
import fen from '@/view/index/fen.vue'
import zx from '@/view/index/zx.vue'
import cx from '@/view/index/cx.vue'
import cjtm from '@/view/index/cjtm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect:"/sy",
      children:[{
        path:"/sy",
        name:"sy",
        meta:{
          isLogin:false
        },
        component:sy
      }]
    },{
      path:"/kf",
      name:"kf",
      meta:{
        isLogin:false
      },
      component:kf
    },{
      path:"/car",
      name:"car",
      meta:{
        isLogin:false
      },
      component:car
    },{
      path:"/wd",
      name:"wd",
      meta:{
        isLogin:false
      },
      component:wd
    },{
      path:"/sou",
      name:"sou",
      meta:{
        isLogin:false
      },
      component:sou
    },{
      path:"/fen",
      name:"fen",
      meta:{
        isLogin:false
      },
      component:fen
    },{
      path:"/zx",
      name:"zx",
      meta:{
        isLogin:false
      },
      component:zx
    },{
      path:"/cx",
      name:"cx",
      meta:{
        isLogin:false
      },
      component:cx
    },{
      path:"/cjtm",
      name:"cjtm",
      meta:{
        isLogin:false
      },
      component:cjtm
    }
  ]
})
