<template>
    <div class="pu-head">
        <span class="el-icon-arrow-left" @click="black()"></span>
        <v-search v-if="content=='ipt'"></v-search>
        <div class="ly" v-else>{{content}}</div>
        <el-popover
            placement="bottom"
            width="100"
            trigger="click">
            <v-dao></v-dao>
            <button class="el-icon-more btn" slot="reference"></button>
        </el-popover>
    </div>
</template>
<script>
import vSearch from "@/components/public/search.vue"
import vDao from "@/components/public/daohang.vue"
export default {
    components:{
        vSearch,
        vDao,
    },
    methods:{
        black(){
            this.$router.push({
                path:"/sy"
            })
        }
    },
    props:['content'],
}
</script>
<style>
    .pu-head{
        width: 100%;
        display: flex;
        justify-content: space-around;
        height: 0.88rem;
        background: black;
        align-items: center;
        color: white;
    }
    .pu-head span{
        font-size: 25px;
    }
    .btn{
        background: black;
        color: white;
        font-size: 20px;
        border: none;
        outline: none;
    }
    .pu-head div{
        display: flex;
        height: 0.62rem;
    }
    .pu-head .ly{
        color: white;
        font-size: 16px;
        line-height: 0.62rem;
    }
    .el-input__inner{
        height: 0.62rem;
        border-right:none;
        border-bottom-left-radius: 30px;
        border-top-left-radius: 30px;
    }
    .el-popover{
        background: black;
        color: white;
        opacity: 0.5;
        min-width: 100px;
    }
</style>


