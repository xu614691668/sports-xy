<template>
    <div class="sy-head">
        <p><img src="@/assets/img/logo.gif" alt=""></p>
        <v-search></v-search>
        <span class="el-icon-tickets" @click="fen()"></span>
    </div>
</template>
<script>
import vSearch from "@/components/public/search.vue"
export default {
    name:"search",
    components:{
        vSearch,
    },
    methods:{
        fen(){
            this.$router.push({
                path:"/fen"
            })
        }
    }
}
</script>
<style>
    .sy-head{
        width: 100%;
        height: 0.88rem;
        line-height: 0.88rem;
        display: flex;
        flex-wrap: nowrap;
        background: black;
        align-items: center;
    }
    .sy-head p{
        width: 2rem;
        height: 90%;
    }
    .sy-head img{
        width: 100%;
        height: 100%;
    }
    .sy-head span{
        font-size: 30px;
        color: white;
    }
    .sy-head div{
        display: flex;
        height: 0.62rem;
    }
    .el-input__inner{
        height: 0.62rem;
        border-right:none;
        border-bottom-left-radius: 30px;
        border-top-left-radius: 30px;
    }
</style>



