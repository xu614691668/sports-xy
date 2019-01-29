<template>
    <div class="zj">
       <router-link v-for="(item,index) in arr" :key="index" :to="item.route">
            <dl>
                <dt><img :src="item.tp" alt="" /></dt>
                <dd>{{item.name}}</dd>
            </dl>
       </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            arr:[
                {
                    tp:require('@/assets/img/spfl.png'),
                    name:"商品分类",
                    route:"/fen"
                },{
                    tp:require("@/assets/img/zxzx.png"),
                    name:"最新资讯",
                    route:"/zx"
                },{
                    tp:require("@/assets/img/wlcx.png"),
                    name:"物流查询",
                    route:"/cx"
                },{
                    tp:require("@/assets/img/grzx.png"),
                    name:"个人中心",
                    route:"/wd"
                },
            ]
        }
    }
}
</script>
<style>
    .zj{
        width: 100%;
        height: 1.6rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
    }
    .zj img{
        width: 0.85rem;
        height: 0.85rem;
    }
</style>


