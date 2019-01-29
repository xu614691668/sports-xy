<template>
    <div class="wd">
        <v-wdheade :content="w"></v-wdheade>
    </div>
</template>
<script>
import vWdheade from "@/components/public/pucesr.vue";
export default {
    data(){
        return {
            w:"个人中心"
        }
    },
    name:"zx",
    components:{
        vWdheade,
    }
}
</script>
<style>
    
</style>
