<template>
    <div class="syfoot">
        <ul>
            <router-link to="/sy">
                <li class="sy" @click="ft(a)">
                    <p v-if="index==1"></p>
                    <p v-else></p>
                </li>
            </router-link>
            <router-link to="">
                <li class="fx"  @click="b(true)">
                    <p v-if="index==2"></p>
                    <p v-else></p>
                </li>
            </router-link>
            <router-link to="/kf">
                <li class="kf" @click="ft(c)">
                    <p v-if="index==3"></p>
                    <p v-else></p>
                </li>
            </router-link>
            <router-link to="/car">
                <li class="car" @click="ft(d)">
                    <p v-if="index==4"></p>
                    <p v-else></p>
                </li>
            </router-link>
            <router-link to="/wd">
                <li class="wd" @click="ft(e)">
                    <p v-if="index==5"></p>
                    <p v-else></p>
                </li>
            </router-link>
        </ul>
        <div class="fff" v-show="bol">
            <v-fx></v-fx>
            <p @click="b(false)">取消</p>
        </div>
    </div>
</template>
<script>
import vFx from "@/components/index/fenXiang.vue"
export default {
    data(){
        return {
            a:1,
            c:3,
            d:4,
            e:5,
            index:1,
            bol:false
        }
    },
    components:{
        vFx
    },
    methods:{
           ft(aa){
               this.index=aa
           },
           b(bb){
               this.bol = bb
           }
       },
       directives:{//自定义指令
           focus:{
                inserted(el,option,vnode){
                    let str = vnode.elm.baseURI;
                    str = str.split("#/")
                    if(str[1]=="sy"){
                        vnode.context.index=1
                    }else if(str[1]=="kf"){
                        vnode.context.index=3
                    }else if(str[1]=="car"){
                        vnode.context.index=4
                    }else if(str[1]=="wd"){
                        vnode.context.index=5
                    }
                }
           }
       }
}
</script>
<style scoped>
.fff{
    width: 100%;
    height: 2.95rem;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: white;
}
.fff p{
    width: 100%;
    height: 1.01rem;
    line-height: 1.01rem;
    text-align: center;
    border-top: 1px solid #cccccc;
}
.syfoot ul{
     width: 100%;
     height: 1rem;
     background: white;
     position: fixed;
     bottom: 0;
     left: 0;
     display: flex;
 }
 .syfoot a{
     width: 20%;
     height: 1rem;
     text-align: center;
 }
  .syfoot ul li{
      width: 100%;
      height: 100%;
  }
 .syfoot ul p{
     width: 100%;
     height: 100%;
     background: url("../../assets/img/foottab.jpg") no-repeat;
     background-size: 6.4rem 2rem;
 }
.sy p:nth-of-type(1){
    background-position: 0px -50px;
}
.fx p:nth-of-type(1){
    background-position: -64px 0px;
}
.fx p:nth-of-type(2){
    background-position: -64px -50px;
}
.kf p:nth-of-type(1){
    background-position: -128px 0px;
}
.kf p:nth-of-type(2){
    background-position: -128px -50px;
}
.car p:nth-of-type(1){
    background-position: -192px 0px;
}
.car p:nth-of-type(2){
    background-position: -192px -50px;
}
.wd p:nth-of-type(1){
    background-position: -256px 0px;
}
.wd p:nth-of-type(2){
    background-position: -256px -50px;
}
</style>


