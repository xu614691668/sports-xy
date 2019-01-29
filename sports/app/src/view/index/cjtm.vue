<template>
<!-- 超级特卖会 -->
    <div class="cjtm">
        <v-zxheade :content="cj"></v-zxheade>
    </div>
</template>
<script>
import vZxheade from "@/components/public/pucesr.vue";
export default {
    data(){
        return {
            cj:"超级特卖会"
        }
    },
    name:"zx",
    components:{
        vZxheade,
    }
}
</script>
<style>
    
</style>
