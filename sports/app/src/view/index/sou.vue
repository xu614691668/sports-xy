<template>
    <div>
        <sear-head :content="s"></sear-head>
    </div>
</template>
<script>
import searHead from "@/components/public/pucesr"
export default {
    data(){
        return {
            s:"ipt"
        }
    },
    components:{
        searHead,
    }
}
</script>

