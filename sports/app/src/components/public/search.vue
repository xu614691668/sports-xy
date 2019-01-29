<template>
    <div class="public-search">
        <el-input
            placeholder="请输入关键词"
            v-model="input1">
        </el-input>
        <button class="el-icon-search" @click="ccc()"></button>
    </div>
</template>
<script>
export default {
    name:"search",
    data(){
        return {
            input1:""
        }
    },
    methods:{
        ccc(){
            this.$router.push({
                path:"/sou"
            })
        }
    }
}
</script>

<style scoped>
    .public-search button{
        width: 0.7rem;
        height: 0.62rem;
        border-left:none; 
        border-bottom-right-radius: 30px;
        border-top-right-radius: 30px;
        background: #cccccc;
        outline: none;
    }
</style>

