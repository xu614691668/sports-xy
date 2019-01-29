<template>
    <div class="cx">
        <v-cxheade :content="c"></v-cxheade>
    </div>
</template>
<script>
import vCxheade from "@/components/public/pucesr.vue";
export default {
    data(){
        return {
            c:"物流查询"
        }
    },
    name:"zx",
    components:{
        vCxheade,
    }
}
</script>
<style>
    
</style>>
