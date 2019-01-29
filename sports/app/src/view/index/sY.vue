<template>
    <!-- 首页 -->
    <div class="sy">
        <v-heade></v-heade>
        <div class="xiazai"><img src="@/assets/img/xiazaiapp.png" alt=""></div>
        <v-swiper></v-swiper>
        <v-icon></v-icon>
        <v-yhq></v-yhq>
        <v-newsale></v-newsale>
    </div>
</template>
<script>
import vHeade from "@/components/index/sy/heade.vue"          
import vSwiper from "@/components/index/sy/swiper.vue"          
import vIcon from "@/components/index/sy/icon.vue"          
import vYhq from "@/components/index/sy/yhq.vue"          
import vNewsale from "@/components/index/sy/newsale.vue"          
export default {
    name:"heade",
    components:{
        vHeade,
        vSwiper,
        vIcon,
        vYhq,
        vNewsale,
    },
}
</script>
<style scoped>
    .xiazai{
        width: 100%;
    }
    .xiazai img{
        width:100%;
        height: 100%;
    }
    .sy{
        margin-bottom: 1rem;
    }
</style>



