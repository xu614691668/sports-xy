<template>
    <div class="swiper-container" ref="lb">
        <div class="swiper-wrapper swip">
            <div class="swiper-slide"><img src="@/assets/img/indexswiper01.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="@/assets/img/indexswiper02.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="@/assets/img/indexswiper03.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="@/assets/img/indexswiper04.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="@/assets/img/indexswiper05.jpg" alt="" /></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
export default {
    name:"swiper",
    mounted(){
        this.$nextTick(()=>{
            new this.$swiper(this.$refs.lb,{
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        })
    }
}
</script>

<style>
    .swip{
        height: 2.9rem;
    }
    .swip img{
        width:100%;
        height: 100%;
    }
</style>

