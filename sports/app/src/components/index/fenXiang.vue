<template>
    <div class="fx-tab">
        <ul>
            <router-link to="/"><li></li></router-link>
            <router-link to="/"><li class="ll"></li></router-link>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.fx-tab ul{
    width: 100%;
    height: 1.94rem;
    display: flex;
}
.fx-tab ul li{
    width: 1.28rem;
    height: 1.94rem;
    background: url("../../assets/img/fengxiang_fxapp.png") no-repeat;
    background-size: 200% 100%;
}
.fx-tab ul .ll{
    background-position: -65px 0px;
}
</style>


