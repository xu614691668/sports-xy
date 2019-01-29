<template>
<!-- 首页优惠券 -->
    <div class="sy-min">
        <div class="yhq">
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <router-link to="/cjtm" class="cjtm"><img src="https://img0.52xie.com/data/afficheimg/1509565329130676049.jpg" alt=""></router-link>
    </div>
</template>
<script>
export default {
    name:"yhq",
    methods:{
        lq(){
            
        }
    }
}
</script>

<style>
.yhq{
    width: 100%;
    height: 1.8rem;
    display: flex;
    margin: 0.1rem 0;
}
.yhq div{
    background: url("https://img0.52xie.com/data/afficheimg/1508439735730314420.jpg") no-repeat;
    background-size: 7.5rem 1.8rem;
}
.yhq .left{
    width: 30%;
    height: 100%;
    background-position: 8px 0px;
}
.yhq .right{
    width: 70%;
    height: 100%;
    background-position: -115px 0px;
}
.cjtm{
    width: 100%;
    height: 1.8rem;
}
.cjtm img{
    width: 100%;
    height: 100%;
}
</style>

