<template>
    <div class="zx">
        <v-zxheade :content="z"></v-zxheade>
    </div>
</template>
<script>
import vZxheade from "@/components/public/pucesr.vue";
export default {
    data(){
        return {
            z:"最新资讯"
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


